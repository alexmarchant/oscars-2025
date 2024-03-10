<script lang="ts">
import { Categories } from '$lib/nominees'
import Radio from '$lib/components/Radio.svelte'
import Checkbox from '$lib/components/Checkbox.svelte'
import A from '$lib/components/A.svelte'

export let data

async function handleNomineeSelect(category: string, nominee: string) {
  const oldCategoryVote = data.voteMap[category]

  try {
    data.voteMap[category] = nominee
    await fetch('/api/votes', {
      method: 'PUT',
      body: JSON.stringify({ category, nominee }),
    })
  } catch (e) {
    data.voteMap[category] = oldCategoryVote
    alert('Sorry we ran into an issue')
  }
}

async function handlePaidInput(e: Event) {
  const oldPaidValue = data.user.paid

  const target = e.target as HTMLInputElement
  const newPaidValue = target.checked

  try {
    data.user.paid = newPaidValue
    await fetch('/api/users', {
      method: 'PATCH',
      body: JSON.stringify({ paid: newPaidValue }),
    })
  } catch (e) {
    data.user.paid = oldPaidValue
    alert('Sorry we ran into an issue')
  }
}
</script>

{#each Categories as category}
  <div class="mb-2">
    <h2>
      <u>
        {category.name}
      </u>
      {#if data.voteMap[category.name]}✅{/if}
    </h2>

    <ul>
      {#each category.nominees as nominee}
        <li>
          <Radio
            name={category.name}
            value={nominee}
            checked={data.voteMap[category.name] === nominee}
            on:input={() => handleNomineeSelect(category.name, nominee)}
          >
            {nominee}
          </Radio>
        </li>
      {/each}
    </ul>
  </div>
{/each}

<p class="mb-2">
  {Object.entries(data.voteMap).length}
  /
  {Categories.length}
  votes have been successfully saved.
  {#if Object.entries(data.voteMap).length === Categories.length}✅{/if}
</p>

<p class="mb-2">
  <A href="https://account.venmo.com/u/amarchant" target="_blank">
    Send $10 to @amarchant on venmo &gt;&gt;
  </A>
</p>
<p class="mb-2">
  <Checkbox
    name="paid"
    value="true"
    checked={data.user.paid}
    on:input={handlePaidInput}
  >
    I paid $10
    {#if data.user.paid}✅{/if}
  </Checkbox>
</p>