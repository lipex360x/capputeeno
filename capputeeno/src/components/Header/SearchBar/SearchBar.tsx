import { SearchIcon } from '../../Icons'
import * as S from './styles'

export const SearchBar = () => {
  return (
    <S.Wrapper>
      <input
        type="text"
        name=""
        placeholder="Procurando por algo específico?"
      />
      <SearchIcon />
    </S.Wrapper>
  )
}
