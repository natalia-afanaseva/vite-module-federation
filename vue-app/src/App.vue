<script setup lang="ts">
import { onMounted } from 'vue';
import img from './assets/vue.svg'

onMounted(async () => {
  const remoteApp = await import('remote/Navbar');
  remoteApp.mount(document.getElementById('nav'))
  const remoteCard = await import('remote/Card');
  remoteCard.mount(document.getElementById('card'), {
     img,
      title: "A title from Vue host",
      description: "Description from Vue host"
  })
})
</script>

<template>
  <div>
    <div id="nav"></div>
    <main class="container">
      <h1>Vue + Vite</h1>
      <div id="card"></div>
    </main>
  </div>
</template>

<style>
@import url('http://localhost:5172/index.css');
</style>
