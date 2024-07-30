<script setup lang="ts">
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()

onMounted(() => {
  router.push({ name: 'login' })
})
</script>

<template>
  <RouterView />
</template>

<style scoped></style>