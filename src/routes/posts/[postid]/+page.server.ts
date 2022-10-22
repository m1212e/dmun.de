import { getPosts, getSinglePost } from '../../../services/directus';

/** @type {import('./$types').PageLoad} */
export async function load({ params: { postid } }: { params: { postid: string } }) {
	const parsedPostId = Number.parseInt(postid);
	const post = await getSinglePost(parsedPostId);
	return { post };
}
