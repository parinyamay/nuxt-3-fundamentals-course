<script lang="ts" setup>
const user = useUser();

// definePageMeta() use for specified the layout that you want to use
definePageMeta({
  layout: "plain",
});
</script>

<template>
  <form @submit.prevent="user.login">
    <h1>Login</h1>
    <label>
      Usename
      <input type="text" />
    </label>
    <label>
      Password
      <input type="password" />
    </label>

    <button>Login</button>
  </form>
</template>
