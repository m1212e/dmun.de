<script lang="ts">
	import type { Image } from 'src/interfaces/directus';
	/**
	 * The id of the image to display
	 */
	export let image: string | Image;
	export let alt: string;

	let id = typeof image == 'string' ? image : image.id;
</script>

<img class={$$props.class} src={'/assets/' + id} {alt} />
