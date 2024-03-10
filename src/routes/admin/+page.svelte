<script lang="ts">
import { Categories } from '$lib/nominees'
import Radio from '$lib/components/Radio.svelte'
import Checkbox from '$lib/components/Checkbox.svelte'
import Button from '$lib/components/Button.svelte'

async function handleCheckLive(event: Event) {
  const target = event.target as HTMLInputElement
  const oldValue = data.settings.live
  const newValue = target.checked ? 'true' : 'false'

  try {
    data.settings.live = newValue
    await fetch('/api/settings', {
      method: 'PUT',
      body: JSON.stringify({ key: 'live', value: newValue }),
    })
  } catch (e) {
    data.settings.live = oldValue
    alert('Sorry we ran into an issue')
  }
}

async function handleWinnerSelect(category: string, nominee: string) {
  const oldWinner = data.winners[category]

  try {
    data.winners[category] = nominee
    await fetch('/api/winners', {
      method: 'PUT',
      body: JSON.stringify({ category, nominee }),
    })
  } catch (e) {
    data.winners[category] = oldWinner
    alert('Sorry we ran into an issue')
  }
}

async function handleWinnerDelete(category: string) {
  const oldWinner = data.winners[category]

  try {
    delete data.winners[category]
    data.winners = data.winners
    await fetch('/api/winners', {
      method: 'DELETE',
      body: JSON.stringify({ category }),
    })
  } catch (e) {
    data.winners[category] = oldWinner
    alert('Sorry we ran into an issue')
  }
}

export let data
</script>

<h1 class="mb-2">
  Admin
</h1>

<h2>Settings</h2>
<div class="mb-2">
  <h2>
    <u>
      Live
    </u>
  </h2>

  <Checkbox
    name="live"
    value="live"
    checked={data.settings.live === 'true'}
    on:input={handleCheckLive}
  />
</div>

<h2>Winners</h2>

{#each Categories as category}
  <div class="mb-2">
    <h2>
      <u>
        {category.name}
      </u>
    </h2>

    <ul class="mb-1">
      {#each category.nominees as nominee}
        <li>
          <Radio
            name={category.name}
            value={nominee}
            checked={data.winners[category.name] === nominee}
            on:input={() => handleWinnerSelect(category.name, nominee)}
          >
            {nominee}
          </Radio>
        </li>
      {/each}
    </ul>

    <Button on:click={() => handleWinnerDelete(category.name)}>
      Clear
    </Button>
  </div>
{/each}
