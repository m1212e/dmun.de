import { getGoalsData } from '../../services/directus';

export const prerender = true;

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	return {
		content: await getGoalsData()
	};
}
