'use client'

import { FilterBar } from '@/components/FilterBar'
import { ProductList } from '@/components/ProductList'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

export default function Home() {
  const client = new QueryClient()
  return (
    <QueryClientProvider client={client}>
      <main className="html-main">
        <FilterBar />
        <ProductList />
      </main>
    </QueryClientProvider>
  )
}
