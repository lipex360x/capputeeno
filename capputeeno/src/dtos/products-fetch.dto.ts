import { ProductDto } from './product.dto'

export interface ProductsFetchDto {
  data: {
    allProducts: ProductDto[]
  }
}
