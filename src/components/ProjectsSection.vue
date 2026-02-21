<script setup lang="ts">
import { projects } from '@/data/projects.js'
import ProjectCard from '@/components/ProjectCard.vue'
</script>

<template>
  <section id="projects" class="scroll-mt-24 py-14 sm:py-20">
    <h2 class="text-2xl font-bold text-slate-900 sm:text-3xl dark:text-white">Projects</h2>
    <p class="mt-4 max-w-2xl text-slate-700 dark:text-slate-300">
      A few selected projects. Update these entries in `src/data/projects.js`.
    </p>

    <div class="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
    </div>
  </section>
</template>
