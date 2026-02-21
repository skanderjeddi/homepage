<script setup lang="ts">
import { personal } from '@/data/personal.js'

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-slate-200 py-8 dark:border-slate-800">
    <div class="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-4 text-sm text-slate-600 sm:flex-row sm:items-center sm:px-6 lg:px-8 dark:text-slate-300">
      <p>© {{ currentYear }} {{ personal.name }}. All rights reserved.</p>

      <div class="flex items-center gap-4">
        <a :href="personal.social.github" target="_blank" rel="noopener noreferrer" class="hover:text-indigo-600 dark:hover:text-indigo-400">GitHub</a>
        <a :href="personal.social.linkedin" target="_blank" rel="noopener noreferrer" class="hover:text-indigo-600 dark:hover:text-indigo-400">LinkedIn</a>
      </div>
    </div>
  </footer>
</template>
