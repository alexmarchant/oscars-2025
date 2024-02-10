<script lang="ts">
	import type { ActionData } from './$types'
	export let form: ActionData
</script>

<h1>Signup</h1>

<form method="POST">
  <p>
    <label>
      Display name
      <input type="text" name="displayName" value={form?.displayName ?? ''} />
    </label>
  </p>

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

  <p>
    <label>
      Confirm password
      <input type="password" name="passwordConfirmation" value={form?.passwordConfirmation ?? ''} />
    </label>
  </p>

  {#if form?.missingRequired}<p class="error">Missing required fields</p>{/if}
  {#if form?.invalidEmail}<p class="error">Invalid email</p>{/if}
  {#if form?.passwordMatch}<p class="error">Passwords don't match</p>{/if}

  <p>
    <button type="submit">Signup</button>
  </p>
</form>