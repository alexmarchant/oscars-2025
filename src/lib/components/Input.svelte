<script lang="ts">
export let type: 'text' | 'password' | 'email' = 'text'
export let displayName: string
export let name: string
export let value: string
</script>

<div class="mb-2">
  <label>
    {displayName}
    <br>
    <input
      class="border border-black rounded-none outline-none w-full px-2 py-1"
      type={type}
      name={name}
      value={value}
    />
  </label>
</div>