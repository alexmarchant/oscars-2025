<script lang="ts">
import type { UserWithVotes } from '$lib/models/users.js'
import TD from '$lib/components/TD.svelte'
import TH from '$lib/components/TH.svelte'
import { CategoryMap, Categories } from '$lib/nominees'
import type { Category} from '$lib/nominees'
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
  voteMap: Record<string, string>
}

$: usersWithVotesAndScores = data.paidUsers.map<DispalyUserModel>(user => ({
  ...user,
  score: score(user),
  voteMap: Object.fromEntries(user.votes.map(vote => [vote.category, vote.nominee])),
}))

$: sortedUsersWithVotesAndScores = usersWithVotesAndScores.sort((a, b) => b.score - a.score)

function votePrefix(user: DispalyUserModel, category: Category): string {
  if (!data.winners[category.name]) return ''
  return user.voteMap[category.name] === data.winners[category.name] ? '✅ - ' : '❌ - '
}

// Get winners every 5 seconds
setInterval(fetchWinners, 5000)
</script>

<table class="w-full border-collapse border border-gray-400">
  <thead>
    <tr class="bg-gray-200">
      <TH classNames="text-left">Name</TH>
      <TH>Score</TH>
      <TH>Paid</TH>
      {#each Categories as category}
        <TH >{category.name}</TH>
      {/each}
    </tr>
  </thead>
  <tbody>
    <tr>
      <TD>Winner</TD>
      <TD></TD>
      <TD></TD>
      {#each Categories as category}
        <TD>{data.winners[category.name] ?? ''}</TD>
      {/each}
    </tr>
    <tr>
      <TD>Points</TD>
      <TD></TD>
      <TD></TD>
      {#each Categories as category}
        <TD>{category.points}</TD>
      {/each}
    </tr>
    {#each sortedUsersWithVotesAndScores as user}
      <tr class="{data.user.id === user.id ? 'bg-yellow-50': ''}">
        <TD classNames="text-left">
          {user.displayName}
        </TD>
        <TD>{user.score}</TD>
        <TD>
          {user.paid ? '✅' : '❌'}
        </TD>
        {#each Categories as category}
          <TD>
            {votePrefix(user, category)}{user.voteMap[category.name] ?? ''}
          </TD>
        {/each}
      </tr>
    {/each}
  </tbody>
</table>