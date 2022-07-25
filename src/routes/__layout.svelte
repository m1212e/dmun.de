<script context="module" lang="ts">
	import LL, { setLocale, locale } from '$i18n/i18n-svelte'
	import { locales } from '$i18n/i18n-util'
	import { loadAllLocalesAsync, loadLocaleAsync } from '$i18n/i18n-util.async'
	/** @type {import('./__types/[slug]').Load} */
	export async function load() {
		await loadLocaleAsync('de-DE')
		setLocale('de-DE')
		loadAllLocalesAsync()
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

<div class="w-screen flex justify-center">
	<div class="w-full min-h-screen md:w-4/5 max-w-5xl flex flex-col justify-between">
		<div>
			<Navbar />
			<slot />
		</div>
		<span class="flex w-full justify-end mt-32">
			<a class="mr-5" href="/imprint">{$LL.imprint()}</a>
			{#each locales as current, index}
				<button alt="select {current} as language" on:click={() => setLocale(current)} class="mx-2 {$locale == current ? 'font-bold' : ''}">
					{current.split('-')[0].toUpperCase()}
				</button>
				{#if index < locales.length - 1}
					|
				{/if}
			{/each}
		</span>
	</div>
</div>
