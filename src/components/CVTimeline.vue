<script setup lang="ts">
import { computed } from 'vue'
import { i18n } from '@/data/i18n.js'
import { locale } from '@/stores/locale'

defineProps<{
  entries: {
    id: string
    type: 'work' | 'education'
    title: string
    organization: string
    location: string
    period: string
    summary: string
  }[]
}>()

const copy = computed(() => i18n[locale.value])
</script>

<template>
  <ol class="relative border-s border-slate-300 pl-6 dark:border-zinc-700">
    <li v-for="entry in entries" :key="entry.id" class="relative mb-8 last:mb-0">
      <span
        class="absolute -start-[31px] mt-1.5 inline-flex h-4 w-4 items-center justify-center rounded-full ring-4 ring-white dark:ring-zinc-900"
        :class="entry.type === 'work' ? 'bg-rose-500 dark:bg-rose-400' : 'bg-emerald-500 dark:bg-emerald-400'"
        aria-hidden="true"
      ></span>

      <div class="rounded-lg border border-slate-200 bg-white p-4 dark:border-zinc-700 dark:bg-zinc-800">
        <div class="flex flex-wrap items-center justify-between gap-2">
          <p
            class="text-sm font-semibold uppercase tracking-wide"
            :class="entry.type === 'work' ? 'text-rose-600 dark:text-rose-300' : 'text-emerald-600 dark:text-emerald-300'"
          >
            {{ entry.type === 'work' ? copy.labels.work : copy.labels.education }}
          </p>
          <p class="text-sm font-medium text-slate-600 dark:text-zinc-300">{{ entry.period }}</p>
        </div>

        <h3 class="mt-1 text-lg font-semibold text-slate-900 dark:text-white">{{ entry.title }}</h3>
        <p class="text-sm text-slate-700 dark:text-zinc-300">
          {{ entry.organization }} • {{ entry.location }}
        </p>
        <p class="mt-2 text-sm leading-6 text-slate-700 dark:text-zinc-300">{{ entry.summary }}</p>
      </div>
    </li>
  </ol>
</template>
