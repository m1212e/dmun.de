<script lang="ts">
	import Img from '$lib/img.svelte';
	import type { News } from 'src/interfaces/directus';
	import { getTranslation } from 'src/services/language';

	export let data: any;
	let content = data.content as News;
	let translated = getTranslation(content);
</script>

<Img class="object-cover h-96 w-full" image={content.image} alt="news image" />
<h1 class="my-5">{$translated.title}</h1>
<p>
	{@html $translated.text}
</p>
