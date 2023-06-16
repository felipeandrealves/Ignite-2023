import { ArchiveBox, Coffee, ShoppingCart, Timer } from 'phosphor-react'

import { Advantage, AdvantagesList } from './styles'

export const AdvantageList = () => {
  return (
    <AdvantagesList>
      <Advantage color="orange">
        <span>
          <ShoppingCart weight="fill" size={16} />
        </span>

        <p>Compra simples e segura</p>
      </Advantage>

      <Advantage color="gray">
        <span>
          <ArchiveBox weight="fill" size={16} />
        </span>

        <p>Embalagem mantém o café intacto</p>
      </Advantage>

      <Advantage color="yellow">
        <span>
          <Timer weight="fill" size={16} />
        </span>

        <p>Entrega rápida e rastreada</p>
      </Advantage>

      <Advantage color="purple">
        <span>
          <Coffee weight="fill" size={16} />
        </span>

        <p>O café chega fresquinho até você</p>
      </Advantage>
    </AdvantagesList>
  )
}
