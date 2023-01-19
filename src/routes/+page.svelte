<script lang="ts">
	import Img from '$lib/img.svelte';
	import type { Home, Sponsor } from 'src/interfaces/directus';
	import { getTranslation } from 'src/services/language';
	import ArrowRight from 'src/icons/white-arrow-right.svg';

	export let data: any;
	let content: Home = data.content;
	let sponsors: Sponsor[] = data.sponsors;
	const translated = getTranslation(content);
</script>

<div class="flex items-center justify-center">
	<div class="md:w-2/5">
		<h1 class="mb-5">{$translated.title}</h1>
		<p class="text-lg leading-6">
			{@html $translated.subtitle}
		</p>
		<div class="flex mt-8">
			<a href="/conferences" class="bg-blue-dmun text-white px-3 py-2 rounded-2xl font-bold flex"
				>{$translated.conferences}<img class="ml-2" src={ArrowRight} alt="arrow right" /></a
			>
			<a
				href="/association"
				class="border border-gray-500 ml-3 px-3 py-2 rounded-2xl font-bold flex"
				>{$translated.association}</a
			>
		</div>
	</div>
	<Img
		class="rounded-3xl object-cover hidden sm:block w-96 h-96"
		image={content.main_image}
		alt="decorative image representing dmun"
	/>
</div>

TODO: News einbauen

<div class="pt-40 flex items-center flex-col sm:flex-row">
	<Img
		class="sm:mr-5 mb-10 sm:mb-0 w-full sm:w-80 sm:h-80 rounded-3xl"
		image={content.section1_image}
		alt="decorative image representing the paragraph"
	/>
	<div>
		<h2 class="mb-2">{$translated.section1_heading}</h2>
		{@html $translated.section1_text}
	</div>
</div>

<div class="pt-40 flex items-center flex-col sm:flex-row sm:divide-x-2 divide-dashed">
	<div class="my-8 sm:pr-8">
		<Img
			class="h-72 w-full object-cover rounded-3xl"
			image={content.section2_image}
			alt="decorative image representing the paragraph"
		/>
		<h2 class="my-4">{$translated.section2_heading}</h2>
		<p>
			{@html $translated.section2_text}
		</p>
		<div class="flex mt-5">
			<a href="/conferences" class="bg-blue-dmun text-white px-3 py-2 rounded-2xl font-bold flex"
				>{$translated.section2_button}<img class="ml-2" src={ArrowRight} alt="arrow right" /></a
			>
		</div>
	</div>
	<div class="my-8 sm:pl-8">
		<Img
			class="h-72 w-full object-cover rounded-3xl"
			image={content.section3_image}
			alt="decorative image representing the paragraph"
		/>
		<h2 class="my-4">{$translated.section3_heading}</h2>
		<p>
			{@html $translated.section3_text}
		</p>
		<div class="flex mt-5">
			<a href="/association" class="border border-gray-500 px-3 py-2 rounded-2xl font-bold flex"
				>{$translated.section3_button}</a
			>
		</div>
	</div>
</div>

<div>
	<h2 class="mt-14 mb-4">{$translated.sponsors}</h2>
	<div class="grid gap-x-8 gap-y-3 sm:grid-cols-3 grid-cols-1 w-full">
		{#each content.sponsors as sponsor}
			<a
				class="h-28 flex justify-center hover:shadow duration-300 rounded-lg"
				href={sponsor.sponsors_id.website}
			>
				<Img image={sponsor.sponsors_id.image} alt="sponsor image" />
			</a>
		{/each}
	</div>
</div>
