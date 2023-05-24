'use client'

import { Container } from '../Container'
import { Cart } from './Cart'
import { Logo } from './Logo'
import { SearchBar } from './SearchBar'
import * as S from './styles'

export const Header = () => {
  return (
    <Container>
      <S.Wrapper>
        <Logo text="Capputeeno" />

        <div>
          <SearchBar />
          <Cart />
        </div>
      </S.Wrapper>
    </Container>
  )
}
