import plugin from 'vue-yandex-maps'

export default defineNuxtPlugin((nuxtApp) => {
  const { settings } = useMapSettings()
  nuxtApp.vueApp.use(plugin, settings)
})
