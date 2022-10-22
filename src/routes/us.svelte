<script lang="ts">
	import AnimateInview from '../components/AnimateInview.svelte';
	import Img from '../components/Img.svelte';
	import { scale } from 'svelte/transition';

	export let data: {
		left_image_id: string;
		right_image_id: string;
		us_left_title: string;
		us_right_title: string;
		us_left_text: string;
		us_right_text: string;
	};
</script>

<div class="flex gap-20 mobile">
	<div class="flex flex-col items-center max-w-xs">
		<div class="relative">
			<AnimateInview>
				<div transition:scale|local={{duration: 1000}}>
					<Img
						imageID={data.left_image_id}
						alt="left person"
						class="rounded-full w-60 h-60 object-cover"
					/>
					<div class="absolute imgborderB rounded-full w-60 h-60" />
					<div class="absolute imgborderA rounded-full w-60 h-60" />
				</div>
			</AnimateInview>
		</div>
		<h1 class="text-4xl mt-8">{data.us_left_title}</h1>
		{@html data.us_left_text}
	</div>
	<div class="flex flex-col items-center max-w-xs">
		<div class="relative">
			<AnimateInview>
				<div transition:scale|local={{delay: 200, duration: 1000}}>
					<Img
						imageID={data.right_image_id}
						alt="right person"
						class="rounded-full w-60 h-60 object-cover"
					/>
					<div class="absolute imgborderC rounded-full w-60 h-60" />
					<div class="absolute imgborderD rounded-full w-60 h-60" />
				</div>
			</AnimateInview>
		</div>
		<h1 class="text-4xl mt-8">{data.us_right_title}</h1>
		{@html data.us_right_text}
	</div>
</div>

<style>
	h1 {
		font-family: satisfy;
	}

	.imgborderA {
		left: 0.4rem;
		top: 0.3rem;
		border-width: 0.35rem;
		border-color: var(--red);
		transform: scale(1.04);
	}

	.imgborderB {
		left: -0.2rem;
		top: -0.1rem;
		border-width: 0.35rem;
		border-color: var(--yellow);
		transform: scale(1.04);
	}
	.imgborderC {
		left: 0.1rem;
		top: 0.3rem;
		border-width: 0.35rem;
		border-color: var(--red);
		transform: scale(1.04);
	}

	.imgborderD {
		left: 0.3rem;
		top: -0.1rem;
		border-width: 0.35rem;
		border-color: var(--yellow);
		transform: scale(1.04);
	}

	@media only screen and (max-width: 642px) {
		.mobile {
			@apply flex-col;
		}
	}
</style>
