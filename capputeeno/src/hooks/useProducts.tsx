import { getProducts } from '@/api/products'
import { useFilter } from '@/contexts'
import { useQuery } from '@tanstack/react-query'

export function useProducts() {
  const { type } = useFilter()

  const { data } = useQuery({
    queryFn: () => getProducts(type),
    queryKey: ['products', type],
  })

  return { data: data?.data.allProducts }
}
