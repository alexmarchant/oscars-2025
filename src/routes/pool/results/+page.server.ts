import { redirect } from '@sveltejs/kit'

export async function load ({ locals }) {
  if (locals.settings.live !== 'true') {
    throw redirect(302, '/pool/vote')
  }
}
