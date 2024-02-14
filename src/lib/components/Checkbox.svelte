<script lang="ts">
  export let name: string
  export let value: string
  export let checked: boolean = false
  </script>
  
  <label class="flex items-center">
    <input
      class="mr-2"
      type="checkbox"
      name={name}
      value={value}
      checked={checked}
      on:input
    />
    <slot />
  </label>