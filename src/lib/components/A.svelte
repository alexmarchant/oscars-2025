<script lang="ts">
export let href: string
export let target: '_self' | '_blank' = '_self'
</script>

<a
  href={href}
  target={target}
  class="text-blue-600 hover:underline"
>
  <slot />
</a>