import { fail } from '@sveltejs/kit'
import * as users from '$lib/models/users'
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

		let authResult: Awaited<ReturnType<typeof users.auth>>
		try {
			authResult = await users.auth({
				email,
				password,
			})
		} catch (error) {
			return fail(400, {
				...values,
				incorrectEmailOrPassword: true,
			})
		}

		cookies.set(SessionTokenKey, authResult.sessionToken, { path: '/' })

		redirect(302, '/pool')
	},
}