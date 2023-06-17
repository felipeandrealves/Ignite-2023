import { ReactNode, createContext, useContext, useState } from 'react'

import { coffees } from '../data/coffees.json'

export type Coffee = (typeof coffees)[0]

type CoffeeCart = Coffee & { amount: number }

interface CoffeeContextData {
  availableCoffees: Coffee[]
  coffeeCart: CoffeeCart[]
  addCoffeeToCart: (coffee: CoffeeCart) => void
}

export const CoffeeContext = createContext({} as CoffeeContextData)

interface CoffeeContextProviderProps {
  children: ReactNode
}

export const CoffeeContextProvider = ({
  children,
}: CoffeeContextProviderProps) => {
  const [availableCoffees] = useState<typeof coffees>(coffees)
  const [coffeeCart, setCoffeeCart] = useState<CoffeeCart[]>([])

  const addCoffeeToCart = (coffee: CoffeeCart) => {
    const coffeeAlreadyExists = coffeeCart.find((item) => item.id === coffee.id)

    if (coffeeAlreadyExists) {
      setCoffeeCart(
        coffeeCart.map((item) =>
          item.id === coffee.id ? { ...coffee, amount: item.amount } : item,
        ),
      )
    } else {
      setCoffeeCart([...coffeeCart, { ...coffee }])
    }
  }

  return (
    <CoffeeContext.Provider
      value={{ availableCoffees, coffeeCart, addCoffeeToCart }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}

export const useCoffeeContext = () => useContext(CoffeeContext)
