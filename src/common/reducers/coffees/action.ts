import { Address, Coffee, Order } from './reducer'

export enum ActionTypes {
  ADD_COFFEE_TO_CART = 'ADD_NEW_COFFEE',
  CHANGE_COFFEE_AMOUNT = 'CHANGE_COFFEE_AMOUNT',
  REMOVE_COFFEE = 'REMOVE_COFFEE',
  CLEAR_CART = 'CLEAR_CART',
  ADD_NEW_ORDER = 'ADD_NEW_ORDER',
  CHANGE_ADDRESS = 'CHANGE_ADDRESS',
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

export const clearCartAction = () => {
  return {
    type: ActionTypes.CLEAR_CART,
  }
}

export const addNewOrderAction = (newOrder: Order) => {
  return {
    type: ActionTypes.ADD_NEW_ORDER,
    payload: {
      newOrder,
    },
  }
}

export const changeAddressAction = (address: Address) => {
  return {
    type: ActionTypes.CHANGE_ADDRESS,
    payload: {
      address,
    },
  }
}
