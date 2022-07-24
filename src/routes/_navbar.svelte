<script lang="ts">
	import logo from '$assets/dmunlogo.png'
	import LL from '$i18n/i18n-svelte'
	import Button from '$lib/button.svelte'
	import { ArrowRightIcon } from 'svelte-feather-icons'
	import { page } from '$app/stores'
</script>

<nav class="flex items-center justify-between mt-5 mb-16">
	<a class="h-full flex items-center" href="/">
		<img src={logo} alt="dmun logo" />
	</a>
	<span class="flex gap-8 h-full">
		<a class="h-full flex items-center duration-200 {$page.url.pathname == '/' ? 'font-bold' : ''}" href="/">{$LL.nav.home()}</a>
		<a class="h-full flex items-center duration-200 {$page.url.pathname == '/association' ? 'font-bold' : ''}" href="/association">
			{$LL.nav.association()}
		</a>
		<a class="h-full flex items-center duration-200 {$page.url.pathname == '/engagement' ? 'font-bold' : ''}" href="/engagement">
			{$LL.nav.engagement()}
		</a>
		<a class="h-full flex items-center duration-200 {$page.url.pathname == '/funding' ? 'font-bold' : ''}" href="/funding">
			{$LL.nav.funding()}
		</a>
		<a class="h-full flex items-center duration-200 {$page.url.pathname == '/news' ? 'font-bold' : ''}" href="/news">
			{$LL.nav.news()}
		</a>
		<a class="h-full flex items-center ml-8" href="/conferences">
			<Button>{$LL.nav.conferences()} <ArrowRightIcon size="1.5x" /></Button>
		</a>
	</span>
</nav>
