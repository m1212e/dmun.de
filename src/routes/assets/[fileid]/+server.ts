import { env } from "$env/dynamic/private";
import { error } from "@sveltejs/kit";

export const prerender = true;

/** @type {import('./$types').RequestHandler} */
export async function GET({
	params: { fileid },
}: { params: { fileid: string } }) {
	const result = await fetch(`${env.DIRECTUS_URL}/assets/${fileid}`, {
		method: "GET",
		headers: {
			Authorization: `Bearer ${env.DIRECTUS_SECRET}`,
		},
	});

	if (result.status != 200) {
		console.error(
			`Result of failed request for file with id "${fileid}": ${JSON.stringify(
				await result.json(),
			)}`,
		);
		throw error(result.status, "Request failed. See server logs for details");
	}

	const res = new Response(await result.blob());
	const contentType = res.headers.get("Content-Type");
	if (contentType) {
		res.headers.set("Content-Type", contentType);
	}

	return res;
}
