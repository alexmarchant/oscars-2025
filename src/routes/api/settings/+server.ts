import { error } from '@sveltejs/kit'
import * as settings from '$lib/models/settings'

export async function PUT ({ locals, request }) {
  if (!locals.user) return error(401)
  if (!locals.user.admin) return error(401)

  const body = await request.json()
  if (!validatePutBody(body)) {
    return error(400, 'Invalid body')
  }

  await settings.upsert({
    key: body.key,
    value: body.value
  })

  return new Response(null, { status: 200 })
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function validatePutBody(body: any): body is { key: string, value: string } {
  if (!body) return false
  if (!body.key || !body.value) return false
  return true
}