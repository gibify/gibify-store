import React from "react"
import Image from "next/image"
import Link from "next/link"
import { searchProducts } from "@/service/search-products"
import { redirect } from "next/navigation"

export default async function SearcgPage({ searchParams }: { searchParams: { q: string } }) {
  console.log(searchParams.q)
  if (!searchParams.q)
  {
    redirect('/');
  }

  const products = await searchProducts(searchParams.q);

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm">
        Resultados para:  <span className="font-semibold">
          {searchParams.q}
        </span>
      </p>

      <div className="grid grid-cols-3 gap-6">
        {products.map((product) => {
          return (
            <Link
              key={product.id}
              href={`/product/`}
              className="group relative rounded-lg flex items-end justify-center dark:bg-zinc-900 bg-zinc-100 overflow-hidden"
            >
              <Image
                src={product.image}
                width={480}
                height={480}
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
      </div>
    </div>
  )
}