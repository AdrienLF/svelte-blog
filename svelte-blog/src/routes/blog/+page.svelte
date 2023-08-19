<!-- src/routes/blog/+page.svelte -->
<script>
  import BlogPreview from "$lib/assets/components/blog/BlogPreview.svelte";
  import { page } from "$app/stores";

  let posts;

  $: {
    posts = $page.data.posts;
    console.log({ posts });
  }

  export let data;
  console.log({ data });
  console.log("<!-- src/routes/blog/+page.svelte -->");
</script>

<div class="postListContainer">
  {#each posts as post}
    <a href={post.path}>
      <BlogPreview post_data={post.meta} />
    </a>
  {/each}
</div>

<style>
  .blogPage {
    display: flex;
    flex-wrap: wrap;
    flex-orientation: column;
    gap: 10px;
    padding: 20px;
  }
  .postListContainer {
    display: flex;
    flex-wrap: wrap;
    flex-orientation: row;
    gap: 10px;
    padding: 20px;
    flex-grow: 1; /* Take the remaining space */
  }
</style>
