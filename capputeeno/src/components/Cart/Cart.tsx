import { useLocalStorage } from '@/hooks'
import { CartIcon } from '../Icons'
import { Count } from './Count'
import * as S from './styles'

export const Cart = () => {
  const { getItems } = useLocalStorage()
  const items = getItems('items')

  return (
    <S.Wrapper>
      <CartIcon />
      {!!items.length && <Count total={items.length} />}
    </S.Wrapper>
  )
}
