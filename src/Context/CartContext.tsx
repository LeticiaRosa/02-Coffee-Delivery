import { ReactNode, createContext, useContext, useState } from 'react'
type CoffeeListType = {
  idCoffeeCart: string
  qtdCoffeCart: number
}

interface CartContextType {
  coffeeListType: CoffeeListType[]
  addToCart: (item: CoffeeListType) => void
  removeToCart: (id: string) => void
  updatedToCart: (id: CoffeeListType) => void
}
const CartContext = createContext<CartContextType>({} as CartContextType)

export function CartContextProvider({ children }: { children: ReactNode }) {
  const [coffeeListType, setCoffeeListType] = useState<CoffeeListType[]>([])

  function returnIndex(id: string) {
    return coffeeListType.findIndex((element) => element.idCoffeeCart === id)
  }

  function addToCart(item: CoffeeListType) {
    setCoffeeListType((prevCoffeeListType) => {
      const foundIndex = returnIndex(item.idCoffeeCart)
      let itemCart = {
        idCoffeeCart: item.idCoffeeCart,
        qtdCoffeCart: item.qtdCoffeCart,
      }
      if (foundIndex < 0) {
        return [...prevCoffeeListType, itemCart]
      } else {
        const foundQtd = coffeeListType.find(
          (element) => element.idCoffeeCart === item.idCoffeeCart,
        )
        itemCart = {
          idCoffeeCart: item.idCoffeeCart,
          qtdCoffeCart:
            item.qtdCoffeCart + (foundQtd ? foundQtd.qtdCoffeCart : 0),
        }
        const arrayOld = [...prevCoffeeListType]
        arrayOld.splice(foundIndex, 1, itemCart)
        return arrayOld
      }
    })
  }
  function updatedToCart(item: CoffeeListType) {
    setCoffeeListType((prevCoffeeListType) => {
      const foundIndex = returnIndex(item.idCoffeeCart)
      if (foundIndex >= 0) {
        const itemCart = {
          idCoffeeCart: item.idCoffeeCart,
          qtdCoffeCart: item.qtdCoffeCart,
        }
        const arrayOld = [...prevCoffeeListType]
        arrayOld.splice(foundIndex, 1, itemCart)
        return arrayOld
      }
      return prevCoffeeListType
    })
  }

  function removeToCart(id: string) {
    const foundIndex = returnIndex(id)
    if (foundIndex >= 0) {
      const arrayAtualizado = coffeeListType.filter(
        (state) => state.idCoffeeCart !== id,
      )
      setCoffeeListType(arrayAtualizado)
    }
  }

  return (
    <CartContext.Provider
      value={{
        addToCart,
        updatedToCart,
        removeToCart,
        coffeeListType,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  return context
}
