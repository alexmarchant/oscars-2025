import { Pick } from "$lib/models/picks"

export const actions = {
	async default ({ locals, request }) {
		const data = await request.formData()

    const picks: Pick[] = []

    for (const entry of data.entries()) {
      const category = entry[0]
      const nominee = entry[1]

      if (typeof nominee !== 'string') {
        throw new Error('Nominee must be a string')
      }

      const pick = new Pick({
        userId: locals.user!.id!,
        category,
        nominee,
      })
      picks.push(pick)
    }

    await Pick.upsert(picks)
    console.log(picks)
	},
}