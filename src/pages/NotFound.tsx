import { Link } from 'react-router-dom'
import '../styles/NotFound.css'

const NotFound = (): JSX.Element => {
  return (
    <section className='container notFound'>
      <h1>404</h1>
      <p>Pagina no encontrada</p>

      <Link to='/' className='btn btn-pink'>
        Ir al inicio
      </Link>
    </section>
  )
}

export default NotFound
