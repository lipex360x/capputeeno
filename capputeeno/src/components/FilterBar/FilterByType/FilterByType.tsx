import { useFilter } from '@/contexts'
import { FilterTypes } from '@/enums'
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
        selected={type === FilterTypes.SHIRT}
        onClick={() => setType(FilterTypes.SHIRT)}
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
