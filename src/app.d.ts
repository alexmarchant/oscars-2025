// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
import { User } from '$lib/models/users'

declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			user?: User | null
			settings: Record<string, string>
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {}
