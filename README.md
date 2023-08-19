# Svelte Blog

Welcome to Svelte Blog, an example of a simple yet visually appealing blog created with Svelte. This project utilizes markdown files for articles and integrates Tailwind CSS for styling.

![Image](https://github.com/AdrienLF/svelte-blog/blob/main/Blog%20page%20screenshot.png)
![Image](https://github.com/AdrienLF/svelte-blog/blob/main/Article%20page.png)
## Requirements

Before getting started, make sure you have the following dependencies installed:

- [Mdsvex](https://mdsvex.com/docs): Used to process markdown files.
- [Tailwind CSS](https://tailwindcss.com/docs/guides/sveltekit): Provides utility classes for styling.

## Usage

1. Clone this repository: `git clone https://github.com/adrienlf/svelte-blog.git`
2. Navigate to the project directory: `cd svelte-blog`
3. Install dependencies: `npm install`
4. Run the project: `npm run dev`
5. Open your browser and go to: `http://localhost:5173/`

The main functionality can be found at the `route/blog` route and within the `lib/assets/components/blog` directory.

## Project Structure

- `svelte-blog/src/routes/api/posts/+server.js`: Retrieves `.md` files in `svelte-blog/src/routes/blog`. You can modify this to suit your needs.
- `svelte-blog/src/lib/assets/components/blog/BlogPreview.svelte`: Displays articles as cards on the main blog page.
- `svelte-blog/src/lib/assets/components/blog/BlogList.svelte`: Displays links to articles on the article page.
- `svelte-blog/src/routes/blog/+layout.svelte`: Contains a simple header for the blog layout.
- `svelte-blog/src/routes/blog/+page.svelte`: Renders articles with a customizable style.

## Contributing

We welcome contributions to improve these components and enhance the project. If you're new to Svelte and SvelteKit, this could be a great learning opportunity.

Feel free to use the components as they are or modify them according to your needs. If you make any improvements, consider opening a pull request to share your changes with the community.
