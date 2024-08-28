<template>
  <p>https://localhost:3000/r/{{ hash }}</p>
  <label class="form-control w-full max-w-xs">
    <div class="label">
      <span class="label-text">URL to shorten</span>
    </div>
    <input
      type="text"
      placeholder="https://example.com/path/to/cool/site"
      class="input input-bordered w-auto max-w-xs"
      :class="{ 'input-error': urlerr }"
      v-model="url"
    />
  </label>
  <label class="form-control w-full max-w-xs">
    <div class="label">
      <span class="label-text">Hash for url</span>
    </div>
    <input
      type="text"
      placeholder="a123"
      class="input input-bordered w-auto max-w-xs"
      :class="{ 'input-error': hasherr }"
      v-model="hash"
    />
  </label>
  <button class="btn btn-active btn-primary mt-4">Erstellen</button>
</template>

<script setup lang="ts">
  definePageMeta({name: "Create Link", path: "/newlink"});
const genRanHex = (size) =>
  [...Array(size)]
    .map(() => Math.floor(Math.random() * 16).toString(16))
    .join("");

var valid = null;

var generated = genRanHex(8);
while (valid !== true) {
  valid = null;

  for (const i of links) {
    if (valid === false) break;
    if (i.id === generated) valid = false;
  }
  if (valid === null) valid = true;
  generated = genRanHex(8);
}

var hasherr = false
const hash = ref(generated);
watch(hash, (newHash) => {
  if (newHash === "") {
    hasherr = true;
  } else {
    hasherr = false;
  }
    for (const i of links) {
      if (i.id === newHash) {
        hasherr = true;
      }
    }
});

var urlerr = false;
const url = ref("");
watch(url, (newUrl) => {
  if (newUrl === "") {
    urlerr = true;
  } else {
    urlerr = false;
  }
});
</script>
