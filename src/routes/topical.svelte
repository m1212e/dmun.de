<script lang="ts">
    export let topical: string;
    export let topical_content: string;
</script>

<div class="flex items-center max-w-2xl">
	<h1 class="font-bold text-xl">{topical}</h1>
	<div alt="separator" id="topical-separator" />
	<div class="leading-5">
		{@html topical_content}
	</div>
</div>

<style>
	#topical-separator {
		width: 1rem;
		height: 5rem;
		background-color: var(--yellow);
		border-radius: 1rem;
		margin-left: 0.8rem;
		margin-right: 0.8rem;
	}
</style>