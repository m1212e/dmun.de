<script lang="ts">
	import Post from '../post.svelte';
    export let data: PageData;
</script>

{#each data.posts as post}
	<Post {post} />
{/each}
