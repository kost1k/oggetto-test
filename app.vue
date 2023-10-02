<script setup lang="ts">
import type { DadataSuggestion } from '~/types/dadata'

const { center, controls, options } = useMapSettings()
const coordinates = ref([])
const addressData = ref({})
const suggestions = ref<DadataSuggestion[]>([])
const query = ref('')
const error = ref('')

async function getDadataSuggestions(query: string) {
  suggestions.value = await useDadataSuggestions(query)
}

async function onSuggestionSelect(suggestion: DadataSuggestion) {
  const coords = await getCoords(suggestion.value)
  if (coords) {
    query.value = suggestion.value
    coordinates.value = coords
    setAddressData(suggestion, coords)
  }
}
async function onMapClick(e: ymaps.MapEvent) {
  const coords = e.get('coords')
  coordinates.value = coords
  const address = await getAddress(coords)
  suggestions.value = await useDadataSuggestions(address, 1)

  if (suggestions.value.length) {
    query.value = suggestions.value[0].value
    setAddressData(suggestions.value[0], coords)
  }
  else {
    query.value = ''
    error.value = 'Не удалось определить адрес, попробуйте ввести его в поле выше'
  }
}

async function getAddress(coords: number[]) {
  const result = await ymaps.geocode(coords)
  const firstGeoObject = result.geoObjects.get(0) as ymaps.GeocodeResult
  return firstGeoObject.getAddressLine()
}

async function getCoords(address: string) {
  const result = await ymaps.geocode(address, {
    results: 1,
  })
  const firstGeoObject = result.geoObjects.get(0)
  return firstGeoObject.geometry?.getCoordinates()
}

function setAddressData(suggestion: DadataSuggestion, coords: number[]) {
  if (!suggestion.data.house)
    error.value = 'Пожалуйста укажите адрес с точностью до дома'
  else
    error.value = ''

  addressData.value = {
    city: suggestion.data.city,
    street: suggestion.data.street,
    house: suggestion.data.house,
    latitude: coords[0],
    longitude: coords[1],
  }
}
</script>

<template>
  <div class="flex h-screen">
    <div class="w-1/4 shrink-0 p-10">
      <Autocomplete :value="query" placeholder="Начните вводить адрес" :debounce="500" :suggestions="suggestions" @input="getDadataSuggestions" @select="onSuggestionSelect" />

      <div v-if="error" class="mt-1 text-sm text-red-600">
        {{ error }}
      </div>
      <div v-else-if="Object.entries(addressData).length" class="mt-2 overflow-x-auto bg-gray-100 p-4">
        <code class="whitespace-pre">
          {{ addressData }}
        </code>
      </div>
    </div>

    <div class="flex-auto">
      <ClientOnly>
        <YandexMap :coordinates="coordinates.length ? coordinates : center" :controls="controls" :options="options" @click="onMapClick">
          <YandexMarker v-if="coordinates.length" :coordinates="coordinates" :marker-id="1" />
        </YandexMap>
      </ClientOnly>
    </div>
  </div>
</template>

<style>
.yandex-container {
  height: 100%;
}
</style>
