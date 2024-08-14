<template>
    <div class="dropdown mb-2">
  <div tabindex="0" role="button" class="btn mt-5 ml-5 mb-2">
    Theme
    <svg
      width="12px"
      height="12px"
      class="inline-block h-2 w-2 fill-current opacity-60"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 2048 2048">
      <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
    </svg>
  </div>
  <ul tabindex="0" class="dropdown-content bg-base-300 rounded-box z-[1] w-52 p-2 shadow-2xl">
    <li>
      <input
        type="radio"
        name="theme-dropdown"
        class="theme-controller btn btn-sm btn-block btn-ghost justify-start"
        aria-label="Default"
        value="default" />
    </li>
    <li>
      <input
        type="radio"
        name="theme-dropdown"
        class="theme-controller btn btn-sm btn-block btn-ghost justify-start"
        aria-label="Dark"
        value="dark" />
    </li>
    <li>
      <input
        type="radio"
        name="theme-dropdown"
        class="theme-controller btn btn-sm btn-block btn-ghost justify-start"
        aria-label="Black"
        value="black" />
    </li>
    <li>
      <input
        type="radio"
        name="theme-dropdown"
        class="theme-controller btn btn-sm btn-block btn-ghost justify-start"
        aria-label="Aqua"
        value="aqua" />
    </li>
  </ul>
</div>
    <div class="w-full justify-center items-center flex m-2 flex-col"><NuxtPage /></div>
    <div class="btm-nav">
        <nuxt-link v-for="route of routes" :to="route.path" class="hover:brightness-75">{{ route.name }}</nuxt-link>
    </div>
</template>
<script setup lang="ts">
const router = useRouter();
const routes = router.getRoutes();
</script>
