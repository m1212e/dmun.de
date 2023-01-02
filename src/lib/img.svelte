<script lang="ts">
	import type { Image } from 'src/interfaces/directus';
	/**
	 * The id of the image to display
	 */
	export let image: string | Image;

	let id = typeof image == 'string' ? image : image.id;

	let classes = $$props.class ?? 'w-96 h-64 rounded-3xl object-cover';
</script>

<img class={classes} src={'/assets/' + id} alt={$$props.alt} />
