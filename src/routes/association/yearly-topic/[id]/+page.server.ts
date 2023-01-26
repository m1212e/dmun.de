import { yearlyTopics } from '../../../../services/directus';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params: { id } }: { params: { id: string } }) {
	console.log(id);
	console.log(await yearlyTopics());

	return {
		content: (await yearlyTopics()).find((t) => t.id == id)
	};
}
