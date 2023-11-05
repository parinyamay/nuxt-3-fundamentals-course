<script lang="ts" setup>
/**
 * 1. inline route middleware
 * Normal use middleware in side definePageMeta function
 */
// definePageMeta({
//   middleware(to, from) {
//     console.log("to, from :>> ", to, from);
//   },
// });

/**
 * 2. named route middleware
 * Use middleware from middleware folder
 */
// definePageMeta({
//   middleware: ["logger"],
// });

/**
 * 3.global route middleware
 */
// Just rename your middleware file to [name].global.ts like this.
</script>

<template>
  <MovieSearch />
</template>
