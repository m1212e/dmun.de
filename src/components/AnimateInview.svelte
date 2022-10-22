<script lang="ts">
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, ScrollDirection, Options } from 'svelte-inview';

	let isInView: boolean;
	let scrollDirection: ScrollDirection;
	const options: Options = {
		rootMargin: '-60px',
		unobserveOnEnter: true
	};

	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		isInView = detail.inView;
		scrollDirection = detail.scrollDirection.vertical;
	};
</script>

<div class={isInView ? '' : 'my-36'} use:inview={options} on:change={handleChange}>
	{#if isInView}
		<slot />
	{/if}
</div>
