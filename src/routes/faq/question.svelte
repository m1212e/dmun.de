<script lang="ts">
    import { slide } from 'svelte/transition';

	export let question: string;
	export let answer: string;

	export let open = false;
</script>

<div class="flex w-full flex-col my-3 max-w-xl">
	<button on:click={() => (open = !open)}>
		<h1>{question}</h1>
	</button>

	{#if open}
    <div class="pl-4 pt-2" transition:slide|local>
        {@html answer}
    </div>
	{/if}
</div>

<style>
	button {
		border-width: 0.2rem;
		border-color: var(--yellow);
		@apply rounded-lg p-2 flex w-full;
	}

	h1 {
		font-family: satisfy;
		@apply text-2xl;
	}

	h1::after {
		content: ' ?';
		color: var(--red);
	}
</style>
