<script lang="ts">
import Input from '$lib/components/Input.svelte'
import Error from '$lib/components/Error.svelte'
import Button from '$lib/components/Button.svelte'
import Form from '$lib/components/Form.svelte'
import A from '$lib/components/A.svelte' 

export let form
</script>

<Form>
  <Input
    type="email"
    displayName="Email"
    name="email"
    value={form?.email ?? ''}
  />
  <Input
    type="password"
    displayName="Password"
    name="password"
    value={form?.password ?? ''}
  />

  {#if form?.missingRequired}<Error>Missing required fields</Error>{/if}
  {#if form?.incorrectEmailOrPassword}<Error>Incorrect email or password</Error>{/if}

  <p>
    <Button type="submit">
      Login
    </Button>
  </p>
</Form>

<A href="/auth/signup">Signup &gt;&gt;</A>