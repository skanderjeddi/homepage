<script setup lang="ts">
import { RouterView } from 'vue-router'
import { watchEffect } from 'vue'
import { locale } from '@/stores/locale'
import { i18n } from '@/data/i18n.js'

watchEffect(() => {
  const copy = i18n[locale.value]
  if (!copy) return

  document.title = copy.meta.title

  const descriptionMeta = document.querySelector('meta[name="description"]')
  if (descriptionMeta) {
    descriptionMeta.setAttribute('content', copy.meta.description)
  }

  const ogTitleMeta = document.querySelector('meta[property="og:title"]')
  if (ogTitleMeta) {
    ogTitleMeta.setAttribute('content', copy.meta.title)
  }

  const ogDescriptionMeta = document.querySelector('meta[property="og:description"]')
  if (ogDescriptionMeta) {
    ogDescriptionMeta.setAttribute('content', copy.meta.ogDescription)
  }
})
</script>

<template>
  <RouterView />
</template>
