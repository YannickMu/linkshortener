<template>
	<div>
		<div role="alert" class="alert alert-error">
			<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none"
				viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
					d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
			</svg>
			<span>Error! Task failed successfully times.</span>
		</div>
		<input type="text" v-model="input" placeholder="Test" class="input input-bordered w-full max-w-xs" />
		<button @click="console.log(input)" class="btn btn-sm btn-primary">
			Test
		</button>
		<p>{{ status }}</p>
		<p>{{ status === 'unauthenticated' }}</p>
	</div>
</template>

<script setup lang="ts">
definePageMeta({ name: "Home", path: "/" });
const { status, data } = useAuth();
const input = ref("");
</script>
