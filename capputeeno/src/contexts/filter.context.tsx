import { create } from 'zustand'
import { FilterTypes, SortOptionProps } from '@/enums'

const defaultState = {
  search: '',
  type: FilterTypes.ALL,
  priority: { sortField: 'created_at', sortOrder: 'DESC' },

  setSearch: (search: string) => {},
  setType: (type: FilterTypes) => {},
  setPriority: (priority: SortOptionProps) => {},
}

export const useFilter = create<typeof defaultState>((set) => ({
  ...defaultState,

  setSearch: (search) => set(() => ({ search })),
  setType: (type) => set(() => ({ type })),
  setPriority: (priority) => set(() => ({ priority })),
}))
