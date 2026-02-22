<script setup lang="ts">
import { computed } from 'vue'
import { personal } from '@/data/personal.js'
import { locale } from '@/stores/locale'

const isFrench = computed(() => locale.value === 'fr')

const localizedTagline = computed(() =>
  isFrench.value ? personal.tagline : (personal.taglineEn ?? personal.tagline),
)

const localizedProjectsLabel = computed(() =>
  isFrench.value
    ? personal.cta.projectsLabel
    : (personal.cta.projectsLabelEn ?? personal.cta.projectsLabel),
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
    <div
      class="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/80 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.1)] dark:border-zinc-700 dark:bg-zinc-900/70 sm:p-10"
    >
      <div
        aria-hidden="true"
        class="pointer-events-none absolute -top-20 -right-20 h-48 w-48 rounded-full bg-violet-300/25 blur-3xl dark:bg-violet-500/15"
      ></div>
      <div
        aria-hidden="true"
        class="pointer-events-none absolute -bottom-24 -left-10 h-48 w-48 rounded-full bg-cyan-300/25 blur-3xl dark:bg-cyan-400/15"
      ></div>

      <div class="relative grid gap-10 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <p
            class="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-amber-600 dark:text-amber-300"
          >
            {{ personal.location }}
          </p>
          <h1
            class="bg-gradient-to-r from-slate-900 via-violet-700 to-cyan-600 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl dark:from-white dark:via-violet-200 dark:to-cyan-300"
          >
            {{ personal.name }}
          </h1>
          <p class="mt-4 max-w-2xl text-lg text-slate-700 dark:text-zinc-300">
            {{ localizedTagline }}
          </p>

          <div class="mt-8 flex flex-wrap gap-3">
            <a
              :href="personal.cta.projectsTarget"
              class="inline-flex items-center rounded-md bg-gradient-to-r from-violet-600 to-fuchsia-500 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-violet-500/25 transition hover:-translate-y-0.5 hover:from-violet-500 hover:to-fuchsia-400"
            >
              {{ localizedProjectsLabel }}
            </a>
            <a
              :href="localizedCvHref"
              class="inline-flex items-center rounded-md border border-slate-300 bg-white/80 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:bg-white dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700"
            >
              {{ localizedCvLabel }}
            </a>
          </div>
        </div>

        <img
          :src="personal.avatar"
          :alt="`${personal.name} avatar`"
          :style="{ objectPosition: personal.avatarPosition ?? '50% 24%' }"
          class="h-48 w-48 rounded-2xl border border-white/80 object-cover shadow-xl shadow-slate-900/10 sm:h-56 sm:w-56 dark:border-zinc-700"
        />
      </div>
    </div>
  </section>
</template>
