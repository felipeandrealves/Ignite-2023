import { useFormContext } from 'react-hook-form'

import { FormContainer, MinutesAmountInput, TaskInput } from './styles'
import { useCyclesContext } from '../../../../contexts/CyclesContext'

export const NewCycleForm = () => {
  const { activeCycle } = useCyclesContext()
  const { register } = useFormContext()

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        id="task"
        list="task-suggestions"
        placeholder="De um nome para seu projeto"
        disabled={!!activeCycle}
        {...register('task')}
      />
      <datalist id="task-suggestions">
        <option value="ola" />
      </datalist>

      <label htmlFor="minutesAmount">Durante</label>
      <MinutesAmountInput
        type="number"
        id="minutesAmount"
        placeholder="00"
        step={5}
        max={60}
        min={5}
        disabled={!!activeCycle}
        {...register('minutesAmount', { valueAsNumber: true })}
      />

      <span>Minutos.</span>
    </FormContainer>
  )
}
