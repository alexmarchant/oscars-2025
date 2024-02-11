<script lang="ts">
import Input from '$lib/components/Input.svelte'
import Message from '$lib/components/Message.svelte'
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

  {#if form?.missingRequired}<Message type="error">Missing required fields</Message>{/if}
  {#if form?.incorrectEmailOrPassword}<Message type="error">Incorrect email or password</Message>{/if}

  <p>
    <Button type="submit">
      Login
    </Button>
  </p>
</Form>

<A href="/auth/signup">Signup &gt;&gt;</A>