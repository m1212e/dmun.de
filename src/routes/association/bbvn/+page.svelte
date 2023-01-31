<script lang="ts">
	import type { BBVN } from 'src/interfaces/directus';
	import { getTranslation } from 'src/services/language';
	import Mail from 'src/icons/dark-mail.svg';
	import UNLogo from 'src/icons/dark-un-logo.svg';
	import ShieldIcon from 'src/icons/dark-shield-icon.svg';
	import Rights from 'src/icons/dark-rights.svg';
	import Sustainable from 'src/icons/dark-sustainable.svg';
	import User from 'src/icons/dark-user.svg';
	import Clock from 'src/icons/dark-clock.svg';
	import Pen from 'src/icons/dark-pen.svg';
	import Book from 'src/icons/dark-book.svg';
	import Img from '$lib/img.svelte';

	export let data: any;
	let content = data.content as BBVN;
	let translated = getTranslation(content);

	let selected = 0;
	$: displayed_module = content.modules[selected].bbvn_modules_id;
	$: displayed_module_translations = getTranslation(displayed_module.translations);
</script>

<div class="sm:flex">
	<p class="sm:w-4/6 sm:pr-10">
		{@html $translated.introduction}
	</p>
	<div class="sm:w-2/6 mt-10 sm:mt-0">
		<p>
			{@html $translated.book_now}
		</p>
		<div class="flex mt-5">
			<img src={Mail} alt="mail icon" class="mr-2 w-14" />
			<p>
				{@html $translated.contact}
			</p>
		</div>
	</div>
</div>

<div class="flex mt-20 justify-between">
	<button class="w-1/4 px-5 hover:scale-110 duration-300 m-5" on:click={() => (selected = 0)}>
		<img src={UNLogo} alt="un logo" />
	</button>
	<button
		class="w-1/4 px-5 hover:scale-110 duration-300 flex justify-center  m-5"
		on:click={() => (selected = 1)}
	>
		<img src={ShieldIcon} alt="un logo" />
	</button>
	<button class="w-1/4 px-5 hover:scale-110 duration-300  m-5" on:click={() => (selected = 2)}>
		<img src={Rights} alt="un logo" />
	</button>
	<button class="w-1/4 px-5 hover:scale-110 duration-300  m-5" on:click={() => (selected = 3)}>
		<img src={Sustainable} alt="un logo" />
	</button>
</div>

<div class="relative mt-20">
	<Img
		class="w-full h-32 object-cover grayscale"
		image={displayed_module.image}
		alt="module image"
	/>
	<h1 class="text-white absolute left-4 bottom-2 module-title">
		{$displayed_module_translations.title}
	</h1>
</div>
<div class="mt-3 flex justify-between">
	<div class="flex items-center">
		<img src={User} alt="target group" class="mr-2" />
		{$displayed_module_translations.target_group}
	</div>
	<div class="flex items-center mx-5">
		<img src={Clock} alt="scope" class="mr-2" />
		{$displayed_module_translations.scope}
	</div>
	<div class="flex items-center">
		<img src={Pen} alt="methods" class="mr-2" />
		{$displayed_module_translations.methods}
	</div>
</div>

<p class="mt-10">
	{@html $displayed_module_translations.goals}
</p>
<p class="mt-10">
	{@html $displayed_module_translations.details}
</p>

<style>
	.module-title {
		--tw-drop-shadow: drop-shadow(0 5px 15px rgba(0, 0, 0, 0.886));
		filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale)
			var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
	}
</style>
