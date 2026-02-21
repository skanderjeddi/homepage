import { ref } from 'vue'

export type Locale = 'en' | 'fr'

const LOCALE_STORAGE_KEY = 'locale'

export const locale = ref<Locale>('en')

const isLocale = (value: string | null): value is Locale => value === 'en' || value === 'fr'

export const setLocale = (value: Locale) => {
  locale.value = value
  localStorage.setItem(LOCALE_STORAGE_KEY, value)
  document.documentElement.lang = value
}

export const toggleLocale = () => {
  setLocale(locale.value === 'en' ? 'fr' : 'en')
}

export const initLocale = () => {
  const storedLocale = localStorage.getItem(LOCALE_STORAGE_KEY)
  if (isLocale(storedLocale)) {
    setLocale(storedLocale)
    return
  }

  const browserLocale = navigator.language.toLowerCase().startsWith('fr') ? 'fr' : 'en'
  setLocale(browserLocale)
}
