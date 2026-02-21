<script setup lang="ts">
import { computed } from 'vue'
import { cv } from '@/data/cv.js'
import { i18n } from '@/data/i18n.js'
import { locale } from '@/stores/locale'
import CVTimeline from '@/components/CVTimeline.vue'

const copy = computed(() => i18n[locale.value])
const isFrench = computed(() => locale.value === 'fr')

const cvDownloadLink = '/cv.pdf'

const timelineEntries = computed(() =>
  cv.map((entry: any) => ({
    id: String(entry.id),
    type: entry.type,
    title: isFrench.value ? entry.title : (entry.titleEn ?? entry.title),
    organization: entry.organization,
    location: entry.location,
    period: entry.period,
    summary: Array.isArray(entry.highlights)
      ? (isFrench.value ? entry.highlights : (entry.highlightsEn ?? entry.highlights)).join(' ')
      : (entry.summary ?? ''),
  })),
)
</script>

<template>
  <section id="cv" class="scroll-mt-24 py-14 sm:py-20">
    <div class="mb-8 flex flex-wrap items-center justify-between gap-4">
      <div>
        <h2 class="text-2xl font-bold text-slate-900 sm:text-3xl dark:text-white">{{ copy.sections.cvTitle }}</h2>
        <p class="mt-3 max-w-2xl text-slate-700 dark:text-zinc-300">
          {{ copy.sections.cvSubtitle }}
        </p>
      </div>

      <a
        :href="cvDownloadLink"
        class="inline-flex items-center rounded-md bg-violet-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-violet-400 dark:bg-violet-500 dark:hover:bg-violet-400"
        download
      >
        {{ copy.labels.downloadCv }}
      </a>
    </div>

    <CVTimeline :entries="timelineEntries" />
  </section>
</template>
