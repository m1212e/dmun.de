<script lang="ts">
	import type { BBVN } from 'src/interfaces/directus';
	import { getTranslation } from 'src/services/language';
	import Mail from 'src/icons/dark-mail.svg';
	import UNLogo from 'src/icons/dark-un-logo.svg';
	import ShieldIcon from 'src/icons/dark-shield-icon.svg';
	import Rights from 'src/icons/dark-rights.svg';
	import Sustainable from 'src/icons/dark-sustainable.svg';

	export let data: any;
	let content = data.content as BBVN;
	let translated = getTranslation(content);

	let selected = 0;
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
	<img
		on:click={() => (selected = 0)}
		src={UNLogo}
		alt="un logo"
		class="mr-2 w-1/4 px-5 hover:scale-110 duration-300 cursor-pointer"
	/>
	<img
		on:click={() => (selected = 0)}
		src={ShieldIcon}
		alt="un logo"
		class="mr-2 w-1/4 px-5 scale-75 hover:scale-90 duration-300 cursor-pointer"
	/>
	<img
		on:click={() => (selected = 0)}
		src={Rights}
		alt="un logo"
		class="mr-2 w-1/4 px-5 hover:scale-110 duration-300 cursor-pointer"
	/>
	<img
		on:click={() => (selected = 0)}
		src={Sustainable}
		alt="un logo"
		class="mr-2 w-1/4 px-5 hover:scale-110 duration-300 cursor-pointer"
	/>
</div>

{#if selected == 0}{:else if selected == 1}{:else if selected == 2}{:else if selected == 3}{:else}
	Error
{/if}
