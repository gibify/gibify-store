import data from '@/json/data.json'
import { json } from 'stream/consumers'
import { z } from 'zod'

export async function GET(
  _: Request,
  { params }: { params: { slug: string } }
) {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  const slug = z.string().parse(params.slug)
  const product = data.products.find((product) => product.slug === slug)
  const result = JSON.stringify(product)
  if (!product)
  {

    return new Response('Product not Found', { status: 400 })
  }

  return new Response(result)
}