<script lang="ts">
	import type { PageData } from './$types';
	import { getTranslation, selectedLanguage } from '../services/lang';
	import Carousel from './carousel.svelte';
	import Topical from './topical.svelte';
	import Post from './post.svelte';
	import chevron from '../icons/chevron.svg';
	import Us from './us.svelte';
	import AnimateInview from '../components/AnimateInview.svelte';
	import { fly } from 'svelte/transition';
	export let data: PageData;
	$: translated = getTranslation(data.content.translations, $selectedLanguage);
</script>

<Carousel carousel={data.content.carousel} />
<div class="my-16" />
<Topical topical={translated.topical} topical_content={translated.topical_content} />
<div class="my-16" />
{#each data.posts as post}
	<AnimateInview>
		<div transition:fly|local={{ x: -300, duration: 1300 }}>
			<Post {post} />
		</div>
	</AnimateInview>
{/each}
<div class="my-10" />
<a href="/posts" id="showMore">
	<span class="flex">
		{translated.more_posts}
		<img class="ml-5 scale-150" src={chevron} alt="arrow right" />
	</span>
</a>
<AnimateInview>
	<img
		transition:fly|local={{ x: -300, duration: 1300 }}
		class="my-20"
		src="/favicon.svg"
		alt="logo"
	/>
</AnimateInview>

<Us
	data={{
		...translated,
		left_image_id: data.content.us_left_image.id,
		right_image_id: data.content.us_right_image.id
	}}
/>

<style>
	#showMore {
		border-width: 0.3rem;
		border-color: var(--yellow);
		font-family: satisfy;
		font-size: x-large;
		@apply rounded-xl py-2 px-4;
	}
</style>
