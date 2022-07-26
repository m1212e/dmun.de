<script lang="ts">
	import logo from '$assets/dmunlogo.png'
	import LL from '$i18n/i18n-svelte'
	import Button from '$lib/button.svelte'
	import { ArrowRightIcon } from 'svelte-feather-icons'
	import { page } from '$app/stores'
</script>

<nav class="flex justify-between mt-5 mb-16 items-center w-full">
	<div class="flex flex-col lg:flex-row w-full lg:w-9/12">
		<div class="flex grow justify-around items-center">
			<a class="w-24 lg:w-44" href="/">
				<img src={logo} alt="dmun logo" />
			</a>
			<a class="duration-200 p-2 md:p-0 {$page.url.pathname == '/' ? 'font-bold' : ''}" href="/">
				{$LL.nav.home()}
			</a>
			<a
				class="duration-200 p-2 md:p-0 {$page.url.pathname == '/association' ? 'font-bold' : ''}"
				href="/association"
			>
				{$LL.nav.association()}
			</a>
			<a class="duration-200 p-2 md:p-0 {$page.url.pathname == '/engagement' ? 'font-bold' : ''}" href="/engagement">
				{$LL.nav.engagement()}
			</a>
		</div>

		<div class="flex grow justify-around items-center">
			<a class="duration-200 p-2 md:p-0 {$page.url.pathname == '/funding' ? 'font-bold' : ''}" href="/funding">
				{$LL.nav.funding()}
			</a>
			<a class="duration-200 p-2 md:p-0 {$page.url.pathname == '/news' ? 'font-bold' : ''}" href="/news">
				{$LL.nav.news()}
			</a>
			<a class="duration-200 p-2 md:p-0 md:hidden {$page.url.pathname == '/conferences' ? 'font-bold' : ''}" href="/conferences">
				{$LL.nav.conferences()}
			</a>
		</div>
	</div>

	<a class="items-center ml-8 hidden lg:block" href="/conferences">
		<Button>
			{$LL.nav.conferences()}
			<ArrowRightIcon size="1.5x" />
		</Button>
	</a>
</nav>