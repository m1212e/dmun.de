import { association, board, yearlyTopics } from '../../services/directus';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	return {
		content: await association(),
		yearlyTopics: await yearlyTopics(),
		board: await board()
	};
}
