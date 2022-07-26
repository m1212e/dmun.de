<script context="module" lang="ts">
	import { get } from 'svelte/store'
	import LL, { setLocale, locale } from '$i18n/i18n-svelte'
	import { locales } from '$i18n/i18n-util'
	import { loadAllLocalesAsync, loadLocaleAsync } from '$i18n/i18n-util.async'

	/** @type {import('./__types/[slug]').Load} */
	export async function load() {
		await loadLocaleAsync('de-DE')
		setLocale('de-DE')
		return {}
	}
</script>

<script lang="ts">
	import '../app.css'
	import Navbar from './_navbar.svelte'
	import { onMount } from 'svelte'

	onMount(async () => {
		await loadAllLocalesAsync()
		let lang = navigator.language || navigator.userLanguage
		if (lang != get(locale) && locales.find((l) => l == lang)) {
			setLocale(lang)
		}
	})
</script>

<svelte:head>
	<title>{$LL.title()}</title>
</svelte:head>

<div class="w-full min-h-screen md:w-4/5 max-w-5xl flex flex-col justify-between">
	<div class="w-full flex flex-col items-center">
		<Navbar />
		<div class="line-breaks w-full flex items-center">
			<slot />
		</div>
	</div>
	<div class="flex w-full justify-end mt-32">
		<a class="mr-5" href="/imprint">{$LL.imprint()}</a>
		{#each locales as current, index}
			<button
				alt="select {current} as language"
				on:click={() => setLocale(current)}
				class="mx-2 {$locale == current ? 'font-bold' : ''}"
			>
				{current.split('-')[0].toUpperCase()}
			</button>
			{#if index < locales.length - 1}
				|
			{/if}
		{/each}
	</div>
</div>

<style>
	.line-breaks {
		white-space: pre-line;
	}
</style>
