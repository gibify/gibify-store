import { Product } from "@/types/products"
import { api } from "./api"

export async function getProduct(slug: string): Promise<Product> {
  const response = await api(`/products/${slug}`)
  return await response.json()
}