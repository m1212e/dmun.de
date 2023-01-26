<script lang="ts">
	import type { Association } from 'src/interfaces/directus';
	import { getTranslation } from 'src/services/language';

	export let data: any;
	let content = data.content as Association;
	const translated = getTranslation(content);
</script>

<div class="flex-row sm:flex items-center">
	<div class="sm:w-7/12">
		<h1>{$translated.title}</h1>
		<p>
			{@html $translated.text}
		</p>
	</div>
	<img class="sm:w-5/12" src={'/assets/' + content.leaf_image.id} alt="decorative" />
</div>
