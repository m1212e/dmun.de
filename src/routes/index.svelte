<script>
	import landtag from '$assets/IMG_9903.jpg'
	import logo from '$assets/dmunlogo.png'
	import Button from '$lib/button.svelte'
	import LL from '$i18n/i18n-svelte'
	import { ArrowRightIcon } from 'svelte-feather-icons'
</script>

<main class="gap-32 flex flex-col">
	<span class="flex justify-between">
		<div class="flex flex-col justify-center w-5/12 mr-10">
			<h1 class="font-bold text-5xl mb-2">Deutsche Model United Nations e.V.</h1>
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
			<img class="landtag rounded-3xl" src={landtag} alt="the state parliament of schleswig-holstein" />
			<div class="landtagdecorationwrapper absolute bg-white rounded-3xl py-12 shadow-lg">
				<img class="landtagdecoration" src={logo} alt="dmun logo" />
			</div>
		</div>
	</span>
	<span>hi</span>
	<span>hi</span>
</main>

<style>
	.landtag {
		object-fit: cover;
		width: 400px;
		height: 400px;
	}

	.landtagdecoration {
		object-fit: cover;
		width: 12rem;
	}

	.landtagdecorationwrapper {
		left: -2rem;
		bottom: -2rem;
	}
</style>
