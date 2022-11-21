import { createContext } from 'react'

export interface CalculatorContextProps {
  nombre: string
}

export const defaultValue = {
  nombre: 'Calculator'
}

export default createContext<CalculatorContextProps>(defaultValue)
