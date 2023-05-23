import { create } from 'zustand'
import { FilterTypes } from '@/enums'
import { PriorityTypes } from '@/enums/priority.enum'

const defaultState = {
  search: '',
  type: FilterTypes.ALL,
  priority: PriorityTypes.POPULARITY,
  page: 0,

  setType: (type: FilterTypes) => {},
  setPriority: (priority: PriorityTypes) => {},
}

export const useFilter = create<typeof defaultState>((set) => ({
  ...defaultState,

  setType: (type) => set(() => ({ type })),
  setPriority: (priority) => set(() => ({ priority })),
}))
