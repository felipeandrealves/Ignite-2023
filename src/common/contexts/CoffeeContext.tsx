import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react'
import { useNavigate } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

import {
  addCoffeeToCartAction,
  addNewOrderAction,
  changeAddressAction,
  changeCoffeeAmountAction,
  clearCartAction,
  removeCoffeeAction,
} from '../reducers/coffees/action'
import {
  Address,
  Coffee,
  CoffeeData,
  Order,
  coffeeReducer,
  initialState,
} from '../reducers/coffees/reducer'
import { BuyCoffeeFormData } from '../../pages/Checkout'
import { coffees } from '../data/coffees.json'

interface CoffeeContextData {
  availableCoffees: CoffeeData[]
  coffeeCart: Coffee[]
  totalCartValue: number
  orders: Order[]
  address?: Address
  addCoffeeToCart: (coffee: Coffee) => void
  removeCoffeeFromCart: (coffeeId: string) => void
  changeCoffeeAmount: (coffeeId: string, amount: number) => void
  clearCart: () => void
  createNewOrder: (data: BuyCoffeeFormData) => void
}

export const CoffeeContext = createContext({} as CoffeeContextData)

interface CoffeeContextProviderProps {
  children: ReactNode
}

export const CoffeeContextProvider = ({
  children,
}: CoffeeContextProviderProps) => {
  const navigate = useNavigate()
  const [coffeeState, dispatch] = useReducer(
    coffeeReducer,
    {
      coffeeCart: [],
      orders: [],
    },
    (state) => initialState(state),
  )

  const { coffeeCart, orders, address } = coffeeState

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

  const createNewOrder = (data: BuyCoffeeFormData) => {
    const { address, paymentType } = data

    const newOrder: Order = {
      id: uuid(),
      address,
      coffees: coffeeCart,
      paymentType,
      status: 'pending',
      total: totalCartValue,
      createdAt: new Date().getTime(),
    }

    dispatch(changeAddressAction(address))
    dispatch(addNewOrderAction(newOrder))

    navigate(`/checkout/success/${newOrder.id}`)

    clearCart()
  }

  const clearCart = () => {
    dispatch(clearCartAction())
  }

  useEffect(() => {
    if (coffeeState.coffeeCart.length !== 0) {
      const totalAmount = coffeeState.coffeeCart.reduce((acc, item) => {
        return acc + item.amount * item.price
      }, 0)

      setTotalCartValue(totalAmount)
    }

    const jsonCoffeeCart = JSON.stringify(coffeeState)

    localStorage.setItem(
      '@ignite-coffee-delivery:coffee-state-1.0.0',
      jsonCoffeeCart,
    )
  }, [coffeeState])

  return (
    <CoffeeContext.Provider
      value={{
        availableCoffees,
        coffeeCart,
        addCoffeeToCart,
        totalCartValue,
        removeCoffeeFromCart,
        changeCoffeeAmount,
        clearCart,
        createNewOrder,
        orders,
        address,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}

export const useCoffeeContext = () => useContext(CoffeeContext)
