import { error, json } from '@sveltejs/kit'
import type { User } from '$lib/models/users'
import * as users from '$lib/models/users'

const UserWhitelist: (keyof User)[] = [
  'paid',
]

export async function PATCH ({ locals, request }) {
  if (!locals.user) return error(401)

  const body = await request.json()
  if (!validatePatchBody(body)) {
    return error(400, 'Invalid body')
  }

  const updatedUser = await users.update(locals.user.id, body)

  return json({ user: updatedUser })
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function validatePatchBody(body: any): body is Partial<User> {
  if (!body) return false

  // Validate only whitelisted keys
  for (const key in body) {
    if (!UserWhitelist.includes(key as keyof User)) {
      return false
    }
  }
  
  return true
}