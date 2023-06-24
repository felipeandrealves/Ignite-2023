import axios from 'axios'

interface ViaCepReturn {
  cep: string
  logradouro: string
  complemento: string
  bairro: string
  localidade: string
  uf: string
  ibge: string
  gia: string
  ddd: string
  siafi: string
}

const viacep = axios.create({
  baseURL: 'https://viacep.com.br/json/ws',
})

export const getCEP = async (cep: string): Promise<ViaCepReturn> => {
  const { data } = await viacep.get<ViaCepReturn>(`/${cep}/json`)

  return data
}
