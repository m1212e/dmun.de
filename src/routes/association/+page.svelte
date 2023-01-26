<script lang="ts">
	import type { Association } from 'src/interfaces/directus';
	import { getTranslation, selectedLanguage } from 'src/services/language';
	import ArrowRight from 'src/icons/white-arrow-right.svg';
	import ChevronDown from 'src/icons/chevron-down.svg';
	import ExternalIcon from 'src/icons/dark-external-link.svg';
	import { slide } from 'svelte/transition';
	import Img from '$lib/img.svelte';

	export let data: any;
	let content = data.content as Association;
	const translated = getTranslation(content);
	let yearlyTopics: { title: string; text: string; id: string }[] = [];

	$: {
		let lang = $selectedLanguage;
		yearlyTopics = data.yearlyTopics.map((topic) => {
			const r = topic.translations.find((t) => t.languages_code.code === lang);
			r.id = topic.id;
			return r; // replace the id of the translation object with the id of the topic to allow navigation to that topic later
		});
	}

	let yearlyTopicArchiveExpanded = false;

	let board: { name: string; role: string; image: any }[] = [];
	$: {
		let lang = $selectedLanguage;
		board = data.board.map((b) => {
			const r = b.translations.find((t) => t.languages_code.code === lang);
			console.log(r.role);

			return { name: b.name, role: r.role, image: b.image };
		});
	}
</script>

<div class="flex-row sm:flex items-center">
	<div class="sm:w-7/12">
		<h1 class="mb-4">{$translated.title}</h1>
		<p>
			{@html $translated.text}
		</p>
	</div>
	<img class="sm:w-5/12" src={'/assets/' + content.leaf_image.id} alt="decorative" />
</div>

<div class="flex-row sm:flex sm:divide-x-2 divide-dashed pt-10">
	<div class="sm:pr-10">
		<p>
			{@html $translated.text_left}
		</p>
		<div class="flex mt-5">
			<a href="/conferences" class="bg-blue-dmun text-white px-3 py-2 rounded-2xl font-bold flex"
				>{$translated.button_left}<img class="ml-2" src={ArrowRight} alt="arrow right" /></a
			>
		</div>
	</div>
	<div class="sm:pl-10">
		<p class="pt-10 sm:pt-0">
			{@html $translated.text_right}
		</p>
		<div class="flex mt-5">
			<a href="#engagement" class="border border-gray-500 px-3 py-2 rounded-2xl font-bold flex"
				>{$translated.title2}</a
			>
		</div>
	</div>
</div>

<div id="engagement" class="mt-20">
	<h1 class="mb-4">{$translated.title2}</h1>
	<p>
		{@html $translated.text2}
	</p>
</div>

<div class="mt-20">
	<h1 class="mb-4">{yearlyTopics[0].title}</h1>
	<p class="sm:columns-3" style="column-gap: 3rem;">
		{@html yearlyTopics[0].text}
	</p>
</div>

<div class="mt-5 flex">
	<button on:click={() => (yearlyTopicArchiveExpanded = !yearlyTopicArchiveExpanded)}>
		<img
			src={ChevronDown}
			alt="expand chevron"
			class="duration-300 mr-2 {yearlyTopicArchiveExpanded ? '' : '-rotate-90'}"
		/>
	</button>
	{#if yearlyTopicArchiveExpanded}
		{#each yearlyTopics as topic, i}
			{#if i > 0}
				<a href="/association/yearly-topic/{topic.id}" transition:slide class="font-bold"
					>{topic.title}</a
				>
			{/if}
		{/each}
	{/if}
</div>

<h1 class="mt-20 mb-10">{$translated.board_title}</h1>
<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
	{#each board as b}
		<div class="flex flex-col justify-center items-center text-center mb-10">
			<Img class="h-80 w-60 object-cover mb-4" image={b.image} alt={b.name} />
			{b.name}
			<br />
			{b.role}
		</div>
	{/each}
</div>

<div class="mt-20">
	<h1 class="mb-4">{$translated.title3}</h1>
	<p class="sm:columns-3" style="column-gap: 3rem;">
		{@html $translated.text3}
	</p>
</div>

<div class="mt-20">
	<Img class="sm:w-3/5" image={content.junon_image} alt="junon logo" />
	<h1 class="my-4">{$translated.junon_title}</h1>
	<p style="column-gap: 3rem;">
		{@html $translated.junon_text}
	</p>
	<div class="flex mt-5">
		<a href={content.junon_link} class="border border-gray-500 px-3 py-2 rounded-2xl font-bold flex"
			>{$translated.junon_button}<img class="ml-3" src={ExternalIcon} alt="external link icon" /></a
		>
	</div>
</div>
