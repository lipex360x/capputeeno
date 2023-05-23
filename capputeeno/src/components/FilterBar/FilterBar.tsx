'use client'

import { Container } from '../Container'
import { FilterByPriority } from './FilterByPriority'
import { FilterByType } from './FilterByType'
import * as S from './styles'

export const FilterBar = () => {
  return (
    <Container>
      <S.Wrapper>
        <FilterByType />
        <FilterByPriority />
      </S.Wrapper>
    </Container>
  )
}
