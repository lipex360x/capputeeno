import * as S from './styles'

interface CountProps {
  total: number
}

export const Count = ({ total }: CountProps) => {
  return (
    <S.Wrapper>
      <span>{total}</span>
    </S.Wrapper>
  )
}
