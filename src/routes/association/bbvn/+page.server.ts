import { bbvn } from "../../../services/directus";

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	return {
		content: await bbvn(),
	};
}
