<script lang="ts">
	import Img from '../../components/Img.svelte';
import { selectedLanguage, getTranslation } from '../../services/lang';

	export let data;
	$: translation = getTranslation(data.content.translations, $selectedLanguage);
</script>

<div class="wrapper">
    <Img imageID={data.content.image.id} class="mb-5 w-full rounded-3xl object-cover" />
    <h1 class="text-4xl mt-6 mb-4">
		{translation.title}
	</h1>
    {@html translation.text}
</div>

<style>
	.wrapper {
		@apply w-2/3 max-w-3xl
	}
	@media only screen and (max-width: 642px) {
		.wrapper {
			width: unset;
		}
	}
</style>