import { ReactNode } from 'react'

interface CardProps {
  indice: number
  title: string
  children: ReactNode
  error: boolean
}

const Card = ({ error, indice, title, children }: CardProps): JSX.Element => {
  return (
    <div className={`card ${error ? 'error' : ''}`}>
      <h3 className='card-indice'>{indice}</h3>
      <h2 className='card-titulo'>{title}</h2>
      {children}
    </div>
  )
}

export default Card
