import data from '@/json/data.json'


export async function GET() {
  return Response.json(data.products)
}