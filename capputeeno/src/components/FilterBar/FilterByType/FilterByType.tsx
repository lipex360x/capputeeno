import { useFilter } from '@/contexts'
import { FilterType } from '@/enums'
import * as S from './styles'

export const FilterByType = () => {
  const { type, setType } = useFilter()

  return (
    <S.Wrapper>
      <S.Item
        selected={type === FilterType.ALL}
        onClick={() => setType(FilterType.ALL)}
      >
        Todos os produtos
      </S.Item>
      <S.Item
        selected={type === FilterType.SHIRT}
        onClick={() => setType(FilterType.SHIRT)}
      >
        camisetas
      </S.Item>
      <S.Item
        selected={type === FilterType.MUG}
        onClick={() => setType(FilterType.MUG)}
      >
        canecas
      </S.Item>
    </S.Wrapper>
  )
}
