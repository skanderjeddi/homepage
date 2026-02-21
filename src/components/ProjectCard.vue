<script setup lang="ts">
import { computed } from 'vue'
import { i18n } from '@/data/i18n.js'
import { locale } from '@/stores/locale'

const props = defineProps<{
  project: {
    id: string | number
    title: string
    titleEn?: string
    titleFr?: string
    description: string
    descriptionEn?: string
    descriptionFr?: string
    tech?: string[]
    tags?: string[]
    github: string
    demo?: string | null
    demoLabel?: string
  }
}>()

const copy = computed(() => i18n[locale.value])
const isFrench = computed(() => locale.value === 'fr')

const title = computed(() => {
  if (isFrench.value) return props.project.titleFr ?? props.project.title
  return props.project.titleEn ?? props.project.title
})

const description = computed(() => {
  if (isFrench.value) return props.project.descriptionFr ?? props.project.description
  return props.project.descriptionEn ?? props.project.description
})

const stack = computed(() => props.project.tags ?? props.project.tech ?? [])

const demoLabel = computed(() => props.project.demoLabel ?? copy.value.labels.liveDemo)
</script>

<template>
  <article class="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
    <h3 class="text-xl font-semibold text-slate-900 dark:text-white">{{ title }}</h3>
    <p class="mt-3 text-sm leading-6 text-slate-700 dark:text-slate-300">{{ description }}</p>

    <ul class="mt-4 flex flex-wrap gap-2">
      <li
        v-for="techItem in stack"
        :key="techItem"
        class="rounded-full bg-sky-50 px-2.5 py-1 text-xs font-medium text-sky-700 dark:bg-sky-500/15 dark:text-sky-300"
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
        {{ copy.labels.github }}
      </a>
      <a
        v-if="project.demo"
        :href="project.demo"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center rounded-md bg-sky-500 px-3 py-2 text-sm font-medium text-white transition hover:bg-sky-400"
      >
        {{ demoLabel }}
      </a>
    </div>
  </article>
</template>
