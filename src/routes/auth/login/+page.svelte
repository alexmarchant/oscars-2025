<script lang="ts">
	import type { ActionData } from './$types'
	export let form: ActionData
</script>

<h1>Signup</h1>

<form method="POST">
  <p>
    <label>
      Email
      <input type="email" name="email" value={form?.email ?? ''} />
    </label>
  </p>

  <p>
    <label>
      Password
      <input type="password" name="password" value={form?.password ?? ''} />
    </label>
  </p>

  {#if form?.missingRequired}<p class="error">Missing required fields</p>{/if}
  {#if form?.incorrectEmailOrPassword}<p class="error">Incorrect email or password</p>{/if}

  <p>
    <button type="submit">Login</button>
  </p>
</form>