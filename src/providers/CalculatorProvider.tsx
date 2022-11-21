import CalculatorContext from '../contexts/CalculatorContext'

interface ProviderProviderProps {
  children: JSX.Element
}

const CalculatorProvider = ({ children }: ProviderProviderProps): JSX.Element => {
  const nombre = 'Calculator'
  return (
    <CalculatorContext.Provider
      value={{
        nombre
      }}
    >
      {children}
    </CalculatorContext.Provider>
  )
}

export default CalculatorProvider
