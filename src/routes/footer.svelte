<script lang="ts">
	import type { Footer } from 'src/interfaces/directus';
	import { availableLanguageCodes, getTranslation, setLanguage } from 'src/services/language';
    import TranslateIcon from '../icons/grey-translate.svg';

	export let data: Footer;
	const translated = getTranslation(data.translations);
</script>

<footer class="flex justify-between">
	<span>
		<a href="/imprint">{$translated.imprint}</a>
	</span>
	<span class="ml-10 flex items-center">
        <img
				class="mr-1 h-5"
				src={TranslateIcon}
				alt="language picker indicator"
			/>
		{#each availableLanguageCodes as lang}
			<div class="mx-2 font-bold">
				<button on:click={() => setLanguage(lang)}>
					{lang.split('-')[0].toUpperCase()}
				</button>
			</div>
		{/each}
	</span>
</footer>

<style>
    footer {
        @apply px-5 py-5 w-full;
    }
</style>