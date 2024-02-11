<script lang="ts">
export let type: 'error' | 'success' = 'error'

$: textClass = {
  error: 'text-red-500',
  success: 'text-green-500'
}[type]
</script>

<p class={`${textClass} mb-2`}>
  <slot />
</p>