<script lang="ts">
	import type { Navbar } from 'src/interfaces/directus';
	import Img from 'src/lib/img.svelte';
	import { getTranslation } from 'src/services/language';
	import ArrowRight from '../icons/white-arrow-right.svg';

	export let data: Navbar;

	const translated = getTranslation(data.translations);
</script>

<nav
	class="flex justify-center sm:justify-between items-center fixed w-full max-w-6xl bg-white sm:px-10 sm:py-2"
>
	<Img class="h-16 hidden sm:block" image={data.logo} />
	<div class="flex items-center">
		<a href="/">{$translated.home}</a>
		<a href="/association">{$translated.association}</a>
		<a href="/news">{$translated.news}</a>
		<a class="button flex" href="/conferences"
			>{$translated.conferences}<img
				class="ml-1"
				src={ArrowRight}
				alt="arrow pointing to the right"
			/></a
		>
	</div>
</nav>

<style>
	a {
		@apply p-4 text-center sm:text-lg;
	}

	.button {
		border-radius: .8rem;
		@apply bg-blue-dmun font-bold text-white py-1 px-5;
	}
</style>
