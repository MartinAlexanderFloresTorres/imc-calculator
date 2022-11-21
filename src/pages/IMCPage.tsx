import { ChangeEvent, MouseEvent, useEffect, useRef, useState } from 'react'
import Alerta from '../components/alertas/Alerta'
import Card from '../components/Card'
import { AlertaType, AlturasType, GeneroType, PesosType } from '../ts/types'
import { PersonaHombreSvg, PersonaMujerSvg } from '../assets/svg'
import Resultados from '../components/Resultados'
import calcularIMC from '../helpers/calcularIMC'

export interface StateProps {
  campos: {
    year: number
    altura: number
    peso: number
  }
  errores: {
    genero: boolean
    year: boolean
    altura: boolean
    peso: boolean
  }
  error: AlertaType
  tipoAltura: AlturasType
  tipoPeso: PesosType
  genero: GeneroType
  resultado: {
    imc: number
    pesoIdeal: [number, number]
    pesoActual: number
    rangoObesidad: number
    rangoSobrePeso: number
  }
}

const DEFAULT_STATE: StateProps = {
  campos: {
    year: 0,
    altura: 0,
    peso: 0
  },
  errores: {
    genero: false,
    year: false,
    altura: false,
    peso: false
  },
  error: null,
  tipoAltura: 'cm',
  tipoPeso: 'kg',
  genero: 'hombre',

  resultado: {
    imc: 0,
    pesoIdeal: [0, 0],
    pesoActual: 0,
    rangoObesidad: 0,
    rangoSobrePeso: 0
  }
}

