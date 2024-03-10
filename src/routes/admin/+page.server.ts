import * as winners from "$lib/models/winners"

export async function load () {
  const winnerEntries = await winners.findAll()
  const winnersMap = winners.mapWinners(winnerEntries)

  return { 
    winners: winnersMap,
  }
}
