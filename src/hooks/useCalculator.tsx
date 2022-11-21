import { useContext } from 'react'
import CalculatorContext, { CalculatorContextProps } from '../contexts/CalculatorContext'

const useCalculator = (): CalculatorContextProps => {
  return useContext(CalculatorContext)
}

export default useCalculator
