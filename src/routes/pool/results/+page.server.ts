import { redirect } from '@sveltejs/kit'
import * as users from "$lib/models/users"
import * as winners from "$lib/models/winners"

export async function load ({ locals }) {
  if (locals.settings.live !== 'true') {
    throw redirect(302, '/pool/vote')
  }

  const [usersWithVotes, winnerEntries] = await Promise.all([
    users.findAllPaidWithVotes(),
    winners.findAll()
  ])
  const winnersMap = winners.mapWinners(winnerEntries)

  return { 
    usersWithVotes,
    winners: winnersMap,
  }
}
