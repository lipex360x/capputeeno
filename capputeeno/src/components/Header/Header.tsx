'use client'

import { Cart } from '../Cart'
import { Logo } from '../Logo'
import { SearchBar } from '../SearchBar'
import * as S from './styles'

export const Header = () => {
  return (
    <S.Wrapper>
      <Logo text="Capputeeno" />

      <div>
        <SearchBar />
        <Cart />
      </div>
    </S.Wrapper>
  )
}
