import { Header } from "@/components/header"
import { CartProvider } from '@/contexts/cart-context'
export default function StoreLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <CartProvider>
      <div className="mx-auto grid min-h-screen w-full max-w-7xl grid-rows-[min-content_max-content] gap-5 p-5">
        <Header />
        {children}
      </div>
    </CartProvider>
  )
}