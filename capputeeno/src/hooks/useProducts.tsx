import { useDeferredValue } from 'react'
import { productQuery } from '@/api/products'
import { useFilter } from '@/contexts'
import { useQuery } from '@tanstack/react-query'

export function useProducts() {
  const { search, type, priority } = useFilter()

  const searchDeferred = useDeferredValue(search)

  const { data } = useQuery({
    queryFn: () => productQuery(type, priority),
    queryKey: ['products', type, priority],
  })

  const products = data?.data.allProducts
  const filteredProducts = products?.filter((product) =>
    product.name
      .toLocaleLowerCase()
      .includes(searchDeferred.toLocaleLowerCase()),
  )

  return { data: filteredProducts }
}
