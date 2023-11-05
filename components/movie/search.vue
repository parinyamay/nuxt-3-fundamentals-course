<script setup>
const query = ref("");
const movies = ref([]);
const search = async () => {
  const { Search } = await $fetch(
    `https://www.omdbapi.com/?apikey=bacc261b&s=${query.value}`
  );
  movies.value = Search;
};
</script>

<template>
  <div>
    <form @submit.prevent="search">
      <input type="text" v-model="query" />
      <button>Search</button>
    </form>

    <ul style="display: flex; flex-wrap: wrap; gap: 10px; list-style: none">
      <li v-for="movie in movies" :key="movie.imdbID">
        <NuxtLink :to="{ name: 'movies-id', params: { id: movie.imdbID } }">
          <img :src="movie.Poster" :alt="movie.Title" />
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
