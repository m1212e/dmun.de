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
	import Navbar from './_navbar.svelte'
</script>

<svelte:head>
	<title>{$LL.title()}</title>
</svelte:head>

<div class="w-screen h-screen flex justify-center">
	<div class="w-full md:w-4/5 max-w-5xl flex flex-col">
		<Navbar />
		<slot />
	</div>
</div>
