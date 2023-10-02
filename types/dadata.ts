export type CapitalMarkerType = '0' | '1' | '2' | '3' | '4'
export type QCGeoType = '0' | '1' | '2' | '3' | '4' | '5'

export interface DadataAddress {
  area: string | null
  area_fias_id: string | null
  area_kladr_id: string | null
  area_type: string | null
  area_type_full: string | null
  area_with_type: string | null
  beltway_distance: string | null
  beltway_hit: string | null
  block: string | null
  block_type: string | null
  block_type_full: string | null
  capital_marker: CapitalMarkerType
  city: string | null
  city_area: string | null
  city_district: string | null
  city_district_fias_id: string | null
  city_district_kladr_id: string | null
  city_district_type: string | null
  city_district_type_full: string | null
  city_district_with_type: string | null
  city_fias_id: string | null
  city_kladr_id: string | null
  city_type: string | null
  city_type_full: string | null
  city_with_type: string | null
  country: string | null
  fias_id: string | null
  fias_level: string | null
  flat: string | null
  flat_area: string | null
  flat_price: string | null
  flat_type: string | null
  flat_type_full: string | null
  geo_lat: string | null
  geo_lon: string | null
  history_values: string[] | null
  house: string | null
  house_fias_id: string | null
  house_kladr_id: string | null
  house_type: string | null
  house_type_full: string | null
  kladr_id: string | null
  okato: string | null
  oktmo: string | null
  postal_box: string | null
  postal_code: string | null
  qc: string | null
  qc_complete: string | null
  qc_geo: QCGeoType
  qc_house: string | null
  region: string | null
  region_fias_id: string | null
  region_kladr_id: string | null
  region_type: string | null
  region_type_full: string | null
  region_with_type: string | null
  settlement: string | null
  settlement_fias_id: string | null
  settlement_kladr_id: string | null
  settlement_type: string | null
  settlement_type_full: string | null
  settlement_with_type: string | null
  source: string | null
  square_meter_price: string | null
  street: string | null
  street_fias_id: string | null
  street_kladr_id: string | null
  street_type: string | null
  street_type_full: string | null
  street_with_type: string | null
  tax_office: string | null
  tax_office_legal: string | null
  timezone: string | null
  unparsed_parts: string | null
}

export interface DadataSuggestion {
  value: string
  unrestricted_value: string
  data: DadataAddress
}
