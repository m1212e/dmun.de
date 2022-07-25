<script lang="ts" context="module">
	let home: Writable<Home>

	/** @type {import('./__types/[slug]').Load} */ export async function load() {
		home = await getPageContent<Home>('Home')
		return {}
	}
</script>

<script lang="ts">
	import landtag from '$assets/landtag.jpg'
	import members from '$assets/members.jpeg'
	import logo from '$assets/dmunlogo.png'
	import Button from '$lib/button.svelte'
	import LL from '$i18n/i18n-svelte'
	import { ArrowRightIcon } from 'svelte-feather-icons'
	import type { Writable } from 'svelte/store'
	import { getPageContent } from '$services/directus'
	import type { Home } from '$services/home_schema'
</script>

<main class="gap-32 flex flex-col">
	<span class="flex justify-between">
		<div class="flex flex-col justify-center w-5/12 mr-10">
			<h1 class="font-bold text-5xl mb-2">{$home.association_name}</h1>
			Verstehen. Verhandeln. Verändern.
			<br />
			Vereinte Nationen.
			<span class="mt-8 flex">
				<a class="h-full flex items-center" href="/conferences">
					<Button>{$LL.home.conferences()} <ArrowRightIcon size="1.5x" /></Button>
				</a>
				<a class="h-full flex items-center ml-4" href="/association">
					<Button primary={false}>{$LL.home.association()}</Button>
				</a>
			</span>
		</div>
		<div class="relative">
			<img class="landtag" src={landtag} alt="the state parliament of schleswig-holstein" />
			<div class="landtagdecorationwrapper">
				<img class="landtagdecoration" src={logo} alt="dmun logo" />
			</div>
		</div>
	</span>
	<span class="flex items-center">
		<img class="members" src={members} alt="members of dmun" />
		<div class="ml-10">
			<h2 class="font-bold text-3xl mb-3">{$LL.home.section1.heading()}</h2>
			<p>{$LL.home.section1.paragraph()}</p>
		</div>
	</span>
	<span>hi</span>
</main>

<style>
	.landtag {
		object-fit: cover;
		width: 400px;
		height: 400px;
		@apply rounded-3xl;
	}

	.landtagdecoration {
		object-fit: cover;
		width: 12rem;
	}

	.landtagdecorationwrapper {
		left: -2rem;
		bottom: -2rem;
		@apply rounded-3xl absolute bg-white py-12 shadow-lg;
	}

	.members {
		object-fit: cover;
		width: 300px;
		height: 300px;
		@apply rounded-3xl;
	}
</style>
