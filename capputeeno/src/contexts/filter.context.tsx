import { create } from 'zustand'
import { FilterType } from '@/enums'

const defaultState = {
  search: '',
  type: FilterType.ALL,
  page: 0,

  setType: (value: FilterType) => {},
}

export const useFilter = create<typeof defaultState>((set) => ({
  ...defaultState,
  setType: (value) => set(() => ({ type: value })),
}))
