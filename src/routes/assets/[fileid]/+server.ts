import { env } from '$env/dynamic/private';
import { error } from '@sveltejs/kit';

export const prerender = true;

/** @type {import('./$types').RequestHandler} */
export async function GET({ params: { fileid } }: { params: { fileid: string } }) {
	const result = await fetch(`${env.DIRECTUS_URL}/assets/${fileid}`, {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${env.DIRECTUS_SECRET}`
		}
	});

	if (result.status != 200) {
		console.error(
			`Result of failed request for file with id "${fileid}": ${JSON.stringify(
				await result.json()
			)}`
		);
		throw error(result.status, 'Request failed. See server logs for details');
	}

	// convert this to a blob to make sveltekit prerender. See https://github.com/sveltejs/kit/issues/1567
	return new Response(await result.blob());
}
