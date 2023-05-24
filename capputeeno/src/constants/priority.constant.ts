export interface SortOptionProps {
  sortField: string
  sortOrder: string
}

export interface PriorityTypesProps {
  POPULARITY: SortOptionProps
  NEWS: SortOptionProps
  LOWEST_PRICE: SortOptionProps
  BIGGEST_PRICE: SortOptionProps
}

export const PriorityTypes: PriorityTypesProps = {
  POPULARITY: { sortField: 'sales', sortOrder: 'DESC' },
  NEWS: { sortField: 'created_at', sortOrder: 'DESC' },
  LOWEST_PRICE: { sortField: 'price_in_cents', sortOrder: 'ASC' },
  BIGGEST_PRICE: { sortField: 'price_in_cents', sortOrder: 'DESC' },
}
