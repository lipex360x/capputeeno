export const useLocalStorage = () => {
  const getItems = (key: string) => {
    const value = localStorage.getItem(key)
    return value ? JSON.parse(value) : ''
  }

  const setItems = (key: string, item: string | object) => {
    const value = typeof item === 'object' ? JSON.stringify(item) : item
    localStorage.setItem(key, value)
  }

  const removeItems = (key: string) => {
    localStorage.removeItem(key)
  }

  return { getItems, setItems, removeItems }
}
