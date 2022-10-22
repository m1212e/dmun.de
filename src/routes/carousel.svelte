<script lang="ts">
	import type { HomeCarouselEntries } from 'src/services/directus_schema';
	import { selectedLanguage } from '../services/lang';

	//TODO: sanitize @html text?

	export let carousel: HomeCarouselEntries[];
	let selectedCarouselIndex = 0;
	$: translated = carousel[selectedCarouselIndex].translations.find(
		(el) => el.languages_code == $selectedLanguage
	)!;
</script>

<!-- carousel content -->
<div class="wrapper gap-4">
	<img
		class="w-96 rounded-3xl object-cover"
		src={'/assets/' + carousel[selectedCarouselIndex].image.id}
		alt="carousel"
	/>
	<div class="pt-2">
		<h1 class="font-bold text-3xl">
			{translated.title}
		</h1>
		<div id="carousel-text">
			{@html translated.text}
		</div>
	</div>
</div>

<!-- carousel nav -->
<div class="flex mt-6">
	{#each carousel as carouselItem, i}
		<button class="mx-1 duration-300 hover:scale-110" on:click={() => (selectedCarouselIndex = i)}>
			<img
				class="w-16 h-16 rounded-full object-cover duration-300"
				src={'/assets/' + carouselItem.image.id}
				alt="carousel selector"
				class:unselected={i != selectedCarouselIndex}
			/>
		</button>
	{/each}
</div>

<style>
	.wrapper {
		height: 16rem;
		display: flex;
	}

	#carousel-text {
		max-width: 16rem;
		max-height: 12.6rem;
		line-height: 1.2rem;
		overflow-y: auto;
	}

	.unselected {
		opacity: 50%;
	}

	@media only screen and (max-width: 642px) {
		.wrapper {
			flex-direction: column;
			height: unset;
		}

		#carousel-text {
			max-width: 24rem;
			max-height: unset;
		}
	}
</style>
