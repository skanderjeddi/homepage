<script setup lang="ts">
import { computed } from 'vue'
import { personal } from '@/data/personal.js'
import { i18n } from '@/data/i18n.js'
import { locale } from '@/stores/locale'

const currentYear = new Date().getFullYear()
const copy = computed(() => i18n[locale.value])
</script>

<template>
  <footer class="border-t border-slate-200 py-8 dark:border-slate-700">
    <div class="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-4 text-sm text-slate-600 sm:flex-row sm:items-center sm:px-6 lg:px-8 dark:text-slate-300">
      <p>© {{ currentYear }} {{ personal.name }}. {{ copy.labels.allRights }}</p>

      <div class="flex items-center gap-4">
        <a :href="personal.social.github" target="_blank" rel="noopener noreferrer" class="hover:text-sky-600 dark:hover:text-sky-300">{{ copy.labels.github }}</a>
        <a :href="personal.social.linkedin" target="_blank" rel="noopener noreferrer" class="hover:text-cyan-600 dark:hover:text-cyan-300">{{ copy.labels.linkedin }}</a>
      </div>
    </div>
  </footer>
</template>
