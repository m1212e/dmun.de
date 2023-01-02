<script lang="ts">
	import type { PageData } from './$types';
	import '../app.postcss';
	import '../fonts.css';
	import Nav from './nav.svelte';
	import {
		availableLanguageCodes,
		setAvailableLanguageCodes,
		setLanguage
	} from 'src/services/language';
	import { onMount } from 'svelte';
	import Footer from './footer.svelte';

	export let data: PageData;

	setAvailableLanguageCodes(data.availableLanguageCodes);

	onMount(() => {
		if (document.cookie.includes('lang=')) {
			const lang = document.cookie.split(';')[0].split('=')[1];
			setLanguage(lang);
			return;
		}

		const searchedLang = availableLanguageCodes.find((l) => l.includes(navigator.language));
		if (searchedLang) {
			setLanguage(searchedLang);
		} else {
			console.error('The language configured in your browser is not supported');
		}
	});
</script>

<div class="w-full h-full flex justify-center">
	<div class="max-w-6xl flex flex-col flex-grow">
		<Nav data={data.nav} />
		<div class="pt-20 sm:pt-28">
			<slot />
		</div>

		<Footer data={data.footer} />
	</div>
</div>

<style>
</style>
