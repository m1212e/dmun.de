import { getPosts } from '../../services/directus';

/** @type {import('./$types').PageLoad} */
export async function load() {
	return { posts: await getPosts(false) };
}
