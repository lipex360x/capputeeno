import { create } from 'zustand'
import { FilterTypes, SortOptionProps } from '@/enums'

const defaultState = {
  type: FilterTypes.ALL,
  priority: { sortField: 'created_at', sortOrder: 'DESC' },
  page: 0,

  setType: (type: FilterTypes) => {},
  setPriority: (priority: SortOptionProps) => {},
}

export const useFilter = create<typeof defaultState>((set) => ({
  ...defaultState,

  setType: (type) => set(() => ({ type })),
  setPriority: (priority) => set(() => ({ priority })),
}))
