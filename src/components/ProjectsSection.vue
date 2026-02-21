<script setup lang="ts">
import { computed } from 'vue'
import { projects } from '@/data/projects.js'
import { i18n } from '@/data/i18n.js'
import { locale } from '@/stores/locale'
import ProjectCard from '@/components/ProjectCard.vue'

const copy = computed(() => i18n[locale.value])
</script>

<template>
  <section id="projects" class="scroll-mt-24 py-14 sm:py-20">
    <h2 class="flex items-center gap-2 text-2xl font-bold text-slate-900 sm:text-3xl dark:text-white">
      <span class="inline-block h-2.5 w-2.5 rounded-full bg-violet-500 dark:bg-violet-400" aria-hidden="true"></span>
      {{ copy.sections.projectsTitle }}
    </h2>
    <p class="mt-4 max-w-2xl text-slate-700 dark:text-zinc-300">
      {{ copy.sections.projectsSubtitle }}
    </p>

    <div class="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
    </div>
  </section>
</template>
