<script lang="ts">
import { Categories } from '$lib/nominees'
import Radio from '$lib/components/Radio.svelte'
import Form from '$lib/components/Form.svelte'
import Button from '$lib/components/Button.svelte'
import A from '$lib/components/A.svelte'
import Message from '$lib/components/Message.svelte'

export let data
export let form
</script>

{#if form?.saved}<Message type="success">Your votes have been saved</Message>{/if}

<Form>
  {#each Categories as category}
    <div class="mb-2">
      <h2>
        <u>
          {category.name}
        </u>
      </h2>

      <ul>
        {#each category.nominees as nominee}
          <li>
            <Radio
              name={category.name}
              displayName={nominee}
              value={nominee}
              checked={data.votes[category.name] === nominee}
            />
          </li>
        {/each}
      </ul>
    </div>
  {/each}

  <p class="mb-2">
    <Button type="submit">
      Save
    </Button>
  </p>
  <p class="mb-2">
    <A href="https://account.venmo.com/u/amarchant" target="_blank">
      Send $10 to @amarchant on venmo &gt;&gt;
    </A>
  </p>
</Form>