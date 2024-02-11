<script lang="ts">
export let type: 'button' | 'submit' = 'button'
export let className = ''
</script>

<button
  class={`${className} border border-black px-2 py-1 hover:bg-gray-200`}
  type={type}
>
  <slot />
</button>