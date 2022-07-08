<script context="module" lang="ts">
	import LL, { setLocale } from '$i18n/i18n-svelte'
	import { loadLocaleAsync } from '$i18n/i18n-util.async'
	/** @type {import('./__types/[slug]').Load} */
	export async function load() {
		await loadLocaleAsync('de')
		setLocale('de')
		return {}
	}
</script>

<script lang="ts">
	import '../app.css'
</script>

<svelte:head>
	<title>{$LL.title()}</title>
</svelte:head>

<main class="w-screen h-screen">
	<slot />
</main>
