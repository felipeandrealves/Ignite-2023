import { produce } from 'immer'

import { coffees } from '../../data/coffees.json'
import { ActionTypes } from './action'

export type CoffeeData = (typeof coffees)[0]

export type Coffee = CoffeeData & { amount: number }

export type Address = {
  street: string
  number: string
  city: string
  state: string
  zipCode: string
  neighborhood: string

  complement?: string
}

export type Order = {
  id: string
  coffees: Coffee[]
  address: Address
  total: number

  paymentType: 'creditCard' | 'debitCard' | 'cash'

  status: 'pending' | 'completed' | 'cancelled'
  createdAt: number
}

interface CoffeeState {
  coffeeCart: Coffee[]
  orders: Order[]
  address?: Address
}

export const coffeeReducer = (state: CoffeeState, action: any) => {
  switch (action.type) {
    case ActionTypes.ADD_COFFEE_TO_CART:
      return produce(state, (draftState) => {
        const coffeeAlreadyInCart = draftState.coffeeCart.findIndex(
          (coffees) => coffees.id === action.payload.newCoffee.id,
        )

        if (coffeeAlreadyInCart !== -1) {
          draftState.coffeeCart[coffeeAlreadyInCart].amount +=
            action.payload.newCoffee.amount
          return
        }

        draftState.coffeeCart.push(action.payload.newCoffee)
      })

    case ActionTypes.CHANGE_COFFEE_AMOUNT: {
      const coffeeIndex = state.coffeeCart.findIndex(
        (item) => item.id === action.payload.coffeeId,
      )

      if (coffeeIndex === -1) return state

      return produce(state, (draftState) => {
        draftState.coffeeCart[coffeeIndex].amount = action.payload.amount
      })
    }

    case ActionTypes.REMOVE_COFFEE: {
      const coffeeIndex = state.coffeeCart.findIndex(
        (item) => item.id === action.payload.coffeeId,
      )

      if (coffeeIndex === -1) return state

      return produce(state, (draftState) => {
        draftState.coffeeCart.splice(coffeeIndex, 1)
      })
    }

    case ActionTypes.CLEAR_CART:
      return produce(state, (draftState) => {
        draftState.coffeeCart = []
      })

    case ActionTypes.ADD_NEW_ORDER:
      return produce(state, (draftState) => {
        draftState.orders.push(action.payload.newOrder)
      })

    case ActionTypes.CHANGE_ADDRESS:
      return produce(state, (draftState) => {
        draftState.address = action.payload.address
      })

    default:
      return state
  }
}

export const initialState = (initialState: CoffeeState): CoffeeState => {
  const storedStateAsJson = localStorage.getItem(
    '@ignite-coffee-delivery:coffee-state-1.0.0',
  )

  if (storedStateAsJson) {
    return JSON.parse(storedStateAsJson)
  }

  return initialState
}
