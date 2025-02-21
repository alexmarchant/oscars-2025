import { SessionTokenKey } from '$lib/constants'
import { redirect } from '@sveltejs/kit'

export const actions = {
	async default ({ cookies }) {
		cookies.delete(SessionTokenKey, { path: '/' })
		redirect(302, '/auth/signup')
	},
}