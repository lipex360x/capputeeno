'use client'

import { Logo } from '../Logo'
import { SearchBar } from '../SearchBar'
import * as S from './styles'

export const Header = () => {
  return (
    <S.Wrapper>
      <Logo text="Capputeeno" />
      <SearchBar />
    </S.Wrapper>
  )
}
