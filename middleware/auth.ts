export default defineNuxtRouteMiddleware((to, from) => {
  const userIsLoggedIn = false;
  if (!userIsLoggedIn) {
    /**
     * abortNavigation() use for abort if user is not logged in.
     * abortNavigation("foo-bar") can assign message in the function for show on the browser.
     */
    // return abortNavigation("You're not allowed to visit /admin!");

    /**
     * navigateTo() use for navigate use to the page that you want to.
     * in side {} you can use '/login, {name: 'login}, {path: /login}
     */
    return navigateTo({ path: "/login" });
  }
});
