import data from '@/json/data.json'


export async function GET() {
  const result = JSON.stringify(data.products)
  return new Response(result, { status: 200 })
}