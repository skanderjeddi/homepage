<script setup lang="ts">
import { computed } from 'vue'
import { personal } from '@/data/personal.js'
import { i18n } from '@/data/i18n.js'
import { locale } from '@/stores/locale'

const copy = computed(() => i18n[locale.value])
</script>

<template>
  <section id="contact" class="scroll-mt-24 py-14 sm:py-20">
    <h2 class="text-2xl font-bold text-slate-900 sm:text-3xl dark:text-white">{{ copy.sections.contactTitle }}</h2>
    <p class="mt-4 max-w-2xl text-slate-700 dark:text-slate-300">
      {{ copy.sections.contactSubtitle }}
    </p>

    <div class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <a
        :href="`mailto:${personal.email}`"
        class="rounded-lg border border-slate-200 bg-white p-4 transition hover:border-sky-300 hover:bg-sky-50 dark:border-slate-700 dark:bg-slate-800 dark:hover:border-sky-500/60 dark:hover:bg-sky-500/10"
      >
        <p class="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">{{ copy.labels.email }}</p>
        <p class="mt-2 text-sm font-medium text-slate-900 dark:text-white">{{ personal.email }}</p>
      </a>

      <a
        :href="personal.social.github"
        target="_blank"
        rel="noopener noreferrer"
        class="rounded-lg border border-slate-200 bg-white p-4 transition hover:border-violet-300 hover:bg-violet-50 dark:border-slate-700 dark:bg-slate-800 dark:hover:border-violet-500/60 dark:hover:bg-violet-500/10"
      >
        <p class="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">{{ copy.labels.github }}</p>
        <p class="mt-2 text-sm font-medium text-slate-900 dark:text-white">{{ copy.labels.profile }}</p>
      </a>

      <a
        :href="personal.social.linkedin"
        target="_blank"
        rel="noopener noreferrer"
        class="rounded-lg border border-slate-200 bg-white p-4 transition hover:border-cyan-300 hover:bg-cyan-50 dark:border-slate-700 dark:bg-slate-800 dark:hover:border-cyan-500/60 dark:hover:bg-cyan-500/10"
      >
        <p class="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">{{ copy.labels.linkedin }}</p>
        <p class="mt-2 text-sm font-medium text-slate-900 dark:text-white">{{ copy.labels.connect }}</p>
      </a>

      <a
        :href="personal.social.website"
        target="_blank"
        rel="noopener noreferrer"
        class="rounded-lg border border-slate-200 bg-white p-4 transition hover:border-teal-300 hover:bg-teal-50 dark:border-slate-700 dark:bg-slate-800 dark:hover:border-teal-500/60 dark:hover:bg-teal-500/10"
      >
        <p class="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">{{ copy.labels.website }}</p>
        <p class="mt-2 text-sm font-medium text-slate-900 dark:text-white">{{ copy.labels.visit }}</p>
      </a>
    </div>
  </section>
</template>
