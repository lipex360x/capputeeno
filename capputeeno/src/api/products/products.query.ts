import { ProductsFetchDto } from '@/dtos'
import { FilterTypes, SortOptionProps } from '@/constants'
import { client } from '../client'

export const productQuery = async (
  type: FilterTypes,
  priority: SortOptionProps,
): Promise<ProductsFetchDto> => {
  const fragment = `
    fragment productDetail on Product {
      id,
      created_at,
      name,
      price_in_cents,
      image_url,
      category,
      sales,
    }
  `

  const allProducts =
    fragment +
    `
      query ALLPRODUCTS {
        allProducts(sortField: "${priority.sortField}", sortOrder:"${priority.sortOrder}") {
          ...productDetail
        }
      }
    `

  const productByCategory =
    fragment +
    `
    query PRODUCT_BY_CATEGORY {
      allProducts(filter: {category: "${type}"}, sortField: "${priority.sortField}", sortOrder:"${priority.sortOrder}") {
        ...productDetail
      }
    }
    `

  return client
    .post('/', { query: type ? productByCategory : allProducts })
    .then((response) => response.data)
}
