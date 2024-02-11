<script lang="ts">
import { Categories } from '$lib/nominees'
</script>

{#each Categories as category}
  <h2>{category.name}</h2>

  <ul>
    {#each category.nominees as nominee}
      <li>{nominee}</li>
    {/each}
  </ul>
{/each}