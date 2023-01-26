/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Directus } from '@directus/sdk';
import type {
	Association,
	Board,
	Conference,
	DirectusType,
	Home,
	Imprint,
	ModelUN,
	Navbar,
	YearlyTopic
} from 'src/interfaces/directus';
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

export async function imprint() {
	await initPromise;
	return (
		await directus.items('imprint').readByQuery({
			fields: '*.*.*'
		} as any)
	).data as unknown as Imprint;
}

export async function home() {
	await initPromise;
	return (
		await directus.items('home').readByQuery({
			fields: '*.*.*'
		} as any)
	).data as unknown as Home;
}

export async function conferences() {
	await initPromise;
	return (
		await directus.items('conferences').readByQuery({
			fields: '*.*.*'
		} as any)
	).data as unknown as Conference[];
}

export async function modelUn() {
	await initPromise;
	return (
		await directus.items('model_un').readByQuery({
			fields: '*.*.*'
		} as any)
	).data as unknown as ModelUN;
}

export async function association() {
	await initPromise;
	return (
		await directus.items('association').readByQuery({
			fields: '*.*.*'
		} as any)
	).data as unknown as Association;
}

export async function yearlyTopics() {
	await initPromise;
	return (
		await directus.items('yearly_topic').readByQuery({
			fields: '*.*.*'
		} as any)
	).data as unknown as YearlyTopic[];
}

export async function board() {
	await initPromise;
	return (
		await directus.items('association_board').readByQuery({
			fields: '*.*.*'
		} as any)
	).data as unknown as Board[];
}
