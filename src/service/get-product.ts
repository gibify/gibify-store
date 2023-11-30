import { Product } from "@/types/products"
import { api } from "./api"

export async function getProduct(slug: string): Promise<Product> {
  const response = await api(`/products/${slug}`)
  if (!response.ok)
  {
    throw new Error('Failed to load product.')
  }
  return await response.json()
}