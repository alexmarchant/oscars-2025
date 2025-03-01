<script lang="ts">
export let classNames: string | undefined = undefined
</script>

<td class="border border-gray-400 text-left p-1 whitespace-nowrap {classNames}">
  <slot />
</td>