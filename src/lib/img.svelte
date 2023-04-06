<script lang="ts">
	import type { Image } from 'src/interfaces/directus';
	/**
	 * The id of the image to display
	 */
	export let image: string | Image;
	export let alt: string;

	// console.log(image);
	

	$: id = typeof image == 'string' ? image : image.filename_disk;
</script>

<img class={$$props.class} src={'/assets/' + id} {alt} />
