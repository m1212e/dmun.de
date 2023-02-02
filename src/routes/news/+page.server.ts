import { news, yearlyTopics } from "../../services/directus";

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	return {
		content: await news(),
		yearlyTopics: await yearlyTopics(),
	};
}
