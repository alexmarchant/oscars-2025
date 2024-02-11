<script lang="ts">
export let displayName: string
export let name: string
export let value: string
</script>

<label class="flex items-center">
  <input
    class="mr-2"
    type="radio"
    name={name}
    value={value}
  />
  {displayName}
</label>