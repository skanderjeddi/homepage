<script setup lang="ts">
import { computed } from 'vue'
import { personal } from '@/data/personal.js'
import { i18n } from '@/data/i18n.js'
import { locale } from '@/stores/locale'

const isFrench = computed(() => locale.value === 'fr')
const copy = computed(() => i18n[locale.value])

const localizedBio = computed(() => (isFrench.value ? personal.bio : (personal.bioEn ?? personal.bio)))
const localizedInterests = computed(() =>
  isFrench.value ? personal.interests : (personal.interestsEn ?? personal.interests),
)
const localizedLanguages = computed(() =>
  isFrench.value ? personal.languages : (personal.languagesEn ?? personal.languages),
)
</script>

<template>
  <section id="about" class="scroll-mt-24 py-14 sm:py-20">
    <h2 class="text-2xl font-bold text-slate-900 sm:text-3xl dark:text-white">{{ copy.sections.aboutTitle }}</h2>
    <p class="mt-5 max-w-3xl text-base leading-7 text-slate-700 dark:text-zinc-300">
      {{ localizedBio }}
    </p>

    <div class="mt-8">
      <h3 class="text-lg font-semibold text-slate-900 dark:text-white">{{ copy.sections.skillsTitle }}</h3>
      <ul class="mt-4 flex flex-wrap gap-2">
        <li
          v-for="skill in personal.skills"
          :key="skill"
          class="rounded-full bg-slate-200 px-3 py-1 text-sm font-medium text-slate-700 dark:bg-zinc-800 dark:text-zinc-200"
        >
          {{ skill }}
        </li>
      </ul>
    </div>

    <div class="mt-8">
      <h3 class="text-lg font-semibold text-slate-900 dark:text-white">{{ copy.sections.interestsTitle }}</h3>
      <ul class="mt-4 list-disc space-y-2 pl-5 text-slate-700 dark:text-zinc-300">
        <li v-for="interest in localizedInterests" :key="interest">{{ interest }}</li>
      </ul>
    </div>

    <div class="mt-8">
      <h3 class="text-lg font-semibold text-slate-900 dark:text-white">{{ copy.sections.languagesTitle }}</h3>
      <ul class="mt-4 flex flex-wrap gap-2">
        <li
          v-for="language in localizedLanguages"
          :key="language"
          class="rounded-full border border-slate-300 px-3 py-1 text-sm font-medium text-slate-700 dark:border-zinc-600 dark:text-zinc-200"
        >
          {{ language }}
        </li>
      </ul>
    </div>
  </section>
</template>
