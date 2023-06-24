import { produce } from 'immer'

import { coffees } from '../../data/coffees.json'
import { ActionTypes } from './action'

export type CoffeeData = (typeof coffees)[0]

export type Coffee = CoffeeData & { amount: number }

interface CoffeeState {
  coffeeCart: Coffee[]
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

    default:
      return state
  }
}
