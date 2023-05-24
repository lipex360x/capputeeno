'use client'

import { useProducts } from '@/hooks'
import { Container } from '../Container'
import { ProductItem } from './ProductItem'
import * as S from './styles'

export const ProductList = () => {
  const { data } = useProducts()
  console.log(data)

  return (
    <Container>
      <S.Wrapper>
        {data?.map((product) => (
          <ProductItem key={product.id} {...product} />
        ))}
      </S.Wrapper>
    </Container>
  )
}
