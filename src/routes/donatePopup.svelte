<script lang="ts">
	import type { Donation } from 'src/services/directus_schema';
	import { getTranslation, selectedLanguage } from '../services/lang';
	import { showDonatePopup } from '../services/donatePopup';
	import copy from '../icons/copy.svg';
	import check from '../icons/check.svg';
	import close from '../icons/x.svg';
	import { scale } from 'svelte/transition';

	export let data: Donation;

	let translation = getTranslation(data.translations, $selectedLanguage);

	let showCopyFeedback = false;

	function copyIBAN() {
		navigator.clipboard.writeText(data.iban);
		showCopyFeedback = true;

		setTimeout(() => {
			showCopyFeedback = false;
		}, 1000);
	}
</script>

{#if $showDonatePopup}
	<div transition:scale|local class="container">
		<button
			on:click={() => showDonatePopup.set(false)}
			class="absolute right-5 top-4 cursor-pointer z-10"
			><img src={close} alt="close popup" /></button
		>
		<div class="content flex flex-col items-center w-full p-5">
			<h1>{translation.title}</h1>
			<div class="mt-16 text-xl">
				<h2 class="font-bold">{translation.donation_account}</h2>
				{data.name}<br />
				<div class="flex items-center">
					IBAN: {data.iban}
					<button title="copy IBAN to clipboard" class="ml-2 relative w-6 h-6" on:click={copyIBAN}>
						{#if showCopyFeedback}
							<img
								transition:scale|local
								src={check}
								alt="success icon"
								class="absolute left-0 top-0"
							/>
						{:else}
							<img
								transition:scale|local
								src={copy}
								alt="copy icon"
								class="absolute left-0 top-0"
							/>
						{/if}
					</button>
				</div>
				BIC: &nbsp;&nbsp;&nbsp;{data.bic}<br />
				<h2 class="font-bold mt-3">PayPal:</h2>
				{data.paypal}
			</div>
		</div>
		<div class="content redBorder" />
	</div>
{/if}

<style>
	.container {
		left: 50%;
		top: 50%;
		max-width: 40rem;
		min-height: 25rem;
		position: fixed;
		z-index: 1;
		transform: translate(-50%, -50%);
		background-color: white;
		border-radius: 1.5rem;
	}

	.content {
		border-radius: 1.5rem;
		width: 100%;
		height: 100%;
		position: absolute;
		border-width: 0.3rem;
		border-color: var(--yellow);
	}

	.redBorder {
		width: 100%;
		height: 100%;
		position: absolute;
		border-color: var(--red);
		transform: rotate(-2deg);
		pointer-events: none;
	}

	h1 {
		font-family: satisfy;
		@apply text-4xl;
	}
</style>
