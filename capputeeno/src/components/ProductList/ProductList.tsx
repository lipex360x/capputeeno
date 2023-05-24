'use client'

import { useProducts } from '@/hooks'
import * as S from './styles'

export const ProductList = () => {
  const { data } = useProducts()
  console.log(data)

  return (
    <S.Wrapper>
      <span>Hello ProductList</span>
    </S.Wrapper>
  )
}
