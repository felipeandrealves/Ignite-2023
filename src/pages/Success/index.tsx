import { MapPin } from 'phosphor-react'

export const Success = () => {
  return (
    <div>
      <div>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>

        <div>
          <div>
            <MapPin />

            <div>
              <h2>Entrega em Rua João Daniel Martinelli, 102</h2>
              <p>Farrapos - Porto Alegre, RS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
