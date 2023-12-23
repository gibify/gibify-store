import data from '@/json/data.json'

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  const featuredProducts = data.products.filter((product) => product.featured)
  const result = JSON.stringify(featuredProducts)
  return new Response(result)
}