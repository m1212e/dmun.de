<script lang="ts">
	import type { Post } from 'src/services/directus_schema';
	import Img from '../components/Img.svelte';
	import { getTranslation, selectedLanguage } from '../services/lang';

	export let post: Post;

	const postDirection = Math.random() > 0.5 ? 'makeLeft' : 'makeRight';

	const degrees = generatedDegrees();
	let rotationDegA = degrees.a;
	let rotationDegB = degrees.b;

	function randomIntFromInterval(min: number, max: number) {
		return Math.floor(Math.random() * (max - min + 1) + min);
	}

	function generatedDegrees() {
		const min = 1;
		const max = 2;
		const ret = { a: 0, b: 0 };
		if (Math.random() > 0.5) {
			ret.a = randomIntFromInterval(min, max);
			ret.b = randomIntFromInterval(-max, -min);
		} else {
			ret.a = randomIntFromInterval(-max, -min);
			ret.b = randomIntFromInterval(min, max);
		}
		return ret;
	}
</script>

<div class="wrapper" style="--rotationDegA: {rotationDegA}deg; --rotationDegB: {rotationDegB}deg;">
	<a href="/posts/{post.id}">
		<Img imageID={post.image.id} />
		<div class="postcontent bg-white {postDirection}">
			<h1>{getTranslation(post.translations, $selectedLanguage).title}</h1>
			<div class="text">
				{@html getTranslation(post.translations, $selectedLanguage).text}
			</div>
		</div>
		<div class="postcontent postborderA {postDirection}" />
		<div class="postcontent postborderB {postDirection}" />
	</a>
</div>

<style>
	.wrapper {
		@apply relative my-5 duration-300 hover:scale-105;
	}

	.postcontent {
		@apply absolute w-44 h-56 rounded-xl p-3 truncate shadow;
	}

	.postcontent .text {
		line-height: 1.2rem;
	}

	.postborderA {
		border-width: 0.35rem;
		border-color: var(--red);
		transform: scale(1.04) rotate(var(--rotationDegA));
	}

	.postborderB {
		border-width: 0.35rem;
		border-color: var(--yellow);
		transform: scale(1.04) rotate(var(--rotationDegB));
	}

	.makeLeft {
		top: 0.75rem;
		left: -5.5rem;
	}
	.makeRight {
		bottom: 0.75rem;
		right: -5.5rem;
	}

	h1 {
		font-family: satisfy;
		font-size: x-large;
	}

	@media only screen and (max-width: 642px) {
		.wrapper {
			@apply mb-56;
		}

		.makeLeft {
			top: 14rem;
			left: -0.2rem;
		}
		.makeRight {
			top: 14rem;
			right: -0.2rem;
		}
	}
</style>
