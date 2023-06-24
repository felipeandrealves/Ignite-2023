import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react'

import {
  addCoffeeToCartAction,
  changeCoffeeAmountAction,
  removeCoffeeAction,
} from '../reducers/coffees/action'
import { Coffee, CoffeeData, coffeeReducer } from '../reducers/coffees/reducer'
import { coffees } from '../data/coffees.json'

interface CoffeeContextData {
  availableCoffees: CoffeeData[]
  coffeeCart: Coffee[]
  totalCartValue: number
  addCoffeeToCart: (coffee: Coffee) => void
  removeCoffeeFromCart: (coffeeId: string) => void
  changeCoffeeAmount: (coffeeId: string, amount: number) => void
}

export const CoffeeContext = createContext({} as CoffeeContextData)

interface CoffeeContextProviderProps {
  children: ReactNode
}

export const CoffeeContextProvider = ({
  children,
}: CoffeeContextProviderProps) => {
  const [coffeeState, dispatch] = useReducer(
    coffeeReducer,
    {
      coffeeCart: [],
    },
    (initialState) => {
      const storedStateAsJson = localStorage.getItem(
        '@ignite-coffee-delivery:coffee-cart-state-1.0.0',
      )

      if (storedStateAsJson) {
        return JSON.parse(storedStateAsJson)
      }

      return initialState
    },
  )

  const { coffeeCart } = coffeeState

  const [availableCoffees] = useState<typeof coffees>(coffees)
  const [totalCartValue, setTotalCartValue] = useState(0)

  const addCoffeeToCart = (coffee: Coffee) => {
    dispatch(addCoffeeToCartAction(coffee))
  }

  const removeCoffeeFromCart = (coffeeId: string) => {
    dispatch(removeCoffeeAction(coffeeId))
  }

  const changeCoffeeAmount = (coffeeId: string, amount: number) => {
    dispatch(changeCoffeeAmountAction(coffeeId, amount))
  }

  useEffect(() => {
    if (coffeeCart.length !== 0) {
      const totalAmount = coffeeCart.reduce((acc, item) => {
        return acc + item.amount * item.price
      }, 0)

      setTotalCartValue(totalAmount)
    }

    const jsonCoffeeCart = JSON.stringify(coffeeState)

    localStorage.setItem(
      '@ignite-coffee-delivery:coffee-cart-state-1.0.0',
      jsonCoffeeCart,
    )
  }, [coffeeCart, coffeeState])

  return (
    <CoffeeContext.Provider
      value={{
        availableCoffees,
        coffeeCart,
        addCoffeeToCart,
        totalCartValue,
        removeCoffeeFromCart,
        changeCoffeeAmount,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}

export const useCoffeeContext = () => useContext(CoffeeContext)
