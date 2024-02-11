<script lang="ts">
import { Categories } from '$lib/nominees'
import Radio from '$lib/components/Radio.svelte'
import Form from '$lib/components/Form.svelte'
import Button from '$lib/components/Button.svelte'

export let data
</script>

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

  <Button type="submit">
    Save
  </Button>
</Form>