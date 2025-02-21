<script lang="ts">
import Button from '$lib/components/Button.svelte'

export let data
</script>

<div class="flex justify-between items-center mb-2">
  <div>
    <h1>Oscar Pool 2025</h1>
  </div>

  <div class="flex items-center">
    <div>
      {data.user.displayName}
    </div>

    <form method="POST" action="/auth/logout">
      <Button type="submit" className="ml-2">
        Logout
      </Button>
    </form>
  </div>
</div>

<slot></slot>