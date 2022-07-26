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
	import { ArrowRightIcon } from 'svelte-feather-icons'
	import type { Writable } from 'svelte/store'
	import { getPageContent } from '$services/directus'
	import type { Home } from '$services/home_schema'
</script>

<main class="gap-32 flex flex-col">
	<span class="flex justify-between">
		<div class="flex flex-col justify-center w-5/12 mr-10">
			<h1>{$home.association_name}</h1>
			{$home.subheading}
			<span class="mt-8 flex">
				<a class="h-full flex items-center" href="/conferences">
					<Button>{$home.button_1}<ArrowRightIcon size="1.5x" /></Button>
				</a>
				<a class="h-full flex items-center ml-4" href="/association">
					<Button primary={false}>{$home.button_2}</Button>
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
			<h2>{$home.who_we_are_heading}</h2>
			<p>{$home.who_we_are_text}</p>
		</div>
	</span>
	<span class="flex divide-x-2 divide-dashed">
		<div class="w-1/2 pr-16 py-12 flex flex-col justify-between">
			<h2>{$home.what_we_do_model_un_title}</h2>
			<p class="mb-4">{$home.what_we_do_model_un_text}</p>
			<a href="/conferences">
				<Button>{$home.what_we_do_model_un_button}<ArrowRightIcon size="1.5x" /></Button>
			</a>
		</div>
		<div class="w-1/2 pl-16 py-12 flex flex-col justify-between">
			<h2>{$home.what_we_do_engagement_title}</h2>
			<p class="mb-4">{$home.what_we_do_engagement_text}</p>
			<a href="/engagement">
				<Button primary={false}>{$home.what_we_do_engagement_button}</Button>
			</a>
		</div>
	</span>
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
