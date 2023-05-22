'use client'

import * as S from './styles'

export const Logo = ({ text = 'cap' }) => {
  return (
    <S.Wrapper>
      <span>{text}</span>
    </S.Wrapper>
  )
}
