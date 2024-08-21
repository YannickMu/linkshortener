<template>
  <div>ID: {{ route.params.id }}</div>
  <p>
    goes to:
    {{ link }}
  </p>
  <span class="loading loading-infinity loading-lg text-accent"></span>
</template>
<script setup lang="ts">
const route = useRoute();
const router = useRouter();
definePageMeta({ name: "ignore" });
const link = links.filter((link) => link.id === route.params.id)[0].link;
if (process.client) window.location.href = link;
</script>
