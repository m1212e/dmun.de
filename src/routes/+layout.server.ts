import { footer, getAvailableLanguageCodes, nav } from '../services/directus';

export const prerender = true;

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	return {
		nav: await nav(),
		footer: await footer(),
		availableLanguageCodes: await getAvailableLanguageCodes()
	};
}
