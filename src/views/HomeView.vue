<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
import HeroSection from '@/components/HeroSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import ProjectsSection from '@/components/ProjectsSection.vue'
import CVSection from '@/components/CVSection.vue'
import ContactSection from '@/components/ContactSection.vue'
import FooterSection from '@/components/FooterSection.vue'
</script>

<template>
  <div class="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
    <a
      href="#hero"
      class="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-indigo-600 focus:px-3 focus:py-2 focus:text-white"
    >
      Skip to content
    </a>

    <NavBar />

    <main id="main-content" class="mx-auto max-w-6xl px-4 pb-20 pt-24 sm:px-6 lg:px-8">
      <Transition name="fade-up" appear>
        <HeroSection />
      </Transition>
      <Transition name="fade-up" appear>
        <AboutSection />
      </Transition>
      <Transition name="fade-up" appear>
        <ProjectsSection />
      </Transition>
      <Transition name="fade-up" appear>
        <CVSection />
      </Transition>
      <Transition name="fade-up" appear>
        <ContactSection />
      </Transition>
    </main>

    <FooterSection />
  </div>
</template>

<style scoped>
.fade-up-enter-active {
  transition: opacity 450ms ease, transform 450ms ease;
}

.fade-up-enter-from {
  opacity: 0;
  transform: translateY(14px);
}
</style>
