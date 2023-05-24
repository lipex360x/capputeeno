import { getProducts } from '@/api/products'
import { useQuery } from '@tanstack/react-query'

export function useProducts() {
  const { data } = useQuery({
    queryFn: getProducts,
    queryKey: ['products'],
  })

  return { data: data?.data.allProducts }
}
