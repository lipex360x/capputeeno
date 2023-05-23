'use client'

import { Container } from '../Container'
import { FilterByType } from './FilterByType'
import * as S from './styles'

export const FilterBar = () => {
  return (
    <Container>
      <S.Wrapper>
        <FilterByType />
      </S.Wrapper>
    </Container>
  )
}
