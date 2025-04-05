<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue';
// import img from './assets/vue.svg'

// onMounted(async () => {
//   const remoteApp = await import('remote/Navbar');
//   remoteApp.mount(document.getElementById('nav'))
//   const remoteCard = await import('remote/Card');
//   remoteCard.mount(document.getElementById('card'), {
//      img,
//       title: "A title from Vue host",
//       description: "Description from Vue host"
//   })
// })

const RemoteComponent = defineAsyncComponent(() =>
  import('remoteNuxt/app')
);

const counter = ref(0);
</script>

<template>
  <div>
    <div id="nav"></div>
    <RemoteComponent :counter="counter" />
    <button @click="counter++">Click</button>
    <main class="container">
      <h1>Vue + Vite</h1>
      <div id="card"></div>
    </main>
  </div>
</template>

<style>
/* @import url('http://localhost:5172/index.css'); */
</style>
