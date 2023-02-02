import { news } from '../../../services/directus';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params: { id } }: { params: { id: string } }) {

	return {
		content: (await news()).find((n) => n.id == id)
	};
}
