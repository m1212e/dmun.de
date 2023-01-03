<script lang="ts">
	import type { Navbar } from 'src/interfaces/directus';
	import { getTranslation } from 'src/services/language';
	import ArrowRight from '../icons/white-arrow-right.svg';
	import Menu from '../icons/white-menu.svg';
	import X from '../icons/white-x.svg';

	export let data: Navbar;

	const translated = getTranslation(data.translations);
	let expanded = false;

	function close() {
		expanded = false;
	}
</script>

<nav
	class="flex justify-center sm:justify-between items-center fixed w-full max-w-6xl bg-white sm:px-10 sm:py-2"
>
	<!-- mobile nav menu, all absolute positioned  -->
	<button class="expand-button" on:click={() => (expanded = true)} class:expanded>
		<img src={Menu} alt="Menu expand icon" />
	</button>
	<button class="close-button" on:click={close} class:expanded>
		<img src={X} alt="Menu close icon" />
	</button>
	<div class="blue-bg" class:expanded />
	<!-- mobile nav menu end  -->

	<img class="logo" src={'/assets/' + data.logo.id} class:expanded alt="dmun logo" />
	<div class="links" class:expanded>
		<a href="/" on:click={close}>{$translated.home}</a>
		<a href="/association" on:click={close}>{$translated.association}</a>
		<a href="/news" on:click={close}>{$translated.news}</a>
		<a class="button" href="/conferences" on:click={close}
			>{$translated.conferences}<img
				class="ml-1"
				src={ArrowRight}
				alt="arrow pointing to the right"
			/></a
		>
	</div>
</nav>

<style>
	.blue-bg {
		z-index: 1;
		border-radius: 0 0.5rem 0.5rem 0;
		@apply bg-blue-dmun absolute left-0 top-6 p-2 duration-300 h-10 w-10 shadow-lg sm:hidden;
	}

	.blue-bg.expanded {
		height: 90vh;
		width: 140vw;
		left: -3rem;
		top: -3rem;
		border-radius: 0 0 20rem 6rem;
	}

	.expand-button {
		z-index: 2;
		@apply absolute left-2 top-8 duration-300 sm:hidden;
	}

	.expand-button.expanded {
		left: -3rem;
	}

	.close-button {
		left: 50%;
		transform: translate(-50%, 0);
		top: 110vh;
		@apply rounded-full bg-blue-dmun absolute p-3 duration-300;
	}
	
	.close-button.expanded {
		top: 90vh;
	}

	.logo {
		z-index: 3;
		transform: scale(0);
		@apply h-12 absolute top-5 bg-white rounded-lg duration-300 transition-all;
	}

	.logo.expanded {
		transform: scale(1);
	}

	@media (min-width: 640px) {
		.logo {
			transform: unset;
			position: unset;
			top: unset;
			background-color: unset;
		}
	}

	.links {
		z-index: 3;
		transform: scaleY(0);
		@apply flex flex-col absolute top-44 items-center duration-200 transition-all text-white;
	}

	.links.expanded {
		transform: scaleY(1);
	}

	.links a {
		@apply py-5 text-center font-bold text-3xl;
	}

	@media (min-width: 640px) {
		.links {
			color: var(--default-text-color);
			top: unset;
			transform: unset;
			position: unset;
			top: unset;
			@apply flex-row;
		}

		.links a {
			@apply p-4 text-center font-bold text-lg;
		}
	}

	.button {
		border-radius: 0.8rem;
		@apply bg-transparent flex;
	}

	/* the arrow icon */
	.button img {
		transform: scale(1.3);
		@apply pt-1;
	}

	@media (min-width: 640px) {
		.button img {
			transform: unset;
			padding: unset;
		}
		.button {
			padding-left: 1.2rem !important;
			padding-right: 1.2rem !important;
			padding-top: 0.5rem !important;
			padding-bottom: 0.5rem !important;
			@apply bg-blue-dmun text-white ml-3 p-0;
		}
	}
</style>
