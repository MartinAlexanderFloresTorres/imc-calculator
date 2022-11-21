import { useEffect, useState } from 'react'
import { PesosType } from '../ts/types'
import '../styles/Resultados.css'

interface ResultadosProps {
  titulo: string
  imc?: number
  rangPesoIdeal: [number, number]
  pesoActual?: number
  tipoPeso: PesosType
  rangoSobrePeso: number
  rangoObesidad: number
  tipo: 'pesoIdeal' | 'imc'
}

const Resultados = ({
  titulo,
  tipoPeso,
  imc,
  pesoActual,
  rangPesoIdeal,
  rangoSobrePeso,
  rangoObesidad,
  tipo
}: ResultadosProps): JSX.Element => {
  const [clase, setClase] = useState('')

  useEffect(() => {
    if (imc !== undefined && tipo === 'imc') {
      if (imc < 19.0) {
        setClase('bajo')
      } else if (imc > 19.0 && imc < 24.0) {
        setClase('normal')
      } else if (imc > 24.0 && imc < 29.0) {
        setClase('sobre-peso')
      } else if (imc > 29.0 && imc < 39.0) {
        setClase('obesidad')
      } else if (imc > 39.0) {
        setClase('obesidad-morbida')
      }
    }
  }, [imc, rangoSobrePeso, rangoObesidad])

  return (
    <section className='resultado'>
      <div className='container'>
        <h2 className='titulo'>{titulo}</h2>

        <section className='resultado__grafico'>
          <div className='resultado__linear'>
            <section className={`resultado__indice ${tipo === 'imc' ? clase : 'normal'}`}>
              <h2>{tipo === 'imc' ? 'TU IMC' : 'Peso ideal'}</h2>
              <p>
                {tipo === 'imc'
                  ? imc
                  : `${rangPesoIdeal[0]} ${tipoPeso} - ${rangPesoIdeal[1]} ${tipoPeso}`}
              </p>
              <span></span>
            </section>

            <div>
              <h3>bajo peso</h3>
              <p className='one'>
                <span>0.0 </span> <span className='resultado__dotted'></span>
              </p>
              <span className='resultado-bottom'>
                {rangPesoIdeal[0]} {tipoPeso}
              </span>
            </div>
            <div>
              <h3>peso normal</h3>
              <p>
                <span>19.0</span>
                <span className='resultado__dotted'></span>
              </p>
              <span className='resultado-bottom'>
                {rangPesoIdeal[1]} {tipoPeso}
              </span>
            </div>
            <div>
              <h3>sobrepeso</h3>
              <p>
                <span>24.0</span>
                <span className='resultado__dotted'></span>
              </p>
              <span className='resultado-bottom'>
                {rangoSobrePeso} {tipoPeso}
              </span>
            </div>
            <div>
              <h3>obesidad</h3>
              <p>
                <span>29.0</span>
                <span className='resultado__dotted'></span>
              </p>
              <span className='resultado-bottom'>
                {rangoObesidad} {tipoPeso}
              </span>
            </div>
            <div>
              <h3>obesidad extrema</h3>
              <p>
                <span>39.0</span>
                <span className='resultado__dotted'></span>
                <span>+</span>
              </p>
            </div>
          </div>
        </section>

        <section className='resultado__informacion'>
          {tipo === 'imc' && (
            <div>
              <h2>Tu IMC personal</h2>
              <p>{imc} imc</p>
            </div>
          )}

          {tipo === 'imc' && (
            <div>
              <h2>Tu peso actual</h2>
              <p>
                {pesoActual} {tipoPeso}
              </p>
            </div>
          )}

          <div>
            <h2>Tu rango de peso ideal</h2>
            <p>
              {rangPesoIdeal[0]} {tipoPeso} - {rangPesoIdeal[1]} {tipoPeso}
            </p>
          </div>
        </section>
      </div>
    </section>
  )
}

export default Resultados
