import Link from "next/link";
import { Search, ShoppingBag, ShoppingCart } from 'lucide-react'
export function Header() {
  return (
    <header className="flex items-center justify-between gap-5">
      <div className="flex items-center gap-5 w-full">
        <Link href={'/'} className="text-2xl font-extrabold text-black dark:text-white hidden md:block">Gibify Store</Link>
        <form className="flex max-w-sm w-full items-center gap-3 rounded-full px-5 py-3 dark:bg-zinc-900 bg-zinc-100 ring-zinc-50 dark:ring-zinc-700 text-zinc-500">
          <Search className="w-5 h-5 " />
          <input type="text" placeholder="Buscar Produtos..." className="flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-500" />
        </form>
      </div>
      <div className="relative text-zinc-950 dark:text-zinc-50">
        <ShoppingBag className="w-5 h-5" />
        <span className="absolute -top-2 -right-2">1</span>
      </div>
    </header>
  )
}