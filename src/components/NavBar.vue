<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { personal } from '@/data/personal.js'
import { i18n } from '@/data/i18n.js'
import { locale, toggleLocale } from '@/stores/locale'

const isMobileMenuOpen = ref(false)
const isDark = ref(false)

const copy = computed(() => i18n[locale.value])

const navLinks = computed(() => [
  { label: copy.value.nav.hero, target: '#hero' },
  { label: copy.value.nav.about, target: '#about' },
  { label: copy.value.nav.projects, target: '#projects' },
  { label: copy.value.nav.cv, target: '#cv' },
  { label: copy.value.nav.contact, target: '#contact' },
])

const themeLabel = computed(() =>
  isDark.value ? copy.value.nav.lightMode : copy.value.nav.darkMode,
)

const languageLabel = computed(() => (locale.value === 'en' ? 'FR' : 'EN'))

const scrollToTarget = (target: string) => {
  const element = document.querySelector(target)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  isMobileMenuOpen.value = false
}

const applyTheme = () => {
  document.documentElement.classList.toggle('dark', isDark.value)
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}

const toggleTheme = () => {
  isDark.value = !isDark.value
  applyTheme()
}

onMounted(() => {
  const storedTheme = localStorage.getItem('theme')
  if (storedTheme) {
    isDark.value = storedTheme === 'dark'
  } else {
    isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
  }
  applyTheme()
})
</script>

<template>
  <header class="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur dark:border-zinc-700 dark:bg-zinc-900/90">
    <nav class="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Primary">
      <button
        class="text-lg font-semibold text-slate-900 dark:text-zinc-50"
        @click="scrollToTarget('#hero')"
      >
        {{ personal.name }}
      </button>

      <div class="hidden items-center gap-6 md:flex">
        <button
          v-for="link in navLinks"
          :key="link.target"
          class="text-sm font-medium text-slate-700 transition hover:text-violet-600 dark:text-zinc-200 dark:hover:text-zinc-50"
          @click="scrollToTarget(link.target)"
        >
          {{ link.label }}
        </button>
      </div>

      <div class="flex items-center gap-2">
        <button
          class="inline-flex h-10 min-w-10 items-center justify-center rounded-md border border-slate-300 px-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800"
          :aria-label="copy.nav.language"
          type="button"
          @click="toggleLocale"
        >
          {{ languageLabel }}
        </button>

        <button
          class="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-300 text-slate-700 transition hover:bg-slate-100 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800"
          :aria-label="themeLabel"
          type="button"
          @click="toggleTheme"
        >
          <span aria-hidden="true">{{ isDark ? '☀️' : '🌙' }}</span>
        </button>

        <button
          class="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-300 text-slate-700 transition hover:bg-slate-100 md:hidden dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800"
          :aria-label="copy.nav.openMenu"
          :aria-expanded="isMobileMenuOpen"
          aria-controls="mobile-menu"
          type="button"
          @click="isMobileMenuOpen = !isMobileMenuOpen"
        >
          <span aria-hidden="true">☰</span>
        </button>
      </div>
    </nav>

    <div
      v-if="isMobileMenuOpen"
      id="mobile-menu"
      class="border-t border-slate-200 bg-white px-4 py-3 md:hidden dark:border-zinc-700 dark:bg-zinc-900"
    >
      <div class="flex flex-col gap-2">
        <button
          v-for="link in navLinks"
          :key="`mobile-${link.target}`"
          class="rounded-md px-3 py-2 text-left text-sm font-medium text-slate-700 transition hover:bg-slate-100 dark:text-zinc-200 dark:hover:bg-zinc-800"
          @click="scrollToTarget(link.target)"
        >
          {{ link.label }}
        </button>
      </div>
    </div>
  </header>
</template>
