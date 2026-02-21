<script setup lang="ts">
import { personal } from '@/data/personal.js'
</script>

<template>
  <section id="contact" class="scroll-mt-24 py-14 sm:py-20">
    <h2 class="text-2xl font-bold text-slate-900 sm:text-3xl dark:text-white">Contact</h2>
    <p class="mt-4 max-w-2xl text-slate-700 dark:text-slate-300">
      Feel free to reach out for collaboration, freelance projects, or just to connect.
    </p>

    <div class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <a
        :href="`mailto:${personal.email}`"
        class="rounded-lg border border-slate-200 bg-white p-4 transition hover:border-indigo-300 hover:bg-indigo-50 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-indigo-500/60 dark:hover:bg-indigo-500/10"
      >
        <p class="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Email</p>
        <p class="mt-2 text-sm font-medium text-slate-900 dark:text-white">{{ personal.email }}</p>
      </a>

      <a
        :href="personal.social.github"
        target="_blank"
        rel="noopener noreferrer"
        class="rounded-lg border border-slate-200 bg-white p-4 transition hover:border-indigo-300 hover:bg-indigo-50 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-indigo-500/60 dark:hover:bg-indigo-500/10"
      >
        <p class="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">GitHub</p>
        <p class="mt-2 text-sm font-medium text-slate-900 dark:text-white">Profile</p>
      </a>

      <a
        :href="personal.social.linkedin"
        target="_blank"
        rel="noopener noreferrer"
        class="rounded-lg border border-slate-200 bg-white p-4 transition hover:border-indigo-300 hover:bg-indigo-50 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-indigo-500/60 dark:hover:bg-indigo-500/10"
      >
        <p class="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">LinkedIn</p>
        <p class="mt-2 text-sm font-medium text-slate-900 dark:text-white">Connect</p>
      </a>

      <a
        :href="personal.social.website"
        target="_blank"
        rel="noopener noreferrer"
        class="rounded-lg border border-slate-200 bg-white p-4 transition hover:border-indigo-300 hover:bg-indigo-50 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-indigo-500/60 dark:hover:bg-indigo-500/10"
      >
        <p class="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Website</p>
        <p class="mt-2 text-sm font-medium text-slate-900 dark:text-white">Visit</p>
      </a>
    </div>
  </section>
</template>
