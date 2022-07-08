<script>
	import LL, { setLocale } from '$i18n/i18n-svelte'
	import { loadLocaleAsync } from '$i18n/i18n-util.async'
</script>

hello
{$LL.test()}

<button
	on:click={async () => {
		await loadLocaleAsync('en')
		setLocale('en')
	}}
>
	Change lang to engl
</button>
