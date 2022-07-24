<script>
	export let title = undefined
	export let disabled = false
	export let primary = true
</script>

<button
	on:click
	{title}
	{disabled}
	class="flex items-center rounded-xl px-3 py-2 duration-300 cursor-pointer disabled:cursor-default {$$props.class} {primary
		? 'primary'
		: 'default'}"
>
	<slot />
</button>

<style>
	button.default {
		@apply border;
		border-color: #515151;
	}
	button:not([disabled]):hover.default {
		background-color: #eeeeee;
	}
	button:disabled.default {
		opacity: 0.4;
	}

	button.primary {
		color: white;
		background-color: #3f82d9;
		font-weight: bold;
	}
	button:not([disabled]):hover.primary {
		background-color: #1e6ed7;
	}
	button:disabled.primary {
		background-color: rgba(115, 157, 211, 0.864);
	}
</style>
