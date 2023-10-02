import type { DadataSuggestion } from '~/types/dadata'

interface DadataResponse {
  suggestions: DadataSuggestion[]
}

export async function useDadataSuggestions(query: string, count?: number): Promise<DadataSuggestion[] | []> {
  const config = useRuntimeConfig()
  const url = 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address'
  const token = config.public.DADATA_API_KEY

  const { data } = await useFetch<DadataResponse>(url, {
    method: 'POST',
    body: { query, count: count ?? 10 },
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Token ${token}`,
    },
  })

  return data.value ? data.value.suggestions : []
}
