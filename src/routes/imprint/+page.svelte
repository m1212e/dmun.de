<script lang="ts">
	import { selectedLanguage, getTranslation } from '../../services/lang';

	export let data;
	$: translation = getTranslation(data.content.translations, $selectedLanguage);
</script>

{@html '<!--sse-->'}
{@html translation.text}
{@html '<!--/sse-->'}
