import { ProductsFetchDto } from '@/dtos'
import { FilterTypes } from '@/enums'
import { client } from '../client'

export const getProducts = async (
  type: FilterTypes,
): Promise<ProductsFetchDto> => {
  const fragment = `
    fragment productDetail on Product {
      id
      name
      price_in_cents
      image_url
      category
    }
  `

  const allProducts =
    fragment +
    `
      query ALLPRODUCTS {
        allProducts {
          ...productDetail
        }
      }
    `

  const productByCategory =
    fragment +
    `
    query PRODUCT_BY_CATEGORY {
      allProducts(filter: {category: "${type}"}) {
        ...productDetail
      }
    }
    `

  return client
    .post('/', { query: type ? productByCategory : allProducts })
    .then((response) => response.data)
}
