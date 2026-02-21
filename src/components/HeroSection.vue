<script setup lang="ts">
import { computed } from 'vue'
import { personal } from '@/data/personal.js'
import { locale } from '@/stores/locale'

const isFrench = computed(() => locale.value === 'fr')

const localizedTagline = computed(() =>
  isFrench.value ? personal.tagline : (personal.taglineEn ?? personal.tagline),
)

const localizedProjectsLabel = computed(() =>
  isFrench.value ? personal.cta.projectsLabel : (personal.cta.projectsLabelEn ?? personal.cta.projectsLabel),
)

const localizedCvLabel = computed(() =>
  isFrench.value ? personal.cta.cvLabel : (personal.cta.cvLabelEn ?? personal.cta.cvLabel),
)

const localizedCvHref = computed(() =>
  isFrench.value ? personal.cta.cvHref : (personal.cta.cvHrefEn ?? personal.cta.cvHref),
)
</script>

<template>
  <section id="hero" class="scroll-mt-24 py-14 sm:py-20">
    <div class="grid gap-10 md:grid-cols-[1fr_auto] md:items-center">
      <div>
        <p class="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-sky-600 dark:text-sky-300">
          {{ personal.location }}
        </p>
        <h1 class="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
          {{ personal.name }}
        </h1>
        <p class="mt-4 max-w-2xl text-lg text-slate-700 dark:text-slate-300">{{ localizedTagline }}</p>

        <div class="mt-8 flex flex-wrap gap-3">
          <a
            :href="personal.cta.projectsTarget"
            class="inline-flex items-center rounded-md bg-sky-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-400"
          >
            {{ localizedProjectsLabel }}
          </a>
          <a
            :href="localizedCvHref"
            class="inline-flex items-center rounded-md border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            {{ localizedCvLabel }}
          </a>
        </div>
      </div>

      <img
        :src="personal.avatar"
        :alt="`${personal.name} avatar`"
        class="h-48 w-48 rounded-2xl border border-slate-200 object-cover shadow-sm sm:h-56 sm:w-56 dark:border-slate-700"
      />
    </div>
  </section>
</template>