const IMCPage = (): JSX.Element => {
  // Estados
  const [campos, setCampos] = useState<StateProps['campos']>(DEFAULT_STATE.campos)
  const [tipoAltura, setTipoAltura] = useState<StateProps['tipoAltura']>(DEFAULT_STATE.tipoAltura)
  const [tipoPeso, setTipoPeso] = useState<StateProps['tipoPeso']>(DEFAULT_STATE.tipoPeso)
  const [genero, setGenero] = useState<StateProps['genero']>(DEFAULT_STATE.genero)
  const [errores, setErrores] = useState<StateProps['errores']>(DEFAULT_STATE.errores)
  const [error, setError] = useState<StateProps['error']>(DEFAULT_STATE.error)
  const [resultado, setResultado] = useState<StateProps['resultado']>(DEFAULT_STATE.resultado)

  // Ref
  const divGrid = useRef<HTMLElement>(null)

  // Efeccto de no renderizar el componente resultado
  useEffect(() => {
    if (!Object.values(campos).includes(0)) {
      setResultado(DEFAULT_STATE.resultado)
    }
  }, [tipoPeso, genero, tipoAltura])

  // Handle change inputs
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target
    if (name === 'year') {
      if (value.length > 3) return
      if (Number(value) > 150) return
      if (Number(value) > new Date().getFullYear()) return
      setCampos({ ...campos, [name]: Number(value) })
    } else if (name === 'altura') {
      if (tipoAltura === 'cm') {
        if (value.length > 3) return
        if (Number(value) > 599) return
      } else {
        if (value.length > 4) return
        if (Number(value) > 9.9) return
      }
      setCampos({ ...campos, [name]: Number(value) })
    } else if (name === 'peso') {
      if (value.length > 3) return
      setCampos({ ...campos, [name]: Number(value) })
    } else {
      setCampos({ ...campos, [name]: value })
    }
  }

  // Handle change buttons
  const handleButton = (e: MouseEvent<HTMLButtonElement>): void => {
    const { name } = e.currentTarget
    if (name === 'cm' || name === 'metro') {
      setTipoAltura(name)
    }
    if (name === 'kg' || name === 'lb') {
      setTipoPeso(name)
    }
    if (name === 'hombre' || name === 'mujer') {
      setGenero(name)
    }
  }

  // Handle calcular IMC
  const handleCalcularIMC = (): void => {
    if (campos.year === 0) {
      setResultado(DEFAULT_STATE.resultado)
      setErrores((prev) => ({ ...prev, year: true }))
    } else {
      setErrores((prev) => ({ ...prev, year: false }))
    }
    if (campos.altura === 0) {
      setResultado(DEFAULT_STATE.resultado)
      setErrores((prev) => ({ ...prev, altura: true }))
    } else {
      setErrores((prev) => ({ ...prev, altura: false }))
    }
    if (campos.peso === 0) {
      setResultado(DEFAULT_STATE.resultado)
      setErrores((prev) => ({ ...prev, peso: true }))
    } else {
      setErrores((prev) => ({ ...prev, peso: false }))
    }
    if (genero !== 'hombre' && genero !== 'mujer') {
      setResultado(DEFAULT_STATE.resultado)
      setErrores((prev) => ({ ...prev, genero: true }))
    } else {
      setErrores((prev) => ({ ...prev, genero: false }))
    }

    // Realizar el calculo
    setErrores((prev) => {
      if (!prev.altura && !prev.genero && !prev.peso && !prev.year) {
        try {
          setError(null)
          const { imc, peso, rango, rangoSobrePeso, rangoObesidad } = calcularIMC({
            genero,
            altura: campos.altura,
            tipoAltura,
            peso: campos.peso,
            tipoPeso,
            year: campos.year
          })

          const scrollDiv = divGrid.current?.clientHeight ?? 100
          window.scrollTo(0, scrollDiv)

          setResultado({ imc, pesoIdeal: rango, pesoActual: peso, rangoSobrePeso, rangoObesidad })
        } catch (error) {
          console.log(error)
          setError('error')
        }
      }
      return { ...prev }
    })
  }

  return (
    <>
      <section className='paddding-20 container' ref={divGrid}>
        <h1 className='titulo'>Calcular IMC</h1>
        <p className='subTitulo'>
          Para un cálculo correcto necesitamos algo de información básica sobre ti
        </p>

        <section className='cards-grid'>
          <Card indice={1} title='¿Cuál es tu género?' error={errores.genero}>
            <div className='botones'>
              <button name='hombre' onClick={handleButton}>
                <PersonaHombreSvg />
                <span className={`${genero === 'hombre' ? 'btn-azul' : 'btn-ligth'}`}>Hombre</span>
              </button>
              <button name='mujer' onClick={handleButton}>
                <PersonaMujerSvg />
                <span className={`${genero === 'mujer' ? 'btn-azul' : 'btn-ligth'}`}>Mujer</span>
              </button>
            </div>
          </Card>

          <Card indice={2} title='¿Cuántos años tienes?' error={errores.year}>
            <label htmlFor='year'>
              <input
                type='number'
                name='year'
                value={campos.year > 0 ? campos.year : ''}
                onChange={handleChange}
                id='year'
                placeholder='21'
              />
              <span>Años</span>
            </label>
          </Card>

          <Card indice={3} title='¿Cuánto mides?' error={errores.altura}>
            <label htmlFor='altura'>
              <input
                type='number'
                name='altura'
                value={campos.altura > 0 ? campos.altura : ''}
                onChange={handleChange}
                id='altura'
                placeholder={tipoAltura === 'cm' ? '170' : '1.70'}
              />
              <span>{tipoAltura === 'cm' ? 'cm' : 'm'}</span>
            </label>
            <div className='botones'>
              <button
                name='cm'
                onClick={handleButton}
                className={`${tipoAltura === 'cm' ? 'btn-azul' : 'btn-ligth'}`}
              >
                cm
              </button>
              <button
                name='metro'
                onClick={handleButton}
                className={`${tipoAltura === 'metro' ? 'btn-azul' : 'btn-ligth'}`}
              >
                metros
              </button>
            </div>
          </Card>

          <Card indice={4} title='¿Cuánto pesas?' error={errores.peso}>
            <label htmlFor='peso'>
              <input
                type='number'
                name='peso'
                value={campos.peso > 0 ? campos.peso : ''}
                onChange={handleChange}
                id='peso'
                placeholder='69'
              />
              <span>{tipoPeso}</span>
            </label>
            <div className='botones'>
              <button
                name='kg'
                onClick={handleButton}
                className={`${tipoPeso === 'kg' ? 'btn-azul' : 'btn-ligth'}`}
              >
                kg
              </button>
              <button
                name='lb'
                onClick={handleButton}
                className={`${tipoPeso === 'lb' ? 'btn-azul' : 'btn-ligth'}`}
              >
                lb
              </button>
            </div>
          </Card>
        </section>

        <button className='btn-pink uppercase btn-center btn-calcular' onClick={handleCalcularIMC}>
          Calcula tu IMC
        </button>

        {error !== null && (
          <Alerta tipo={error}>
            <p>
              <b>¡Vaya!</b>, algo ha ido mal. Por favor, corrige los campos destacados.
            </p>
          </Alerta>
        )}
      </section>

      {resultado.imc !== 0 && (
        <Resultados
          tipo='imc'
          titulo='Tu resultado personal'
          tipoPeso={tipoPeso}
          imc={resultado.imc}
          pesoActual={resultado.pesoActual}
          rangPesoIdeal={resultado.pesoIdeal}
          rangoSobrePeso={resultado.rangoSobrePeso}
          rangoObesidad={resultado.rangoObesidad}
        />
      )}
    </>
  )
}

export default IMCPage
