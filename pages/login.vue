<script lang="ts" setup>
const isLoggedIn = useIsLoggedIn();

// definePageMeta() use for specified the layout that you want to use
definePageMeta({
  layout: "plain",
});

const login = () => {
  isLoggedIn.value = true;
  useRouter().push("/");
};
</script>

<template>
  <form @submit.prevent="login">
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
