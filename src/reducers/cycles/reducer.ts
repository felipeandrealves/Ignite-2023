import { produce } from 'immer'
import { ActionTypes } from './actions'

export interface Cycle {
  id: string
  startDate: Date
  task: string
  minutesAmount: number
  interruptDate?: Date
  finishedDate?: Date
}

interface CyclesState {
  cycles: Cycle[]
  activeCycleId: string | null
}

export const cyclesReducer = (state: CyclesState, action: any) => {
  switch (action.type) {
    case ActionTypes.ADD_NEW_CYCLE:
      return produce(state, (draftState) => {
        draftState.cycles.push(action.payload.newCycle)
        draftState.activeCycleId = action.payload.newCycle.id
      })

    case ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED: {
      const currentCycleIndex = state.cycles.findIndex(
        (cycle) => cycle.id === state.activeCycleId,
      )

      if (currentCycleIndex === -1) return state

      return produce(state, (draftState) => {
        draftState.activeCycleId = null
        draftState.cycles[currentCycleIndex].finishedDate = new Date()
      })
    }

    case ActionTypes.INTERRUPT_CURRENT_CYCLE: {
      const currentCycleIndex = state.cycles.findIndex(
        (cycle) => cycle.id === state.activeCycleId,
      )

      if (currentCycleIndex === -1) return state

      return produce(state, (draftState) => {
        draftState.activeCycleId = null
        draftState.cycles[currentCycleIndex].interruptDate = new Date()
      })
    }

    default:
      return state
  }
}
