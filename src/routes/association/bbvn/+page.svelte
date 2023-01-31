<script lang="ts">
	import type { BBVN } from 'src/interfaces/directus';
	import { getTranslation } from 'src/services/language';
	import DarkMail from 'src/icons/dark-mail.svg';

	export let data: any;
	let content = data.content as BBVN;
	let translated = getTranslation(content);
</script>

<div class="sm:flex">
	<p class="sm:w-4/6 sm:pr-10">
		{@html $translated.introduction}
	</p>
	<div class="sm:w-2/6 mt-10 sm:mt-0">
		<p>
			{@html $translated.book_now}
		</p>
		<div class="flex mt-5">
			<img src={DarkMail} alt="mail icon" class="mr-2 w-14" />
			<p>
				{@html $translated.contact}
			</p>
		</div>
	</div>
</div>
