<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(async () => {
  const remoteApp = await import('remote/Navbar');
  remoteApp.mount(document.getElementById('nav'))
})
</script>

<template>
  <div>
    <div id="nav"></div>
    <main class="container">
      <h1>Vue + Vite</h1>
    </main>
  </div>
</template>

<style>
@import url('http://localhost:5172/index.css');
</style>
