import { Product } from "@/types/products"
import { api } from "./api"

export async function getFeaturedProducts(): Promise<Product[]> {
  const response = await api('/products/featured', {
    cache: 'no-store'
    // next: {
    //   revalidate: 60 * 60, // 1 hora
    // }
  })
  if (!response.ok)
  {
    throw new Error('Failed to load featured products.')
  }
  return await response.json()

}