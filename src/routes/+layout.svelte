<script lang="ts">
	import type { PageData } from './$types';
	import {
		availableLanguageCodes,
		getTranslation,
		selectedLanguage,
		setAvailableLanguageCodes,
		setLanguage
	} from '../services/lang';
	import { onMount } from 'svelte';
	import hamburger from '../icons/menu.svg';
	import '../app.postcss';
	import '../fonts.css';
	import '../colors.css';
	import DonatePopup from './donatePopup.svelte';
	import { showDonatePopup } from '../services/donatePopup';
	import { page } from '$app/stores';

	export let data: PageData;

	$: translated = getTranslation(data.content.translations, $selectedLanguage);

	setAvailableLanguageCodes(data.availableLanguageCodes);

	let showNavbar = false;
	let screenWidth: number;
	let hamburgerImg: HTMLElement;

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

	$: currentPath = $page.url.pathname;

	$: paths = [
		{ path: '/', text: translated.home },
		{ path: '/aboutUs', text: translated.about_us },
		{ path: '/projects', text: translated.projects },
		{ path: '/goals', text: translated.goals },
		{ path: '/posts', text: translated.news }
	];
</script>

<svelte:window bind:innerWidth={screenWidth} />
<svelte:body
	on:click={(e) => {
		if (e.target != hamburgerImg) {
			showNavbar = false;
		}
	}} />

<svelte:head>
	<title>Das Gesicht der Liebe</title>
</svelte:head>

<DonatePopup data={data.donationPopup} />

<nav class:showNavbar>
	<button
		class:showNavbar
		class:hidden={!showNavbar && screenWidth <= 642}
		id="hamburger"
		on:click={() => (showNavbar = !showNavbar)}
	>
		<img src={hamburger} alt="open navigation" bind:this={hamburgerImg} />
	</button>
	<img id="logo" src="/favicon.svg" alt="logo" />

	{#each paths as path}
		<a class:selected={currentPath == path.path} href={path.path}>{path.text}</a>
	{/each}

	<button id="donate" on:click={() => showDonatePopup.set(true)}>{translated.donate}</button>
</nav>

<main>
	<slot />
</main>

<div class="w-full">
	<div class="footer-red-bar" />
	<footer class="flex justify-between">
		<span>
			<a href="/imprint">{translated.imprint}</a>
			<a href="/faq">{translated.faq}</a>
		</span>
		<span class="ml-10 flex">
			{#each availableLanguageCodes as lang}
				<div class="mx-2">
					<button on:click={() => setLanguage(lang)}>
						{lang.split('-')[0].toUpperCase()}
					</button>
				</div>
			{/each}
		</span>
	</footer>
</div>

<style>
	main {
		margin-top: 12rem;
		margin-bottom: 6rem;
		display: flex;
		align-items: center;
		flex-direction: column;
		padding-left: 1rem;
		padding-right: 1rem;
		min-height: 100vh;
	}

	nav {
		top: 2rem;
		position: fixed;
		left: 50%;
		transform: translateX(-50%);
		padding: 1rem;
		background-color: var(--yellow);
		border-radius: 0.75rem;
		white-space: nowrap;
		transition: all 0.2s;
		z-index: 1;
	}

	nav a {
		transition: all 0.2s;
		font-family: satisfy;
		font-size: large;
		padding-left: 1.5rem;
		padding-right: 1.5rem;
		padding-top: 1rem;
		padding-bottom: 1rem;
	}

	nav a:hover {
		color: white;
	}

	nav a.selected {
		color: white;
	}

	nav #logo {
		position: absolute;
		width: 4rem;
		left: -1.5rem;
	}

	nav #hamburger {
		transition: all 0.2s;
		display: none;
		position: fixed;
		top: 1rem;
		left: 1rem;
		color: var(--red);
	}

	nav #hamburger img {
		width: 2.5rem;
	}

	nav #donate {
		transition: all 0.2s;
		background-color: var(--red);
		border-radius: 0.75rem;
		padding-left: 0.8rem;
		padding-right: 0.8rem;
		padding-top: 0.2rem;
		padding-bottom: 0.2rem;
		color: white;
		font-weight: bold;
	}

	nav #donate:hover {
		background-color: var(--redhover);
	}

	@media only screen and (max-width: 642px) {
		main {
			margin-top: 4rem;
			margin-bottom: 6rem;
		}

		nav {
			left: -14rem;
			transform: none;
			display: flex;
			flex-direction: column;
			position: fixed;
		}

		nav.showNavbar {
			left: 2%;
		}

		nav #logo {
			width: 4rem;
			bottom: -3.3rem;
			right: -2rem;
			left: unset;
		}

		nav #hamburger {
			display: block;
		}

		nav #hamburger.showNavbar {
			top: -2.4rem;
			transform: rotate(-90deg);
		}
	}

	.footer-red-bar {
		height: 0.7rem;
		background-color: var(--red);
		clip-path: polygon(0 0, 100% 50%, 100% 100%, 0% 100%);
	}

	footer {
		background-color: var(--yellow);
		padding-top: 0.6rem;
		padding-bottom: 0.6rem;
		padding-left: 1rem;
		padding-right: 1rem;
		color: var(--red);
		font-weight: bold;
	}

	footer a {
		padding-left: 1rem;
		padding-right: 1rem;
	}
</style>
