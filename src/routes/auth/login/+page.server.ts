import { fail } from '@sveltejs/kit'
import { User } from '$lib/models/user'
import { SessionTokenKey } from '$lib/contants'
import { redirect } from '@sveltejs/kit'

export const actions = {
	async default ({ request, cookies }) {
		const data = await request.formData()

		const email = data.get('email')?.toString()
		const password = data.get('password')?.toString()
		const values = { email, password }

		if (!email || !password) {
			return fail(400, {
				...values,
				missingRequired: true,
			})
		}

		const sessionToken = await User.auth({
			email,
			password,
		})

		if (!sessionToken) {
			return fail(400, {
				...values,
				incorrectEmailOrPassword: true,
			})
		}

		cookies.set(SessionTokenKey, sessionToken, { path: '/' })

		redirect(302, '/pool')
	},
}