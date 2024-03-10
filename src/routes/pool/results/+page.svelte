<script lang="ts">
import type { UserWithVotes } from '$lib/models/users.js'
import { CategoryMap } from '$lib/nominees'
import axios from 'axios'

export let data

async function fetchWinners() {
  try {
    const res = await axios.get<Record<string, string>>('/api/winners')
    const winners = res.data
    data.winners = winners
  } catch (e) {
    console.error('Having trouble fetching winners')
  }
}

function score (user: UserWithVotes): number {
  let sum = 0

  for (const vote of user.votes) {
    const category = CategoryMap[vote.category]
    const winner = data.winners[vote.category]

    if (vote.nominee === winner) {
      sum += category.points
    }
  }

  return sum
}

type DispalyUserModel = UserWithVotes & {
  score: number
}

$: usersWithVotesAndScores = data.paidUsers.map<DispalyUserModel>(user => ({
  ...user,
  score: score(user)
}))

$: sortedUsersWithVotesAndScores = usersWithVotesAndScores.sort((a, b) => b.score - a.score)

// Get winners every 5 seconds
setInterval(fetchWinners, 5000)
</script>

<table class="w-full border-collapse border">
  <thead>
    <tr class="bg-gray-200">
      <th class="border text-left p-1">Name</th>
      <th class="border text-center p-1">Complete Ballot</th>
      <th class="border text-center p-1">Paid</th>
      <th class="border text-right p-1">Points</th>
    </tr>
  </thead>
  <tbody>
    {#each sortedUsersWithVotesAndScores as user}
      <tr>
        <td class="border text-left p-1">
          {user.displayName}
        </td>
        <td class="border text-center p-1">
          {user.votes.length === 23 ? '✅' : ''}
        </td>
        <td class="border text-center p-1">
          {user.paid ? '💰' : ''}
        </td>
        <td class="border text-right p-1">{user.score}</td>
      </tr>
    {/each}
  </tbody>
</table>