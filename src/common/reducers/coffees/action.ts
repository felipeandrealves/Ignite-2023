import { Coffee } from './reducer'

export enum ActionTypes {
  ADD_COFFEE_TO_CART = 'ADD_NEW_COFFEE',
  CHANGE_COFFEE_AMOUNT = 'CHANGE_COFFEE_AMOUNT',
  REMOVE_COFFEE = 'REMOVE_COFFEE',
}

export const addCoffeeToCartAction = (newCoffee: Coffee) => {
  return {
    type: ActionTypes.ADD_COFFEE_TO_CART,
    payload: {
      newCoffee,
    },
  }
}

export const changeCoffeeAmountAction = (coffeeId: string, amount: number) => {
  return {
    type: ActionTypes.CHANGE_COFFEE_AMOUNT,
    payload: {
      coffeeId,
      amount,
    },
  }
}

export const removeCoffeeAction = (coffeeId: string) => {
  return {
    type: ActionTypes.REMOVE_COFFEE,
    payload: {
      coffeeId,
    },
  }
}
