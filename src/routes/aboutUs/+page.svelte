<script lang="ts">
	import type { PageData } from './$types';
	import { selectedLanguage, getTranslation } from '../../services/lang';

	export let data: PageData;
	$: translation = getTranslation(data.content.translations, $selectedLanguage);

	$: translatedPersons = data.content.persons.map((person) => {
		const t = getTranslation(person.translations, $selectedLanguage);
		return {
			image: person.image,
			name: t.name,
			text: t.text
		};
	});
</script>

<div class="wrapper">
	{#each translatedPersons as person, i}
		<div class="flex relative person" class:left={i % 2 == 0} class:right={i % 2 != 0}>
			<img
				class="person-img"
				src={'/assets/' + person.image.id}
				alt="visualizes content of this post"
			/>

			<div class="person-text">
				<h1 class="text-4xl mb-5 font-bold">
					{@html person.name}
				</h1>
				{@html person.text}
			</div>
		</div>
	{/each}

	<div>
		<img
			class="mb-5 w-full rounded-3xl object-cover"
			src={'/assets/' + data.content.image.id}
			alt="visualizes content of this post"
		/>
		<h1 class="text-4xl">
			{@html translation.title}
		</h1>
		{@html translation.text}
	</div>
</div>

<style>
	.wrapper {
		@apply w-2/3 max-w-3xl flex flex-col;
	}

	.person {
		@apply mb-80;
	}

	.person-img {
		@apply mb-5 w-96 rounded-3xl object-cover;
	}
	.person-text {
		/* border-width: 0.3rem; */
		@apply absolute top-60 bg-white p-5 rounded-2xl max-h-72 overflow-y-auto shadow;
	}

	.right {
		@apply flex-row-reverse;
	}
	.left .person-text {
		border-color: var(--red);
		@apply left-16;
	}
	.right .person-text {
		border-color: var(--yellow);
		@apply right-16;
	}

	@media only screen and (max-width: 642px) {
		.wrapper {
			width: unset;
		}

		.person {
			@apply mb-96;
		}

		.person-img {
			@apply w-full;
		}

		.person-text {
			@apply absolute top-80 bg-white p-5 rounded-2xl max-h-96 overflow-scroll shadow;
		}
	}
</style>
