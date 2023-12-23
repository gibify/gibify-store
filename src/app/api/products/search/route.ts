import data from '@/json/data.json'
import type { NextRequest } from 'next/server'
import { z } from 'zod'

export async function GET(request: NextRequest) {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  const { searchParams } = request.nextUrl
  const query = z.string().parse(searchParams.get('q'))

  const products = data.products.filter((product) => {
    return product.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())
  })


  if (!products.length)
  {

    return new Response('Product not Found', { status: 400 })
  }

  const result = JSON.stringify(products)
  return new Response(result, { status: 200 })
}