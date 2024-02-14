import type { VoteData } from "$lib/models/votes"
import * as votes from "$lib/models/votes"

export async function load ({ locals }) {
  const userVotes = await votes.findByUserId(locals.user!.id!)
  const voteMap = votes.mapVotes(userVotes)

  return { 
    voteMap,
  }
}

export const actions = {
	async default ({ locals, request }) {
    const userId = locals.user!.id!
		const data = await request.formData()

    const upsertData: VoteData[] = []

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