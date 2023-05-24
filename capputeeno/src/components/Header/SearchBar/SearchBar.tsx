import { useFilter } from '@/contexts'
import { SearchIcon } from '../../Icons'
import * as S from './styles'

export const SearchBar = () => {
  const { setSearch } = useFilter()

  return (
    <S.Wrapper>
      <input
        type="text"
        name=""
        placeholder="Procurando por algo específico?"
        onChange={(event) => setSearch(event.target.value)}
      />
      <SearchIcon />
    </S.Wrapper>
  )
}
