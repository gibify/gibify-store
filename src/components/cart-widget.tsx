'use client'
import { useCart } from "@/contexts/cart-context";
import { ShoppingBag } from "lucide-react";

export function CartWidget() {
  const { items } = useCart();

  return (
    <div className="relative text-zinc-950 dark:text-zinc-50">
      <ShoppingBag className="w-5 h-5" />
      <span className="absolute -top-2 -right-2">
        {items.length ? items.length : null}
      </span>
    </div>
  )
}