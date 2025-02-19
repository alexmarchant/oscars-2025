import prisma from './lib/prisma'
import { Categories } from './lib/nominees'
import { writeFile } from 'fs/promises'


const filename = 'oscar-pool-2024-results.csv'

interface UserEntity {
  id: number
  displayName: string
  votes: {
    id: number
    userId: number
    category: string
    nominee: string
  }[]
}

interface UserModel {
  displayName: string
  votes: Record<string, string>
  points: number
}

async function main () {
  const rows: string[][]  = []

  const winners = await prisma.winner.findMany()
  const winnersMap: Record<string, string> = {}
  for (const winner of winners) {
    winnersMap[winner.category] = winner.nominee
  }

  const users = await prisma.user.findMany({
    select: {
      id: true,
      displayName: true,
      votes: true,
      email: true,
      paid: true
    }
  })
  console.log(users.filter(user => user.paid).length, 'paid users')
  const userModels = users.map(user => mapUser(user, winnersMap))
  userModels.push(getAverageUser(userModels, winnersMap))
  const sortedUserModels = userModels.sort((a, b) => b.points - a.points)

  // header row
  const headerRow = ['Name']
  for (const category of Categories) {
    headerRow.push(`"${category.name}"`)
  }
  headerRow.push('Total')
  rows.push(headerRow)

  // points row
  const poinstRow = ['Points']
  for (const category of Categories) {
    poinstRow.push(category.points.toString())
  }
  rows.push(poinstRow)

  // winner row
  const winnerRow = ['Winner']
  for (const category of Categories) {
    winnerRow.push(`"${winnersMap[category.name]}"`)
  }
  rows.push(winnerRow)

  // user rows
  for (const user of sortedUserModels) {
    const row = [user.displayName]
    for (const category of Categories) {
      const emoji = user.votes[category.name] === winnersMap[category.name] ? '✅' : '❌'
      const cell = `"${emoji} - ${user.votes[category.name]}"`
      row.push(cell)
    }
    row.push(user.points.toString())
    rows.push(row)
  }

  const csvString = rows.map(row => row.join(',')).join('\n')
  await writeFile(filename, csvString)
}

function mapUser(user: UserEntity, winners: Record<string, string>): UserModel {
  const votes: Record<string, string> = {}

  for (const vote of user.votes) {
    votes[vote.category] = vote.nominee
  }

  return {
    displayName: user.displayName,
    votes,
    points: calculatePoints(votes, winners)
  }
}

function calculatePoints(votes: Record<string, string>, winners: Record<string, string>): number {
  let score = 0

  for (const category of Categories) {
    const winner = winners[category.name]
    const vote = votes[category.name]

    if (vote === winner) {
      score += category.points
    }
  }

  return score
}

function getAverageUser (users: UserModel[], winners: Record<string, string>): UserModel {
  const votes: Record<string, string> = {}

  for (const category of Categories) {
    const voteTally: Record<string, number> = {}

    for (const user of users) {
      const vote = user.votes[category.name]
      if (!voteTally[vote]) voteTally[vote] = 0
      voteTally[vote]++
    }

    const mostPicked = Object.entries(voteTally).sort((a, b) => b[1] - a[1])[0][0]

    votes[category.name] = mostPicked
  }

  return {
    displayName: 'Avergage (Most selected in each category)',
    votes,
    points: calculatePoints(votes, winners)
  }
}

main()