import Link from "next/link";
import { CartWidget } from "./cart-widget";
import { SearchForm } from "./search-form";
import { Suspense } from "react";
export function Header() {
  return (
    <header className="flex items-center justify-between gap-5">
      <div className="flex items-center gap-5 w-full">
        <Link href={'/'} className="text-2xl font-extrabold text-black dark:text-white hidden md:block">Gibify Store</Link>
        <Suspense fallback={null}>
          <SearchForm />
        </Suspense>
      </div>
      <CartWidget />
    </header>
  )
}