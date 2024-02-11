<script lang="ts">
export let data
</script>

<div class="flex justify-between items-center my-1 mx-3">
  <div>
    <h1>Oscar Pool 2024</h1>
  </div>

  <div class="flex items-center">
    <div>
      {data.user.displayName}
    </div>

    <form method="POST" action="/auth/logout">
      <button class="ml-5 border-2 border-black px-2 py-1 hover:bg-gray-200">
        Logout
      </button>
    </form>
  </div>
</div>

<slot></slot>