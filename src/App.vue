<script setup lang="ts">
import { RouterView } from 'vue-router'
import LitNavbar from './components/LitNavbar.vue'
</script>

<template>
  <header>
    <LitNavbar />
  </header>

  <RouterView />
</template>
