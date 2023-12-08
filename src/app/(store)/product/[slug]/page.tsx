import { getFeaturedProducts } from "@/service/get-featured-products";
import { getProduct } from "@/service/get-product";
import { Product } from "@/types/products";
import Image from "next/image";


export async function generateMetadata({ params }: { params: { slug: string } }) {
  const product = await getProduct(params.slug)

  return {
    title: product.title
  }
}

export async function generateStaticParams() {
  const products: Product[] = await getFeaturedProducts()

  return products.map((product) => {
    return { slug: product.slug }
  })
}

export default async function ProductPage({ params }: { params: { slug: string } }) {
  const product = await getProduct(params.slug)

  return (
    <main className="relative grid max-h-[860px] grid-cols-3">
      <div className="col-span-2 overflow-hidden">
        <Image
          src={product.image}
          width={1000}
          height={1000}
          alt={params.slug}
          quality={100}
        />
      </div>
      <div className="flex flex-col justify-center px-12">
        <h1 className="text-3xl font-bold leading-tight">{product.title}</h1>
        <p className="mt-2 leading-relaxed text-zinc-700 dark:text-zinc-400">
          {product.description}
        </p>

        <div className="mt-8 flex items-center gap-3">
          <span className="bg-green-500 inline-block px-5 py-2 font-semibold rounded-full text-white">
            {product.price.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            })}
          </span>
          <span className="text-sm text-zinc-700 dark:text-zinc-400">
            Em 12x s/ juros de  R$12,00
          </span>
        </div>

        <div className="mt-8 space-y-4">
          <span>Tamanhos</span>
          <button
            className="flex items-center justify-center rounded-full h-9 w-14 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200  dark:border-zinc-700 text-zinc-950 dark:text-white"
          >
            m
          </button>
        </div>

        <div className="mt-8 space-y-4">
          <span>Cores</span>
          <button
            className="flex items-center justify-center rounded-full h-9 w-14 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200  dark:border-zinc-700 text-zinc-950 dark:text-white"
          >
            preto
          </button>
        </div>
      </div>
    </main>
  )
}