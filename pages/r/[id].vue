<template>
  <div>ID: {{ route.params.id }}</div>
</template>
<script setup lang="ts">
const route = useRoute();
definePageMeta({ name: "ignore" });
</script>
