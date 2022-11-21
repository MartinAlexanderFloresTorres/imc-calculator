import { ReactNode } from 'react'
import { DangerSvg } from '../../assets/svg'
import { AlertaType } from '../../ts/types'

export interface AlertaProps {
  tipo: AlertaType
  children: ReactNode
}
const Alerta = ({ tipo, children }: AlertaProps): JSX.Element => {
  return (
    <div className={`alerta ${tipo}`}>
      {tipo === 'error' && <DangerSvg />}
      {children}
    </div>
  )
}

export default Alerta
