<script setup lang="ts">
import { personal } from '@/data/personal.js'
</script>

<template>
  <section id="about" class="scroll-mt-24 py-14 sm:py-20">
    <h2 class="text-2xl font-bold text-slate-900 sm:text-3xl dark:text-white">About Me</h2>
    <p class="mt-5 max-w-3xl text-base leading-7 text-slate-700 dark:text-slate-300">
      {{ personal.bio }}
    </p>

    <div class="mt-8">
      <h3 class="text-lg font-semibold text-slate-900 dark:text-white">Skills</h3>
      <ul class="mt-4 flex flex-wrap gap-2">
        <li
          v-for="skill in personal.skills"
          :key="skill"
          class="rounded-full bg-slate-200 px-3 py-1 text-sm font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200"
        >
          {{ skill }}
        </li>
      </ul>
    </div>

    <div class="mt-8">
      <h3 class="text-lg font-semibold text-slate-900 dark:text-white">Interests</h3>
      <ul class="mt-4 list-disc space-y-2 pl-5 text-slate-700 dark:text-slate-300">
        <li v-for="interest in personal.interests" :key="interest">{{ interest }}</li>
      </ul>
    </div>
  </section>
</template>
