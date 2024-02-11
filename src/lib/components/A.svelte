<script lang="ts">
export let href: string
</script>

<a href={href} class="text-blue-600 hover:underline">
  <slot />
</a>