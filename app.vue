<template>
  <div class="w-full justify-center items-center flex m-1 flex-col">
    <div class="navbar bg-base-100">
      <div class="navbar-start">
        <div class="dropdown">
          <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabindex="0"
            class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li v-for="route of routes">
              <nuxt-link :to="route.path" class="hover:brightness-75">{{
                route.name
              }}</nuxt-link>
            </li>
          </ul>
        </div>
        <nuxt-link class="btn btn-ghost text-xl" :to="'/'">YannickMu</nuxt-link>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1">
          <li v-for="route of routes">
            <nuxt-link :to="route.path" class="hover:brightness-75">{{
              route.name
            }}</nuxt-link>
          </li>
        </ul>
      </div>
      <div class="navbar-end">
        <ThemeChanger />
        <div class="dropdown dropdown-end">
          <div
            tabindex="0"
            role="button"
            class="btn btn-ghost btn-circle avatar"
          >
            <div v-if="status === 'unauthenticated'" class="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="/static/profile.svg"
              />
            </div>
            <div v-if="status === 'authenticated'" class="w-10 rounded-full">
              <img alt="Tailwind CSS Navbar component" :src="data.user.image" />
            </div>
          </div>
          <ul
            v-if="status === 'authenticated'"
            tabindex="0"
            class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a class="justify-between">
                Profile
                <span class="badge">New</span>
              </a>
            </li>
            <li><a>Settings</a></li>
            <li><a @click="signOut()">Logout</a></li>
          </ul>
          <ul
            v-if="status === 'unauthenticated'"
            tabindex="0"
            class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a href="/api/auth/signin">Login</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <NuxtPage />
  </div>
</template>
<script setup lang="ts">
const router = useRouter();
const routerroutes = router.getRoutes();
const routes = routerroutes.filter(({ name }) => !name.includes("ignore"));
const { status, data, signOut } = useAuth();
</script>
