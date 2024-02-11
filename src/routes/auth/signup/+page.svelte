<script lang="ts">
import type { ActionData } from './$types'
import Input from '$lib/components/Input.svelte' 
import Button from '$lib/components/Button.svelte'
import Message from '$lib/components/Message.svelte'
import Form from '$lib/components/Form.svelte'
import A from '$lib/components/A.svelte' 

export let form: ActionData
</script>

<Form>
  <Input
    type="text"
    displayName="Display name"
    name="displayName"
    value={form?.displayName ?? ''}
  />
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
  <Input
    type="password"
    displayName="Confirm password"
    name="passwordConfirmation"
    value={form?.passwordConfirmation ?? ''}
  />

  {#if form?.missingRequired}<Message type="error">Missing required fields</Message>{/if}
  {#if form?.invalidEmail}<Message type="error">Invalid email</Message>{/if}
  {#if form?.passwordMatch}<Message type="error">Passwords don't match</Message>{/if}

  <p>
    <Button type="submit">
      Signup
    </Button>
  </p>
</Form>

<A href="/auth/login">Login &gt;&gt;</A>