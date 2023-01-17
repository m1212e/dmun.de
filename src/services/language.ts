import { browser } from '$app/environment';
import type { Translation } from 'src/interfaces/directus';
import { derived, readable, type Readable } from 'svelte/store';

/**
 * The initial language
 */
let defaultLang = 'de-DE';
/**
 * All available languages
 */
export let availableLanguageCodes: string[] = [];
/**
 * The currently selected language
 */
let selectedLanguageSetter = (newLang: string) => {
	defaultLang = newLang; // default value, until the store is initialized
};
/**
 * The currently selected language as language code (e.g. 'de-DE')
 */
export const selectedLanguage = readable(defaultLang, function start(set) {
	selectedLanguageSetter = set;
});
/**
 * Sets the applications language
 * @param newLang The new language code (e.g. 'de-DE')
 */
export function setLanguage(newLang: string) {
	if (browser) {
		if (!availableLanguageCodes.find((l) => l == newLang)) {
			throw new Error(`Could not find specified language: ${newLang}`);
		}
	}
	selectedLanguageSetter(newLang);
	if (browser) {
		document.cookie = 'lang=' + newLang + ';  SameSite=Strict;';
	}
}
/**
 * Sets the available languages array
 * @param value The array of language codes
 */
export function setAvailableLanguageCodes(value: string[]) {
	availableLanguageCodes = value;
}
/**
 * Converts a translation array from directus into a store containing a single translation according to the selected language
 * @param element The translations array from directus
 * @returns A JS object with the translations
 */
export function getTranslation<T>(
	element: (Translation[] & T[]) | { translations: Translation[] & T[] }
): Readable<T> {
	if ('translations' in element) {
		return derived(selectedLanguage, ($selectedLanguage) => {
			return (element.translations.find((el) => el.languages_code.code == $selectedLanguage) ??
				element.translations[0]) as T;
		});
	}

	return derived(selectedLanguage, ($selectedLanguage) => {
		return (element.find((el) => el.languages_code.code == $selectedLanguage) ?? element[0]) as T;
	});
}
