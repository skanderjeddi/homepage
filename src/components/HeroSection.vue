<script setup lang="ts">
import { personal } from '@/data/personal.js'
</script>

<template>
  <section id="hero" class="scroll-mt-24 py-14 sm:py-20">
    <div class="grid gap-10 md:grid-cols-[1fr_auto] md:items-center">
      <div>
        <p class="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400">
          {{ personal.location }}
        </p>
        <h1 class="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
          {{ personal.name }}
        </h1>
        <p class="mt-4 max-w-2xl text-lg text-slate-700 dark:text-slate-300">{{ personal.tagline }}</p>

        <div class="mt-8 flex flex-wrap gap-3">
          <a
            :href="personal.cta.projectsTarget"
            class="inline-flex items-center rounded-md bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500"
          >
            {{ personal.cta.projectsLabel }}
          </a>
          <a
            :href="personal.cta.cvHref"
            class="inline-flex items-center rounded-md border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            {{ personal.cta.cvLabel }}
          </a>
        </div>
      </div>

      <img
        :src="personal.avatar"
        :alt="`${personal.name} avatar`"
        class="h-48 w-48 rounded-2xl border border-slate-200 object-cover shadow-sm sm:h-56 sm:w-56 dark:border-slate-800"
      />
    </div>
  </section>
</template>
