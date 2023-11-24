import Image from "next/image";
import Link from "next/link";
import { api } from "@/data/api";
import { Product } from "@/types/products";

async function getFeaturedProducts(): Promise<Product[]> {
  const response = await api('/products/featured', {
    cache: 'no-store'
    // next: {
    //   revalidate: 60 * 60, // 1 hora
    // }
  })
  return await response.json()

}

export default async function Home() {
  const [highlightedProduct, ...othersProducts] = await getFeaturedProducts()

  return (
    <main className="grid max-h-[860px] grid-cols-9 grid-rows-6 gap-6 mt-8 w-full">
      <Link
        href={`/product/${highlightedProduct.slug}`}
        className="group relative h-full md:col-span-6 md:row-span-6  rounded-lg flex items-end justify-center dark:bg-zinc-900 bg-zinc-100 overflow-hidden"
      >
        <Image
          src={highlightedProduct.image}
          width={920}
          height={920}
          quality={100}
          alt=""
          className="group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute bottom-20 right-20 h-12 flex items-center gap-2 max-w-xs rounded-full border-2 border-zinc-500 bg-zinc-950/60 p-1 pl-5">
          <span className="text-sm truncate text-white">{highlightedProduct.title}</span>
          <span className="flex h-full items-center justify-center rounded-full bg-green-500 px-4 font-semibold text-white">
            {highlightedProduct.price.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            })}
          </span>
        </div>
      </Link>

      {othersProducts.map((product) => {
        return (
          <Link
            key={product.id}
            href={`/product/${product.slug}`}
            className="group relative col-span-3 row-span-3 rounded-lg flex items-end justify-center dark:bg-zinc-900 bg-zinc-100 overflow-hidden"
          >
            <Image
              src={product.image}
              width={920}
              height={920}
              quality={100}
              alt=""
              className="group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-xs rounded-full border-2 border-zinc-500 bg-zinc-950/60 p-1 pl-5">
              <span className="text-sm truncate text-white">{product.title}</span>
              <span className="flex h-full items-center justify-center rounded-full bg-green-500 px-4 font-semibold text-white">
                {product.price.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                })}
              </span>
            </div>
          </Link>
        )
      })}
    </main>
  )
}
