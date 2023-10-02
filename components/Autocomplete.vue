<script setup lang="ts">
interface Props {
  suggestions: any[]
  value: string
  placeholder?: string
  debounce?: number
}

const props = withDefaults(defineProps<Props>(), {
  debounce: 0,
})

const emits = defineEmits(['input', 'focus', 'blur', 'select'])

const query = ref('')
const focusIndex = ref(-1)
const showResults = ref(false)
const shouldShowResults = computed(() => showResults.value && props.suggestions.length)

const onInput = useDebounceFn(async (e) => {
  emits('input', e.target.value)
  showResults.value = true
}, props.debounce)

function onFocus() {
  emits('focus')
  showResults.value = true
}

function onBlur() {
  emits('blur')
  hideResults()
}

function onUp() {
  if (focusIndex.value > 0)
    focusIndex.value--
}
function onDown() {
  if (focusIndex.value < props.suggestions.length - 1)
    focusIndex.value++
}

function onEnter() {
  if (focusIndex.value === -1)
    onSelect(props.suggestions[0])
  else
    onSelect(props.suggestions[focusIndex.value])
}

function onSelect(suggestion: any) {
  emits('select', suggestion)
  query.value = suggestion.value
  hideResults()
}

function hideResults() {
  showResults.value = false
  focusIndex.value = -1
}

watch(() => props.value, (newValue) => {
  query.value = newValue
})
</script>

<template>
  <div class="relative">
    <input
      v-model="query"
      type="text"
      placeholder="Начните вводить адрес"
      class="w-full border border-gray-300 p-2 text-sm outline-0"
      @input="onInput"
      @focus="onFocus"
      @blur="onBlur"
      @keydown.prevent.up="onUp"
      @keydown.prevent.down="onDown"
      @keydown.prevent.enter="onEnter"
    >

    <ul
      v-if="shouldShowResults"
      class="absolute top-full z-10 mt-1 w-full border border-gray-300 bg-white text-sm"
    >
      <li
        v-for="(suggestion, index) in suggestions"
        :key="suggestion.value"
        class="cursor-pointer p-2 transition-colors duration-300 hover:bg-gray-100"
        :class="{ 'bg-gray-100': focusIndex === index }"
        @click="onSelect(suggestion)"
        @mousedown.prevent
      >
        {{ suggestion.value }}
      </li>
    </ul>
  </div>
</template>
