'use client'

import * as S from './styles'

interface LogoProps {
  text: string
}

export const Logo = ({ text }: LogoProps) => {
  return (
    <S.Wrapper>
      <span>{text}</span>
    </S.Wrapper>
  )
}
