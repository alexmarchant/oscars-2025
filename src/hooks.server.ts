import type { Cookies } from '@sveltejs/kit'
import { SessionTokenKey } from '$lib/contants'
import type { User } from '$lib/models/users'
import * as users from '$lib/models/users'
import * as settings from "$lib/models/settings"

export async function handle({ event, resolve }) {
  event.locals.settings = await getSettings()
  event.locals.user = await getUser(event.cookies)
  return resolve(event)
}

async function getUser(cookies: Cookies): Promise<User | null | undefined> {
	const sessionToken = cookies.get(SessionTokenKey)
  if (!sessionToken) return
  return users.findBySessionToken(sessionToken)
}

async function getSettings() {
  const mySettings = await settings.findAll()
  const kvSettings: Record<string, string> = {}

  for (const setting of mySettings) {
    kvSettings[setting.key] = setting.value
  }

  return kvSettings
}