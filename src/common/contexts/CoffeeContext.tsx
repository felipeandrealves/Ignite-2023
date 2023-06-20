import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'

import { coffees } from '../data/coffees.json'

export type Coffee = (typeof coffees)[0]

export type CoffeeCart = Coffee & { amount: number }

interface CoffeeContextData {
  availableCoffees: Coffee[]
  coffeeCart: CoffeeCart[]
  totalCartValue: number
  addCoffeeToCart: (coffee: CoffeeCart) => void
  removeCoffeeFromCart: (coffeeId: string) => void
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
  const [totalCartValue, setTotalCartValue] = useState(0)

  const addCoffeeToCart = (coffee: CoffeeCart) => {
    const coffeeAlreadyExists = coffeeCart.find((item) => item.id === coffee.id)

    if (coffeeAlreadyExists) {
      setCoffeeCart(
        coffeeCart.map((item) =>
          item.id === coffee.id ? { ...coffee, amount: item.amount } : item,
        ),
      )
    } else setCoffeeCart([...coffeeCart, { ...coffee }])
  }

  const removeCoffeeFromCart = (coffeeId: string) => {
    const coffeeAlreadyExists = coffeeCart.find((item) => item.id === coffeeId)

    if (coffeeAlreadyExists) {
      setCoffeeCart(coffeeCart.filter((item) => item.id !== coffeeId))
    }
  }

  useEffect(() => {
    if (coffeeCart.length !== 0) {
      const totalAmount = coffeeCart.reduce((acc, item) => {
        return acc + item.amount * item.price
      }, 0)

      setTotalCartValue(totalAmount)
    }

    const jsonCoffeeCart = JSON.stringify(coffeeCart)

    localStorage.setItem(
      '@ignite-coffeeDelivery:coffee-cart-state-1.0.0',
      jsonCoffeeCart,
    )
  }, [coffeeCart])

  return (
    <CoffeeContext.Provider
      value={{
        availableCoffees,
        coffeeCart,
        addCoffeeToCart,
        totalCartValue,
        removeCoffeeFromCart,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}

export const useCoffeeContext = () => useContext(CoffeeContext)
