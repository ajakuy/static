// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  site: {
    url: process.env.BASE_URL,
  },
  modules: [
    '@unocss/nuxt',
    'nuxt-og-image',
  ],
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      imagekit_base_url: process.env.IMAGEKIT_BASE_URL,
      base_url: process.env.BASE_URL,
      main_base_url: process.env.MAIN_BASE_URL,
      api_base_url: process.env.API_BASE_URL,
      prismic_base_url: process.env.PRISMIC_BASE_URL,
    }
  },
})
