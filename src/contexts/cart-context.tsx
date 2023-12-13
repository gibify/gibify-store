'use client'
import { tmpdir } from "os";
import { ReactNode, createContext, useContext, useState } from "react";

interface ItemsProps {
  productId: number;
  quntity: number;
}

interface CartContext {
  items: ItemsProps[];
  addToCart: (productId: number) => void;
}

const CartContext = createContext({} as CartContext)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<ItemsProps[]>([]);

  function addToCart(productId: number) {
    setCartItems((prevState) => {
      const productInCart = prevState.some((item) => item.productId === productId);

      if (productInCart)
      {
        return prevState.map((item) => {
          if (item.productId === productId)
          {
            return { ...item, quntity: item.quntity + 1 }
          } else
          {
            return item;
          }
        })
      } else
      {
        return [...prevState, { productId, quntity: 1 }]
      }

    })
  }

  return (
    <CartContext.Provider value={{ items: cartItems, addToCart }}>
      {children}
    </CartContext.Provider >
  )
}

export const useCart = () => useContext(CartContext); 