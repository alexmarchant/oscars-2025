import { redirect } from '@sveltejs/kit'
import type { VoteData } from "$lib/models/votes"
import * as votes from "$lib/models/votes"

export async function load ({ locals }) {
  if (locals.settings.live === 'true') {
    throw redirect(302, '/pool/results')
  }

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

    await votes.upsertMany({
      userId,
      votes: upsertData,
    })

    return {
      saved: true
    }
	},
}