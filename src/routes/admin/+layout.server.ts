import { redirect, fail } from '@sveltejs/kit'

export async function load ({ locals }) {
  if (!locals.user) {
    throw redirect(302, '/auth/signup')
  }

  console.log(locals.user)
  if (!locals.user.admin) {
    throw fail(401)
  }

  return {
    settings: locals.settings
  }
}

