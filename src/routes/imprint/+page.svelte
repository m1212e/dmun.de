<script lang="ts">
	import type { Imprint } from 'src/interfaces/directus';
	import { getTranslation } from 'src/services/language';

	export let data: any;
	const translated = getTranslation((data.content as Imprint).translations);
</script>

{@html $translated.text}
