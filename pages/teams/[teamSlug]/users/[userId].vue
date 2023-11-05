<script setup>
const route = useRoute();
const message = computed(
  () =>
    `i'm on team ${route.params.teamSlug} and my user id is ${route.params.userID}`
);
</script>

<template>
  <p>
    {{ message }}
  </p>
</template>
