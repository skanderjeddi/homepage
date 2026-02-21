<script setup lang="ts">
import { cvEntries } from '@/data/cv.js'
import CVTimeline from '@/components/CVTimeline.vue'
</script>

<template>
  <section id="cv" class="scroll-mt-24 py-14 sm:py-20">
    <div class="mb-8 flex flex-wrap items-center justify-between gap-4">
      <div>
        <h2 class="text-2xl font-bold text-slate-900 sm:text-3xl dark:text-white">CV / Resume</h2>
        <p class="mt-3 max-w-2xl text-slate-700 dark:text-slate-300">
          Work and education timeline. Replace entries in `src/data/cv.js`.
        </p>
      </div>

      <a
        href="/cv.pdf"
        class="inline-flex items-center rounded-md bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-500"
        download
      >
        Download CV
      </a>
    </div>

    <CVTimeline :entries="cvEntries" />
  </section>
</template>
