// src/routes/blog/[slug]/+page.js
export async function load({ params }) {
  const post = await import(`../${params.slug}.md`);
  const metadata = post.metadata;
  console.log({ metadata });
  const { title, date, slug, preview, previewImage, quote } = post.metadata;
  const content = post.default;
  console.log({ content });

  return {
    content,
    title,
    date,
    slug,
    preview,
    previewImage,
    quote,
  };
}
