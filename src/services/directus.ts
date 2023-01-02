/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Directus } from '@directus/sdk';
import type { DirectusType, Navbar } from 'src/interfaces/directus';
import { env } from '$env/dynamic/private';

if (env.DIRECTUS_URL === undefined) {
	throw new Error('DIRECTUS_URL env variable not set');
}
if (env.DIRECTUS_SECRET === undefined) {
	throw new Error('DIRECTUS_SECRET env variable not set');
}

const directus = new Directus<DirectusType>(env.DIRECTUS_URL);

/**
 * Promise which can be awaited to make sure the directus instance is logged in/initialized
 */
const initPromise = (async () => {
	await directus.auth.static(env.DIRECTUS_SECRET!);
})();

export async function getAvailableLanguageCodes(): Promise<string[]> {
	await initPromise;

	const result = await directus.items('languages').readByQuery();

	if (!result.data) {
		throw new Error('Could not fetch languages');
	}

	const data = result.data!;
	const mapped = data.map((lang) => lang!.code!);

	return mapped;
}

// --- queries per page/component ---

export async function nav() {
	await initPromise;
	return (
		await directus.items('navbar').readByQuery({
			fields: '*.*.*'
		} as any)
	).data as unknown as Navbar;
}

export async function footer() {
	await initPromise;
	return (
		await directus.items('footer').readByQuery({
			fields: '*.*.*'
		} as any)
	).data as unknown as Navbar;
}
