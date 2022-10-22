<script lang="ts">
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';

	/**
	 * The id of the image to display
	 */
	export let imageID: string;

	let classes = $$props.class ?? 'w-96 h-64 rounded-3xl object-cover';

	let isInView: boolean;
	const options: Options = {
		rootMargin: '50px',
		unobserveOnEnter: true
	};

	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) =>
		(isInView = detail.inView);
</script>

<div use:inview={options} on:change={handleChange}>
	{#if isInView}
		<img class={classes} src={'/assets/' + imageID} alt={$$props.alt} />
	{:else}
		<div class="placeholder animate-pulse bg-slate-200 {classes}" />
	{/if}
</div>

<style>
	.placeholder {
		min-height: 15rem;
	}
</style>
