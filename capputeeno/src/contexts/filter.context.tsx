import { create } from 'zustand'
import { FilterTypes, SortOptionProps, PriorityTypes } from '@/constants'

const defaultState = {
  search: '',
  type: FilterTypes.ALL,
  priority: PriorityTypes.NEWS,

  setSearch: (search: string) => {},
  setType: (type: string) => {},
  setPriority: (priority: SortOptionProps) => {},
}

export const useFilter = create<typeof defaultState>((set) => ({
  ...defaultState,

  setSearch: (search) => set(() => ({ search })),
  setType: (type) => set(() => ({ type })),
  setPriority: (priority) => set(() => ({ priority })),
}))
