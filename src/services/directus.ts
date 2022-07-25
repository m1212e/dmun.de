import { Directus } from '@directus/sdk'
import { writable, type Writable } from 'svelte/store'
import { locale } from '$i18n/i18n-svelte'
import { baseLocale } from '$i18n/i18n-util'

const directus = new Directus('https://directus-sandbox.dmun.de')

const stores: { [key: string]: Writable<any> } = {}
const dataObjects: { [key: string]: any[] } = {}

export async function getPageContent<T>(page: 'Home'): Promise<Writable<T>> {
	if (stores[page]) {
		return stores[page]
	}

	stores[page] = writable<T>()
	const data = (await directus.items(`${page}_translations`).readByQuery()).data
	dataObjects[page] = data

	function populate(lang: Locales) {
		const entry = data.find((raw: any) => raw.languages_id == lang)
		if (!entry) {
			throw new Error('Unknown language selected!')
		}

		stores[page].set(entry)
	}

	populate(baseLocale)
	locale.subscribe((lang) => {
		populate(lang)
	})
	return stores[page]
}
