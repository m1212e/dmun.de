<script lang="ts">
	import Img from '$lib/img.svelte';
	import type { Sponsor, Sponsoring } from 'src/interfaces/directus';
	import { getTranslation } from 'src/services/language';

	export let data: any;
	let content = data.content as Sponsoring;
	let sponsors = data.sponsors as Sponsor[];
	let translated = getTranslation(content);
</script>

<h1 class="w-full text-center">
	{$translated.title}
</h1>

<p class="sm:columns-2 mt-10" style="column-gap: 3rem;">
	{@html $translated.text}
</p>

<div class="flex flex-col sm:flex-row mt-20 sm:divide-x-2 divide-dashed w-full">
	<div class="sm:w-1/3 flex-col justify-center sm:mr-4 mb-5">
		<h3>{$translated.sponsoring_title}</h3>
		<p class="mt-2">
			{@html $translated.sponsoring_text}
		</p>
		<div class="flex">
			<a
				href={content.sponsoring_button_link}
				class="border border-gray-500 mt-3 px-3 py-2 rounded-2xl font-bold flex"
				>{$translated.sponsoring_button}</a
			>
		</div>
	</div>
	<div class="sm:w-1/3 flex-col justify-center sm:pl-4 sm:mr-4 mb-5">
		<h3>{$translated.donation_title}</h3>
		<p class="mt-2">
			{@html $translated.donation_text}
		</p>
		<div class="flex">
			<a
				href={content.donation_button_link}
				class="border border-gray-500 mt-3 px-3 py-2 rounded-2xl font-bold flex"
				>{$translated.donation_button}</a
			>
		</div>
	</div>
	<div class="sm:w-1/3 flex-col justify-center sm:pl-4 mb-5">
		<h3>{$translated.membership_title}</h3>
		<p class="mt-2">
			{@html $translated.membership_text}
		</p>
		<div class="flex">
			<a
				href={'/assets/' + content.membership_form.id}
				class="border border-gray-500 mt-3 px-3 py-2 rounded-2xl font-bold flex mr-2"
				>{$translated.membership_download_form}</a
			>
			<a
				href={content.membership_form_send_link}
				class="border border-gray-500 mt-3 px-3 py-2 rounded-2xl font-bold flex"
				>{$translated.membership_send_form}</a
			>
		</div>
	</div>
</div>

<div>
	<h2 class="mt-32 w-full text-center mb-4">{$translated.current_sponsors}</h2>
	<div class="grid gap-x-8 gap-y-3 sm:grid-cols-3 grid-cols-1 w-full">
		{#each sponsors as sponsor}
			<a
				class="h-28 flex justify-center hover:shadow duration-300 rounded-lg"
				href={sponsor.website}
			>
				<Img image={sponsor.image} alt="sponsor image" />
			</a>
		{/each}
	</div>
</div>