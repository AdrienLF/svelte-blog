<script>
  import { goto } from "$app/navigation";
  export let data;
  //   content,
  //   title,
  //   date,
  //   slug,
  //   preview,
  //   previewImage
  //   quote
  console.log({ data });

  export let all_posts;
</script>

<div class="BackButton">
  <span
    class="block cursor-pointer"
    on:click={() => {
      goto("/blog");
    }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="inline h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M11 17l-5-5m0 0l5-5m-5 5h12"
      />
    </svg>
    Back
  </span>
</div>

<div class="ArticleContainer w-full">
  <div class="ArticleWrap max-w-prose">
    <div class="ArticleHeader">
      <div class="HeaderDiv">
        <div class="articleImage object-fill">
          <img src={data.previewImage} alt={data.title} class="image w-full" />
        </div>
        <div class="titleQuote">
          “{data.quote}”
        </div>
      </div>
    </div>
    <div class="ArticleContent">
      <svelte:component this={data.content} />
    </div>
  </div>
</div>

<style>
  @font-face {
    font-family: "CormorantGaramond";
    src: url("/fonts/CormorantGaramond-LightItalic.ttf") format("truetype");
  }

  .ArticleContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .ArticleWrap {
    flex-grow: 1; /* Take the remaining space */
    margin: 1em;
  }

  .ArticleHeader {
    display: grid;
    flex-direction: row;
    justify-items: center;
    align-items: center;
    margin-bottom: 40px;
  }

  .ArticleContent {
    max-width: 800px;
    width: 100%;
    padding-bottom: 100px;
  }

  .HeaderDiv {
    display: grid;
  }

  .articleImage {
    grid-area: 1 / 1;
  }
  .image {
    position: relative;
    width: auto;
    max-height: calc(25vw + 25vh);
    padding: calc(2vw + 2vh) 0;
    left: -10%;
  }

  .titleQuote {
    max-width: 20vw;
    left: 50%;
    bottom: -15%;
    font-size: clamp(0px, calc(3vw + 3vh), 140px);
    line-height: clamp(0px, calc(2.5vw + 2.5vh), 140px);

    grid-area: 1 / 1;

    font-family: "CormorantGaramond";
    font-style: italic;
    text-shadow: -3px 0px 0px white;
    position: relative;

    z-index: 10;
  }

  :global(p) {
    font-family: var(--default-font);
    color: var(--primary--deep-dark);
    padding: 10px 0px;
  }

  :global(strong) {
    font-family: var(--alt-font);
    padding: 20px 0px;
    color: grey;
    font-size: 1.5em;
  }
</style>
