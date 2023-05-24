import { ProductsFetchDto } from '@/dtos'
import { client } from '../client'

export const getProducts = async (): Promise<ProductsFetchDto> => {
  const query = `
    query {
      allProducts {
        id,
        name,
        price_in_cents,
        image_url
      }
    }
  `

  return client.post('/', { query }).then((response) => response.data)
}
