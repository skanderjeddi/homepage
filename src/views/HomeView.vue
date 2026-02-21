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
    <NavBar />

    <main class="mx-auto max-w-6xl px-4 pb-20 pt-24 sm:px-6 lg:px-8">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <CVSection />
      <ContactSection />
    </main>

    <FooterSection />
  </div>
</template>
