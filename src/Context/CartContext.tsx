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
    const foundIndex = coffeeListType.findIndex(
      (element) => element.idCoffeeCart === item.idCoffeeCart,
    )
    let itemCart = {
      idCoffeeCart: item.idCoffeeCart,
      qtdCoffeCart: item.qtdCoffeCart,
    }
    if (foundIndex < 0) {
      setCoffeeListType((prev) => [...prev, itemCart])
    } else {
      const foundQtd = coffeeListType.find(
        (element) => element.idCoffeeCart === item.idCoffeeCart,
      )
      itemCart = {
        idCoffeeCart: item.idCoffeeCart,
        qtdCoffeCart:
          item.qtdCoffeCart + (foundQtd ? foundQtd?.qtdCoffeCart : 0),
      }
      const arrayOld = coffeeListType
      arrayOld.splice(foundIndex, 1, itemCart)
      setCoffeeListType(arrayOld)
    }
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
