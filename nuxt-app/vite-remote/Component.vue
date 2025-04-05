<template>
  <div>
    <p>This is a Nuxt app!</p>
    <p>Counter: {{ counter }}</p>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  counter: {
    type: Number,
    required: true
  }
});
</script>
