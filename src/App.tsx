import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CalculatorProvider from './providers/CalculatorProvider'
import Layout from './layouts/Layout'
import IMCPage from './pages/IMCPage'
import PesoIdealPage from './pages/PesoIdealPage'
import NotFound from './pages/NotFound'

function App(): JSX.Element {
  return (
    <CalculatorProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<IMCPage />} />
            <Route path='calcular-peso-ideal' element={<PesoIdealPage />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CalculatorProvider>
  )
}

export default App
