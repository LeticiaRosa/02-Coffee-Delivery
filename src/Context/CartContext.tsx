import { ReactNode, createContext, useContext, useState } from 'react'
type CoffeeListType = {
  idCoffeeCart: string
  qtdCoffeCart: number
}

interface CartContextType {
  coffeeListType: CoffeeListType[]
  addToCart: (item: CoffeeListType) => void
  removeToCart: (id: CoffeeListType) => void
}
const CartContext = createContext<CartContextType>({} as CartContextType)

export function CartContextProvider({ children }: { children: ReactNode }) {
  const [coffeeListType, setCoffeeListType] = useState<CoffeeListType[]>([])

  function addToCart(item: CoffeeListType) {
    const itemCart = {
      idCoffeeCart: item.idCoffeeCart,
      qtdCoffeCart: item.qtdCoffeCart,
    }

    setCoffeeListType((prev) => [...prev, itemCart])
  }
  function removeToCart(id: CoffeeListType) {
    console.log(id)
  }
  return (
    <CartContext.Provider value={{ addToCart, removeToCart, coffeeListType }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  return context
}
