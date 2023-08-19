<script>
  import BlogList from "$lib/assets/components/blog/BlogList.svelte";

  export let data;
</script>

<slot />

<BlogList {data} />
