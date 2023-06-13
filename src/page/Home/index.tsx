import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { HandPalm, Play } from 'phosphor-react'
import * as zod from 'zod'

import {
  HomeContainer,
  StartCountdownButton,
  StopCountdownButton,
} from './styles'
import { useCyclesContext } from '../../contexts/CyclesContext'
import { NewCycleForm } from './components/NewCycleForm'
import { Countdown } from './components/Countdown'

const newCycleFormValidationScheme = zod.object({
  task: zod
    .string()
    .min(1, 'Informe uma tarefa valida')
    .nonempty({ message: 'O nome da tarefa é obrigatório' }),
  minutesAmount: zod.number().min(5).max(60),
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationScheme>

export const Home = () => {
  const { activeCycle, createNewCycle, interruptCurrentCycle } =
    useCyclesContext()

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationScheme),
    defaultValues: { task: '', minutesAmount: 0 },
  })

  const { handleSubmit, watch, reset } = newCycleForm

  const isSubmitDisabled = !watch('task')

  const handleCreateNewCycle = (data: NewCycleFormData) => {
    createNewCycle(data)

    reset()
  }

  return (
    <HomeContainer>
      <form action="" onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>

        <Countdown />

        {activeCycle ? (
          <StopCountdownButton type="button" onClick={interruptCurrentCycle}>
            <HandPalm size={24} />
            Intorromper
          </StopCountdownButton>
        ) : (
          <StartCountdownButton type="submit" disabled={isSubmitDisabled}>
            <Play size={24} />
            Comecar
          </StartCountdownButton>
        )}
      </form>
    </HomeContainer>
  )
}
