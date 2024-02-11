import type { Cookies } from '@sveltejs/kit'
import { SessionTokenKey } from '$lib/contants'
import type { User } from '$lib/models/users'
import * as users from '$lib/models/users'

export async function handle({ event, resolve }) {
  event.locals.user = await getUser(event.cookies)
  return resolve(event)
}

async function getUser(cookies: Cookies): Promise<User | null | undefined> {
	const sessionToken = cookies.get(SessionTokenKey)
  if (!sessionToken) return
  return users.findBySessionToken(sessionToken)
}