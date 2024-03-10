import { error } from '@sveltejs/kit'
import * as winners from '$lib/models/winners'

export async function PUT ({ locals, request }) {
  if (!locals.user) return error(401)
  if (!locals.user.admin) return error(401)

  const body = await request.json()
  if (!validatePutBody(body)) {
    return error(400, 'Invalid body')
  }

  await winners.upsertOne({
    category: body.category,
    nominee: body.nominee,
  })

  return new Response(null, { status: 200 })
}

export async function DELETE ({ locals, request }) {
  if (!locals.user) return error(401)
  if (!locals.user.admin) return error(401)

  const body = await request.json()
  if (!validateDeleteBody(body)) {
    return error(400, 'Invalid body')
  }

  await winners.deleteOne(body.category)

  return new Response(null, { status: 200 })
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function validatePutBody(body: any): body is { category: string, nominee: string } {
  if (!body) return false
  if (!body.category || !body.nominee) return false
  return true
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function validateDeleteBody(body: any): body is { category: string } {
  if (!body) return false
  if (!body.category) return false
  return true
}