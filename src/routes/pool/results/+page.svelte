<script lang="ts">
import type { UserWithVotes } from '$lib/models/users.js'
import { CategoryMap } from '$lib/nominees'

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

export let data

type UserWithVotesAndScores = UserWithVotes & { score: number }

$: usersWithVotesAndScores = data.paidUsers.map<UserWithVotesAndScores>(user => ({
  ...user,
  score: score(user)
}))

$: sortedUsersWithVotesAndScores = usersWithVotesAndScores.sort((a, b) => b.score - a.score)
</script>

<table class="w-full border-collapse border">
  <thead>
    <tr class="bg-gray-200">
      <th class="border text-left p-1">Name</th>
      <th class="border text-right p-1">Points</th>
    </tr>
  </thead>
  <tbody>
    {#each sortedUsersWithVotesAndScores as user}
      <tr>
        <td class="border text-left p-1">{user.displayName}</td>
        <td class="border text-right p-1">{user.score}</td>
      </tr>
    {/each}
  </tbody>
</table>