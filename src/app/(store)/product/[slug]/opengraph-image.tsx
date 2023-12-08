/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import { ImageResponse } from 'next/og'
import { getProduct } from '@/service/get-product'
import colors from 'tailwindcss/colors'

export const runtime = 'edge'

export const alt = 'Gibify Store'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function OGImage({ params }: { params: { slug: string } }) {
  const product = await getProduct(params.slug);
  const productImageUrl = new URL(product.image, 'http://localhost:3000').toString();

  return new ImageResponse(
    (
      <div
        style={{
          backgroundColor: colors.zinc[950],
          width: '100%',
          height: '100%',
          display: 'flex',
          color: '#FFF'
        }}
      >
        <img
          src={productImageUrl}
          alt={product.title}
          style={{ width: '100%' }}
        />
      </div>
    ),
    {
      ...size,
    }
  )
}