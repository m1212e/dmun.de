/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Directus } from '@directus/sdk';
import { env } from '$env/dynamic/private';
import type {
	AboutUs,
	CustomDirectusTypes,
	Donation,
	Faq,
	Goals,
	Home,
	Imprint,
	Layout,
	Post,
	Projects
} from './directus_schema';

const directus = new Directus<CustomDirectusTypes>(env.DIRECTUS_URL);

/**
 * Promise which can be awaited to make sure the directus instance is logged in/initialized
 */
const initPromise = (async () => {
	await directus.auth.static(env.DIRECTUS_SECRET);
})();

export async function getLayoutData() {
	await initPromise;

	return (
		await directus.items('layout').readByQuery({
			fields: '*.*.*'
		})
	).data as unknown as Layout;
}

export async function getHomeData() {
	await initPromise;

	return (
		await directus.items('home').readByQuery({
			fields: '*.*.*'
		})
	).data as unknown as Home;
}

export async function getDonationPopupData() {
	await initPromise;

	return (
		await directus.items('donation').readByQuery({
			fields: '*.*.*'
		})
	).data as unknown as Donation;
}

export async function getAboutUsData() {
	await initPromise;

	return (
		await directus.items('about_us').readByQuery({
			fields: '*.*.*'
		})
	).data as unknown as AboutUs;
}

export async function getProjectsData() {
	await initPromise;

	return (
		await directus.items('projects').readByQuery({
			fields: '*.*.*'
		})
	).data as unknown as Projects;
}

export async function getGoalsData() {
	await initPromise;

	return (
		await directus.items('goals').readByQuery({
			fields: '*.*.*'
		})
	).data as unknown as Goals;
}

export async function getImprintData() {
	await initPromise;

	return (
		await directus.items('imprint').readByQuery({
			fields: '*.*.*'
		})
	).data as unknown as Imprint;
}

export async function getFAQData() {
	await initPromise;

	return (
		await directus.items('faq').readByQuery({
			fields: '*.*.*'
		})
	).data as unknown as Faq;
}

/**
 * @param sortByPin If posts wich are pinned = true should be listed at start
 * @param limit The max amount of posts to return
 * @returns a list of posts
 */
export async function getPosts(sortByPin: boolean, limit?: number) {
	await initPromise;
	const res = (
		await directus.items('post').readByQuery({
			fields: '*.*',
			sort: ['date'],
			limit
		})
	).data as unknown as Post[];

	if (sortByPin) {
		res.sort((a: any, b: any) => b.pinned - a.pinned);
	}

	return res;
}

export async function getSinglePost(id: number) {
	await initPromise;
	const res = await directus.items('post').readOne(id, {
		fields: '*.*'
	});
	return res;
}

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
