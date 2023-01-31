<script lang="ts">
	import type { Sponsoring } from 'src/interfaces/directus';
	import { getTranslation } from 'src/services/language';

	export let data: any;
	let content = data.content as Sponsoring;
	let translated = getTranslation(content);
</script>

<h1 class="w-full text-center">
	{$translated.title}
</h1>

<p class="sm:columns-2 mt-10" style="column-gap: 3rem;">
	{@html $translated.text}
</p>

<div class="flex mt-20 divide-x-2 divide-dashed w-full">
	<div class="w-1/3 flex-col justify-center mr-4">
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
	<div class="w-1/3 flex-col justify-center pl-4 mr-4">
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
	<div class="w-1/3 flex-col justify-center pl-4">
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
