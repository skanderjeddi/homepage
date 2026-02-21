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
    metadata?: {
      statusEn?: string
      statusFr?: string
      language?: string
      stars?: number
      forks?: number
      license?: string | null
      updatedAt?: string
      repo?: string
    }
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

const localizedStatus = computed(() => {
  const metadata = props.project.metadata
  if (!metadata) return null
  return isFrench.value ? (metadata.statusFr ?? metadata.statusEn ?? null) : (metadata.statusEn ?? metadata.statusFr ?? null)
})

const updatedDate = computed(() => {
  const updatedAt = props.project.metadata?.updatedAt
  if (!updatedAt) return null

  const date = new Date(updatedAt)
  if (Number.isNaN(date.getTime())) return null

  return date.toLocaleDateString(locale.value === 'fr' ? 'fr-FR' : 'en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
})
</script>

<template>
  <article class="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-zinc-700 dark:bg-zinc-800">
    <h3 class="text-xl font-semibold text-slate-900 dark:text-white">{{ title }}</h3>
    <p class="mt-3 text-sm leading-6 text-slate-700 dark:text-zinc-300">{{ description }}</p>

    <ul class="mt-4 flex flex-wrap gap-2">
      <li
        v-for="techItem in stack"
        :key="techItem"
        class="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700 dark:bg-zinc-700 dark:text-zinc-200"
      >
        {{ techItem }}
      </li>
    </ul>

    <dl v-if="project.metadata" class="mt-4 grid grid-cols-2 gap-2 text-xs">
      <div class="rounded-md bg-slate-100 px-2 py-1 dark:bg-zinc-700/60">
        <dt class="text-slate-500 dark:text-zinc-400">{{ copy.labels.status }}</dt>
        <dd class="font-medium text-slate-700 dark:text-zinc-200">{{ localizedStatus ?? '—' }}</dd>
      </div>
      <div class="rounded-md bg-slate-100 px-2 py-1 dark:bg-zinc-700/60">
        <dt class="text-slate-500 dark:text-zinc-400">{{ copy.labels.language }}</dt>
        <dd class="font-medium text-slate-700 dark:text-zinc-200">{{ project.metadata.language ?? '—' }}</dd>
      </div>
      <div class="rounded-md bg-slate-100 px-2 py-1 dark:bg-zinc-700/60">
        <dt class="text-slate-500 dark:text-zinc-400">{{ copy.labels.stars }}</dt>
        <dd class="font-medium text-slate-700 dark:text-zinc-200">{{ project.metadata.stars ?? 0 }}</dd>
      </div>
      <div class="rounded-md bg-slate-100 px-2 py-1 dark:bg-zinc-700/60">
        <dt class="text-slate-500 dark:text-zinc-400">{{ copy.labels.updated }}</dt>
        <dd class="font-medium text-slate-700 dark:text-zinc-200">{{ updatedDate ?? '—' }}</dd>
      </div>
    </dl>

    <div class="mt-5 flex items-center gap-3">
      <a
        :href="project.github"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center rounded-md border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-700"
      >
        {{ copy.labels.github }}
      </a>
      <a
        v-if="project.demo"
        :href="project.demo"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center rounded-md bg-emerald-500 px-3 py-2 text-sm font-medium text-white transition hover:bg-emerald-400 dark:bg-emerald-500 dark:hover:bg-emerald-400"
      >
        {{ demoLabel }}
      </a>
    </div>
  </article>
</template>
