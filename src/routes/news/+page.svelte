<script lang="ts">
	import Img from '$lib/img.svelte';
	import type { News } from 'src/interfaces/directus';
	import { selectedLanguage } from 'src/services/language';

	export let data: any;

	let news = [];
	$: {
		let lang = $selectedLanguage;
		news = (data.content as News[]).map((n) => {
			return {
				id: n.id,
				image: n.image,
				date_created: n.date_created,
				translations: n.translations.find((t) => t.languages_code.code === lang)
			};
		});
	}

	let yearlyTopics: { title: string; text: string; id: string }[] = [];
	$: {
		let lang = $selectedLanguage;
		yearlyTopics = data.yearlyTopics.map((topic) => {
			const r = topic.translations.find((t) => t.languages_code.code === lang);
			r.id = topic.id;
			return r; // replace the id of the translation object with the id of the topic to allow navigation to that topic later
		});
	}
</script>

<div class="border-blue-dmun border rounded-3xl p-3 sm:px-5 mb-20 hover:scale-105 duration-300">
    <a href="/association/yearly-topic/{yearlyTopics[0].id}">
        <h2>{yearlyTopics[0].title}</h2>
        <p class="mt-3 text">{@html yearlyTopics[0].text}</p>
    </a>
</div>

{#each news as n}
	<a href="/news/{n.id}" class="flex flex-col sm:flex-row hover:scale-105 duration-300 mb-20">
		<Img
			class="w-full sm:w-52 h-52 object-cover rounded-3xl mr-8"
			image={n.image}
			alt="representation of this news"
		/>
		<div>
			<h2>
				{n.translations.title}
			</h2>
			<small
				>{new Date(n.date_created).toLocaleString($selectedLanguage, {
					weekday: 'long',
					year: 'numeric',
					month: 'long',
					day: 'numeric'
				})}</small
			>
			<p class="text mt-5">{@html n.translations.text}</p>
		</div>
	</a>
{/each}

<style>
	.text {
		mask-image: linear-gradient(180deg, #000 60%, transparent);
		@apply h-44 overflow-y-hidden;
	}
</style>
