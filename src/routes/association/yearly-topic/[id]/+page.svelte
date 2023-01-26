<script lang="ts">
	import type { YearlyTopic } from 'src/interfaces/directus';
	import { getTranslation } from 'src/services/language';

	export let data: any;
	let content = data.content as YearlyTopic;
	let translated = getTranslation(content);
</script>

<h1 class="mb-5">{$translated.title}</h1>
<p class="sm:columns-3" style="column-gap: 3rem;">
	{@html $translated.text}
</p>
