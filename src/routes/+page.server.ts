import { home, sponsors } from '../services/directus';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	return {
		content: await home(),
		// sponsors: await sponsors()
	};
}
