import { fail } from '@sveltejs/kit'
import { User } from '$lib/models/user'
import { SessionTokenKey } from '$lib/contants'
import { redirect } from '@sveltejs/kit'
import { validateEmail } from '$lib/validations'

export const actions = {
	async default ({ request, cookies }) {
		const data = await request.formData()

		const displayName = data.get('displayName')?.toString()
		const email = data.get('email')?.toString()
		const password = data.get('password')?.toString()
		const passwordConfirmation = data.get('passwordConfirmation')?.toString()
		const values = { displayName, email, password, passwordConfirmation }

		if (!displayName || !email || !password || !passwordConfirmation) {
			return fail(400, {
				...values,
				missingRequired: true,
			})
		}

		if (!validateEmail(email)) {
			return fail(400, {
				...values,
				invalidEmail: true,
			})
		}

		if (password !== passwordConfirmation) {
			return fail(400, {
				...values,
				passwordMatch: false,
			})
		}

		const sessionToken = await User.create({
			displayName,
			email,
			password,
		})

		cookies.set(SessionTokenKey, sessionToken, { path: '/' })

		redirect(302, '/pool')
	},
}