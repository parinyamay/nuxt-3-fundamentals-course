<script setup>
const route = useRoute();
// useFetch is similar to useAsyncData() but it shorthand form
const { data } = await useFetch(
  `http://www.omdbapi.com/?apikey=bacc261b&i=${route.params.id}`,
  {
    // This is shorthand for transform
    pick: ["Plot", "Title", "Poster"],
    key: `/movies/${route.params.id}`,
    onResponse({ request, response }) {
      console.log(response);
      if (response._data.Response === "Incorrect IMDb ID.") {
        showError({
          statusCode: 404,
          statusMessage: "Page Not Found",
        });
      }
    },
  }
);
// Use for change title on web browser
useHead({
  title: data.value.Title,
  meta: [
    { name: "description", content: data.value.Plot },
    { property: "og:description", content: data.value.Plot },
    { property: "og:image", content: data.value.Poster },
    { property: "twitter:card", content: `summary_large_image` },
  ],
});
</script>
<template>
  <div>
    <pre>{{ data }}</pre>
  </div>
</template>
