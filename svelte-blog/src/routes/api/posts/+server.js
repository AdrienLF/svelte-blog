// src/routes/api/posts/+server.js
import { fetchMarkdownPosts } from "$lib/utils/index_posts";
import { json } from "@sveltejs/kit";

export const GET = async () => {
  const allPosts = await fetchMarkdownPosts();

  const sortedPosts = allPosts.sort((a, b) => {
    return new Date(b.meta.date) - new Date(a.meta.date);
  });
  if (!sortedPosts.length) {
    return { status: 404 };
  }
  return json(sortedPosts);
};
