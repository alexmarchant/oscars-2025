import { User } from '$lib/models/user'
import { SessionTokenKey } from '$lib/contants'
import { redirect } from '@sveltejs/kit'

export async function load ({ cookies }) {
	const sessionToken = cookies.get(SessionTokenKey)

  if (!sessionToken) {
    console.log('Missing sessionToken')
    unauthorized()
  }

  const user = await User.findBySessionToken({ sessionToken })

  if (!user) {
    console.log(`No user found with sessionToken: ${sessionToken}`)
    unauthorized()
  }

	return {
		user: user.toJSON(),
	}
}

function unauthorized (): never {
  throw redirect(302, '/auth/signup')
}