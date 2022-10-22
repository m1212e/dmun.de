<script lang="ts">
	import { getTranslation, selectedLanguage } from '../../services/lang';
	import Question from './question.svelte';

	export let data;
	$: translated = data.content.map((q) => getTranslation(q.translations, $selectedLanguage));
</script>

{#each translated as question, i}
	<Question question={question.question} answer={question.answer} open={i == 0} />
{/each}
