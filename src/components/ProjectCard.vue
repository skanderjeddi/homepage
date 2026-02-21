<script setup lang="ts">
defineProps<{
  project: {
    id: string
    title: string
    description: string
    tech: string[]
    github: string
    demo: string
  }
}>()
</script>

<template>
  <article class="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
    <h3 class="text-xl font-semibold text-slate-900 dark:text-white">{{ project.title }}</h3>
    <p class="mt-3 text-sm leading-6 text-slate-700 dark:text-slate-300">{{ project.description }}</p>

    <ul class="mt-4 flex flex-wrap gap-2">
      <li
        v-for="techItem in project.tech"
        :key="techItem"
        class="rounded-full bg-indigo-50 px-2.5 py-1 text-xs font-medium text-indigo-700 dark:bg-indigo-500/15 dark:text-indigo-300"
      >
        {{ techItem }}
      </li>
    </ul>

    <div class="mt-5 flex items-center gap-3">
      <a
        :href="project.github"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center rounded-md border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
      >
        GitHub
      </a>
      <a
        :href="project.demo"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-medium text-white transition hover:bg-indigo-500"
      >
        Live Demo
      </a>
    </div>
  </article>
</template>
