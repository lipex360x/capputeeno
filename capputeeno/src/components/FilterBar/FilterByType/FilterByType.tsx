import { FilterTypes } from '@/constants'
import { useFilter } from '@/contexts'
import * as S from './styles'

export const FilterByType = () => {
  const { type, setType } = useFilter()

  return (
    <S.Wrapper>
      <S.Item
        selected={type === FilterTypes.ALL}
        onClick={() => setType(FilterTypes.ALL)}
      >
        Todos os produtos
      </S.Item>
      <S.Item
        selected={type === FilterTypes.TSHIRT}
        onClick={() => setType(FilterTypes.TSHIRT)}
      >
        camisetas
      </S.Item>
      <S.Item
        selected={type === FilterTypes.MUG}
        onClick={() => setType(FilterTypes.MUG)}
      >
        canecas
      </S.Item>
    </S.Wrapper>
  )
}
