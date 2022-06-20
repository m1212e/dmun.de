<script lang="ts">
	import { page } from '$app/stores'
	import { setLocale, locale } from '$i18n/i18n-svelte'
	import type { Locales } from '$i18n/i18n-types'
	import { locales } from '$i18n/i18n-util'
	import { loadLocaleAsync } from '$i18n/i18n-util.async'
import { get } from 'svelte/store';

	const switchLocale = async (newLocale: Locales, updateHistoryState = true) => {
		if (!newLocale || $locale === newLocale) return

		// load new dictionary from server
		await loadLocaleAsync(newLocale)

		// select locale
		setLocale(newLocale)

		// update `lang` attribute
		document.querySelector('html').setAttribute('lang', newLocale)

		// set cookie for ssr
		document.cookie = `lang=${get(locale)}`
		document.cookie = `other=something`
		document.cookie = `hello=something`
	}

	// update locale when page store changes
	$: switchLocale($page.params.lang as Locales, false)
</script>

<ul>
	{#each locales as l}
		<li>
			<button type="button" class:active={l === $locale} on:click={() => switchLocale(l)}>
				{l}
			</button>
		</li>
	{/each}
</ul>
