<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
</script>

<template>
  <div class="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
    <NavBar />

    <main class="mx-auto max-w-6xl px-4 pb-20 pt-24 sm:px-6 lg:px-8">
      <section id="hero" class="min-h-[40vh] py-12"></section>
      <section id="about" class="min-h-[30vh] py-12"></section>
      <section id="projects" class="min-h-[30vh] py-12"></section>
      <section id="cv" class="min-h-[30vh] py-12"></section>
      <section id="contact" class="min-h-[30vh] py-12"></section>
    </main>
  </div>
</template>
