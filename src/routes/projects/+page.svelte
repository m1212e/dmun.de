<script lang="ts">
	import { getTranslation, selectedLanguage } from '../../services/lang';
	import Img from '../../components/Img.svelte';
	import chevron from '../../icons/chevron.svg';

	export let data: PageData;

	$: projects = data.content.map((p) => {
		const translation = getTranslation(p.translations, $selectedLanguage);
		return {
			image: p.image,
			title: translation.title,
			text: translation.text
		};
	});

	let expanded = -1;

	function expandToggleClicked(index: number) {
		console.log({ expanded, index });

		if (expanded == index) {
			expanded = -1;
		} else {
			expanded = index;
		}
	}
</script>

{#each projects as project, i}
	<div class="wrapper">
		<Img imageID={project.image.id} />
		<div class="text">
			<div class="overflow-y-auto {expanded == i ? '' : 'h-64'}">
				<h1 class="text-4xl font-bold ml-4">{project.title}</h1>
				<div class="ml-4">
					{@html project.text}
				</div>
			</div>
			<button on:click={() => expandToggleClicked(i)}>
				<img
					class:selected={expanded == i}
					class="expand-button"
					src={chevron}
					alt="expand button"
				/>
			</button>
		</div>
	</div>
{/each}

<style>
    .wrapper {
        @apply flex md:max-w-4xl my-10
    }

    .text {
        @apply w-3/5 relative
    }

    @media only screen and (max-width: 642px) {
        .wrapper {
            max-width: unset;
            @apply flex-col items-center
        }

        .text {
            width: unset;
            @apply mt-10;
        }
    }

	.expand-button {
		transition: all 0.3s;
		bottom: -2rem;
		transform: scale(1.8) rotate(90deg) translate(-50%, 0);
		left: 50%;
		@apply absolute;
	}

	.expand-button.selected {
		transform: scale(1.8) rotate(-90deg) translate(-50%, 0);
	}
</style>
