/* eslint-disable camelcase */
import Image from 'next/image'
import { ProductDto } from '@/dtos'
import { priceFormatHelper } from '@/helpers'
import * as S from './styles'

export const ProductItem = ({
  image_url,
  name,
  price_in_cents,
}: ProductDto) => {
  return (
    <S.Wrapper>
      <Image src={image_url} alt={name} width={256} height={300} />

      <S.Details>
        <h3>{name}</h3>
        <hr />
        <p>{priceFormatHelper(price_in_cents)}</p>
      </S.Details>
    </S.Wrapper>
  )
}
