import { useState } from 'react'
import { ArrowIcon } from '@/components/Icons'
import { useFilter } from '@/contexts'
import { PriorityTypes } from '@/enums/priority.enum'
import * as S from './styles'

export const FilterByPriority = () => {
  const [isOpen, setIsOpen] = useState(true)
  const { setPriority } = useFilter()

  return (
    <S.Wrapper>
      <S.SearchField isOpen={isOpen} onClick={() => setIsOpen((prev) => !prev)}>
        Organizar por <ArrowIcon />
        {isOpen && (
          <S.PriorityOptions>
            <li onClick={() => setPriority(PriorityTypes.NEWS)}>Novidades</li>
            <li onClick={() => setPriority(PriorityTypes.BIGGEST_PRICE)}>
              Preço: Maior - Menor
            </li>
            <li onClick={() => setPriority(PriorityTypes.LOWEST_PRICE)}>
              Preço: Menor - Maior
            </li>
            <li onClick={() => setPriority(PriorityTypes.POPULARITY)}>
              Mais Vendidos
            </li>
          </S.PriorityOptions>
        )}
      </S.SearchField>
    </S.Wrapper>
  )
}
