import type ymaps from 'yandex-maps'

export function useMapSettings() {
  const config = useRuntimeConfig()
  const settings = {
    apiKey: config.public.YMAPS_API_KEY, // Индивидуальный ключ API
    lang: 'ru_RU', // Используемый язык
    coordorder: 'latlong', // Порядок задания географических координат
    debug: false, // Режим отладки
    version: '2.1', // Версия Я.Карт
  }
  const center: number[] = [55.7522, 37.6156]
  const controls: string[] = []
  const options: ymaps.IMapOptions = {
    suppressMapOpenBlock: true,
    yandexMapDisablePoiInteractivity: true,
  }

  return { settings, center, controls, options }
}
