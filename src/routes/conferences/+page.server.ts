import { conferences, modelUn } from '../../services/directus';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	return {
		conferences: await conferences(),
		content: await modelUn()
	};
}
