import { Product } from "@/types/products"
import { api } from "./api"

export async function searchProducts(query: string): Promise<Product[]> {
  const response = await api(`/products/search?q=${query}`)
  return await response.json()
}