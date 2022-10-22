import { browser } from '$app/environment';
import { readable } from 'svelte/store';

/**
 * The initial language
 */
let baseLanguage = 'de-DE';
/**
 * All available languages
 */
export let availableLanguageCodes: string[] = [];
/**
 * The currently selected Role
 */
let selectedLanguageSetter = (newValue: string) => {
	baseLanguage = newValue;
};
export const selectedLanguage = readable(baseLanguage, function start(set) {
	selectedLanguageSetter = set;
});

export function setLanguage(newLang: string) {
	if (browser) {
		if (!availableLanguageCodes.find((l) => l == newLang)) {
			throw new Error(`Could not find specified language: ${newLang}`);
		}
	}
	selectedLanguageSetter(newLang);
	if (browser) {
		document.cookie = 'lang=' + newLang;
	}
}

export function setAvailableLanguageCodes(value: string[]) {
	availableLanguageCodes = value;
}

export function getTranslation<T>(element: T[], languageID: string) {
	const result = element.find(
		(el: any) => el.languages_code == languageID || el.languages_code.code == languageID
	);
	return result ? result : element[0];
}
