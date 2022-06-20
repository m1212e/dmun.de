<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit'
	import type { Locales } from '$i18n/i18n-types'
	import { loadLocaleAsync } from '$i18n/i18n-util.async'

	type LoadParams = {
		lang?: Locales
	}

	export const load: Load<LoadParams> = async ({ session }) => {
		await loadLocaleAsync(session.locale)
		return { props: { locale: session.locale } }
	}
</script>

<script lang="ts">
	import '../app.css'
	import LL, { setLocale } from '$i18n/i18n-svelte'

	export let locale: Locales
	setLocale(locale)
</script>

<svelte:head>
	<title>{$LL.title()}</title>
</svelte:head>

<main class="w-screen h-screen">
	<slot />
</main>
