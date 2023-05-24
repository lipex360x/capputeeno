import { productQuery } from '@/api/products'
import { useFilter } from '@/contexts'
import { useQuery } from '@tanstack/react-query'

export function useProducts() {
  const { type, priority } = useFilter()

  const { data } = useQuery({
    queryFn: () => productQuery(type, priority),
    queryKey: ['products', type, priority],
  })

  return { data: data?.data.allProducts }
}
