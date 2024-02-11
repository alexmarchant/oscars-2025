import type { UpsertVoteData } from "$lib/models/votes"
import * as votes from "$lib/models/votes"

export async function load ({ locals }) {
  const userId = locals.user!.id!
  const userVotes = await votes.findByUserId(userId)

  return { 
    votes: votes.mapVotes(userVotes),
  }
}

export const actions = {
	async default ({ locals, request }) {
    const userId = locals.user!.id!
		const data = await request.formData()

    const upsertData: UpsertVoteData[] = []

    for (const entry of data.entries()) {
      const category = entry[0]
      const nominee = entry[1]

      if (typeof nominee !== 'string') {
        throw new Error('Nominee must be a string')
      }

      upsertData.push({
        category,
        nominee,
      })
    }

    await votes.upsert({
      userId,
      votes: upsertData,
    })

    return {
      saved: true
    }
	},
}