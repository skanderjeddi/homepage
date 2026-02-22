<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted } from 'vue'
import NavBar from '@/components/NavBar.vue'
import HeroSection from '@/components/HeroSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import ProjectsSection from '@/components/ProjectsSection.vue'
import CVSection from '@/components/CVSection.vue'
import ContactSection from '@/components/ContactSection.vue'
import FooterSection from '@/components/FooterSection.vue'
import { i18n } from '@/data/i18n.js'
import { locale } from '@/stores/locale'

const copy = computed(() => i18n[locale.value])

let revealObserver: IntersectionObserver | null = null

onMounted(() => {
  const revealItems = Array.from(document.querySelectorAll<HTMLElement>('.section-reveal'))
  if (!revealItems.length) return

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    revealItems.forEach((item) => item.classList.add('is-visible'))
    return
  }

  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('is-visible')
        revealObserver?.unobserve(entry.target)
      })
    },
    {
      threshold: 0.18,
      rootMargin: '0px 0px -8% 0px',
    },
  )

  revealItems.forEach((item) => revealObserver?.observe(item))
})

onBeforeUnmount(() => {
  revealObserver?.disconnect()
  revealObserver = null
})
</script>

<template>
  <div class="min-h-screen bg-slate-50 text-slate-900 dark:bg-zinc-900 dark:text-zinc-50">
    <a
      href="#hero"
      class="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-violet-500 focus:px-3 focus:py-2 focus:text-white"
    >
      {{ copy.labels.skipToContent }}
    </a>

    <NavBar />

    <main id="main-content" class="mx-auto max-w-6xl px-4 pb-20 pt-24 sm:px-6 lg:px-8">
      <div class="section-reveal">
        <HeroSection />
      </div>
      <div class="section-reveal">
        <AboutSection />
      </div>
      <div class="section-reveal">
        <ProjectsSection />
      </div>
      <div class="section-reveal">
        <CVSection />
      </div>
      <div class="section-reveal">
        <ContactSection />
      </div>
    </main>

    <FooterSection />
  </div>
</template>

<style scoped>
.section-reveal {
  opacity: 0;
  transform: translateY(20px);
  transition:
    opacity 520ms ease,
    transform 520ms ease;
}

.section-reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}

@media (prefers-reduced-motion: reduce) {
  .section-reveal {
    opacity: 1;
    transform: none;
    transition: none;
  }
}
</style>
