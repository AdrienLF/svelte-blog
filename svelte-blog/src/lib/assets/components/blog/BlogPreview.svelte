<script>
  export let post_data;
  //   content,
  //   title,
  //   date,
  //   slug,
  //   preview,
  //   previeImage
  //   quote

  function formatDate(inputDate) {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const [year, month, day] = inputDate.split("-");
    const formattedDate = `${parseInt(day)} ${
      months[parseInt(month) - 1]
    }. ${year}`;

    return formattedDate;
  }

  const formatted = formatDate(post_data.date);
</script>

<div
  class="bg-white shadow-lg rounded-lg overflow-hidden w-full md:w-64 lg:w-72 aspect-auto lg:aspect-[9/16]"
>
  <div class="h-40 md:h-64 lg:h-72">
    <img
      src={post_data.previewImage}
      alt={post_data.title}
      class="object-cover w-full h-full"
    />
  </div>
  <div class="p-4">
    <h2 class="text-xl font-semibold text-primary-color mb-2">
      {post_data.title}
    </h2>
    <p class="text-sm text-gray-500">{formatted}</p>
    <p class="mt-2 text-lg italic text-primary-color text-center postQuote">
      {post_data.quote}
    </p>
  </div>
</div>

<style>
  @font-face {
    font-family: "CormorantGaramond";
    src: url("/fonts/CormorantGaramond-LightItalic.ttf") format("truetype");
  }

  .postQuote {
    font-family: "CormorantGaramond";
    font-style: italic;
    font-weight: 400;
    font-size: 28px;
    line-height: 28px;

    text-align: center;
    padding-top: 10px;
  }
</style>
