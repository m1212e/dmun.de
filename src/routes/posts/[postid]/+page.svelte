<script lang="ts">
	import type { PageData } from '.svelte-kit/types/src/routes/$types';
	import Img from '../../../components/Img.svelte';
	import { getTranslation, selectedLanguage } from '../../../services/lang';

	export let data: PageData;
	let post = data.post;

	$: translation = getTranslation(post.translations, $selectedLanguage);

	const event = new Date(Date.parse(post.date));
	const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
</script>

<div class="wrapper">
	<Img
		class="mb-5 w-full rounded-3xl object-cover"
		imageID={post.image.id}
		alt="visualizes content of this post"
	/>
	<h1 class="text-4xl">
		{@html translation.title}
	</h1>
	<small class="text-gray-500 mt-3">{event.toLocaleDateString($selectedLanguage, options)}</small>
	{@html translation.text}
</div>

<style>
	.wrapper {
		@apply w-2/3 max-w-3xl
	}
	@media only screen and (max-width: 642px) {
		.wrapper {
			width: unset;
		}
	}
</style>