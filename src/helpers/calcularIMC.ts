import { AlturasType, GeneroType, PesosType } from '../ts/types'
import twoDecimales from './twoDecimales'

interface calcularIMCProps {
  genero: GeneroType
  tipoPeso: PesosType
  tipoAltura: AlturasType
  peso: number
  altura: number
  year: number
}

type calcularIMCReturn = {
  imc: number
  peso: number
  rango: [number, number]
  rangoObesidad: number
  rangoSobrePeso: number
}

const calcularIMC = ({
  genero,
  peso,
  altura,
  tipoAltura,
  tipoPeso,
  year
}: calcularIMCProps): calcularIMCReturn => {
  const pesoKg = tipoPeso === 'lb' ? peso * 0.453592 : peso // Convertir libras a kilogramos
  const alturaM = tipoAltura === 'metro' ? altura : altura / 100 // Convertir metros a centimetros
  const imc = pesoKg / (alturaM * alturaM) // Calcular IMC

  const rangoPesoIdeal: [number, number] = [0, 0]
  let rangoSobrePeso: number = 0
  let rangoObesidad: number = 0

  /*
    IMC Rango de peso
    0,0 - 19,0 = Bajo peso
    19,1 - 24,0 = Peso normal
    24,1 - 29,0 = Sobrepeso
    29,1 - 38,9 = Obesidad
    39,0 + = Obesidad extrema
   */

  // Calcular rango de peso ideal min y max en kg de acuerdo a la edad
  if (year < 18) {
    if (genero === 'hombre') {
      rangoPesoIdeal[0] =
        tipoPeso === 'lb'
          ? twoDecimales((19.0 * (alturaM * alturaM)) / 0.453592)
          : twoDecimales(19.0 * (alturaM * alturaM))
      rangoPesoIdeal[1] =
        tipoPeso === 'lb'
          ? twoDecimales((24.0 * (alturaM * alturaM)) / 0.453592)
          : twoDecimales(24.0 * (alturaM * alturaM))
      rangoSobrePeso =
        tipoPeso === 'lb'
          ? twoDecimales((29.0 * (alturaM * alturaM)) / 0.453592)
          : twoDecimales(29.0 * (alturaM * alturaM))
      rangoObesidad =
        tipoPeso === 'lb'
          ? twoDecimales((38.9 * (alturaM * alturaM)) / 0.453592)
          : twoDecimales(38.9 * (alturaM * alturaM))
    } else {
      rangoPesoIdeal[0] =
        tipoPeso === 'lb'
          ? twoDecimales((18.0 * (alturaM * alturaM)) / 0.453592)
          : twoDecimales(18.0 * (alturaM * alturaM))
      rangoPesoIdeal[1] =
        tipoPeso === 'lb'
          ? twoDecimales((23.0 * (alturaM * alturaM)) / 0.453592)
          : twoDecimales(23.0 * (alturaM * alturaM))
      rangoSobrePeso =
        tipoPeso === 'lb'
          ? twoDecimales((28.0 * (alturaM * alturaM)) / 0.453592)
          : twoDecimales(28.0 * (alturaM * alturaM))
      rangoObesidad =
        tipoPeso === 'lb'
          ? twoDecimales((37.9 * (alturaM * alturaM)) / 0.453592)
          : twoDecimales(37.9 * (alturaM * alturaM))
    }
  } else if (year >= 18 && year <= 24) {
    if (genero === 'hombre') {
      rangoPesoIdeal[0] =
        tipoPeso === 'lb'
          ? twoDecimales((19.0 * (alturaM * alturaM)) / 0.453592)
          : twoDecimales(19.0 * (alturaM * alturaM))
      rangoPesoIdeal[1] =
        tipoPeso === 'lb'
          ? twoDecimales((24.0 * (alturaM * alturaM)) / 0.453592)
          : twoDecimales(24.0 * (alturaM * alturaM))
      rangoSobrePeso =
        tipoPeso === 'lb'
          ? twoDecimales((29.0 * (alturaM * alturaM)) / 0.453592)
          : twoDecimales(29.0 * (alturaM * alturaM))
      rangoObesidad =
        tipoPeso === 'lb'
          ? twoDecimales((38.9 * (alturaM * alturaM)) / 0.453592)
          : twoDecimales(38.9 * (alturaM * alturaM))
    } else {
      rangoPesoIdeal[0] =
        tipoPeso === 'lb'
          ? twoDecimales((18.0 * (alturaM * alturaM)) / 0.453592)
          : twoDecimales(18.0 * (alturaM * alturaM))
      rangoPesoIdeal[1] =
        tipoPeso === 'lb'
          ? twoDecimales((23.0 * (alturaM * alturaM)) / 0.453592)
          : twoDecimales(23.0 * (alturaM * alturaM))
      rangoSobrePeso =
        tipoPeso === 'lb'
          ? twoDecimales((28.0 * (alturaM * alturaM)) / 0.453592)
          : twoDecimales(28.0 * (alturaM * alturaM))
      rangoObesidad =
        tipoPeso === 'lb'
          ? twoDecimales((37.9 * (alturaM * alturaM)) / 0.453592)
          : twoDecimales(37.9 * (alturaM * alturaM))
    }
  } else if (year >= 25 && year <= 34) {
    if (genero === 'hombre') {
      rangoPesoIdeal[0] =
        tipoPeso === 'lb'
          ? twoDecimales((20.0 * (alturaM * alturaM)) / 0.453592)
          : twoDecimales(20.0 * (alturaM * alturaM))
      rangoPesoIdeal[1] =
        tipoPeso === 'lb'
          ? twoDecimales((25.0 * (alturaM * alturaM)) / 0.453592)
          : twoDecimales(25.0 * (alturaM * alturaM))
      rangoSobrePeso =
        tipoPeso === 'lb'
          ? twoDecimales((30.0 * (alturaM * alturaM)) / 0.453592)
          : twoDecimales(30.0 * (alturaM * alturaM))
      rangoObesidad =
        tipoPeso === 'lb'
          ? twoDecimales((39.9 * (alturaM * alturaM)) / 0.453592)
          : twoDecimales(39.9 * (alturaM * alturaM))
    } else {
      rangoPesoIdeal[0] =
        tipoPeso === 'lb'
          ? twoDecimales((19.0 * (alturaM * alturaM)) / 0.453592)
          : twoDecimales(19.0 * (alturaM * alturaM))
      rangoPesoIdeal[1] =
        tipoPeso === 'lb'
          ? twoDecimales((24.0 * (alturaM * alturaM)) / 0.453592)
          : twoDecimales(24.0 * (alturaM * alturaM))
      rangoSobrePeso =
        tipoPeso === 'lb'
          ? twoDecimales((29.0 * (alturaM * alturaM)) / 0.453592)
          : twoDecimales(29.0 * (alturaM * alturaM))
      rangoObesidad =
        tipoPeso === 'lb'
          ? twoDecimales((38.9 * (alturaM * alturaM)) / 0.453592)
          : twoDecimales(38.9 * (alturaM * alturaM))
    }
  } else if (year >= 35 && year <= 44) {
    if (genero === 'hombre') {
      rangoPesoIdeal[0] =
        tipoPeso === 'lb'
          ? twoDecimales((21.0 * (alturaM * alturaM)) / 0.453592)
          : twoDecimales(21.0 * (alturaM * alturaM))
      rangoPesoIdeal[1] =
        tipoPeso === 'lb'
          ? twoDecimales((26.0 * (alturaM * alturaM)) / 0.453592)
          : twoDecimales(26.0 * (alturaM * alturaM))
      rangoSobrePeso =
        tipoPeso === 'lb'
          ? twoDecimales((31.0 * (alturaM * alturaM)) / 0.453592)
          : twoDecimales(31.0 * (alturaM * alturaM))
      rangoObesidad =
        tipoPeso === 'lb'
          ? twoDecimales((40.9 * (alturaM * alturaM)) / 0.453592)
          : twoDecimales(40.9 * (alturaM * alturaM))
    } else {
      rangoPesoIdeal[0] =
        tipoPeso === 'lb'
          ? twoDecimales((20.0 * (alturaM * alturaM)) / 0.453592)
          : twoDecimales(20.0 * (alturaM * alturaM))
      rangoPesoIdeal[1] =
        tipoPeso === 'lb'
          ? twoDecimales((25.0 * (alturaM * alturaM)) / 0.453592)
          : twoDecimales(25.0 * (alturaM * alturaM))
      rangoSobrePeso =
        tipoPeso === 'lb'
          ? twoDecimales((30.0 * (alturaM * alturaM)) / 0.453592)
          : twoDecimales(30.0 * (alturaM * alturaM))
      rangoObesidad =
        tipoPeso === 'lb'
          ? twoDecimales((39.9 * (alturaM * alturaM)) / 0.453592)
          : twoDecimales(39.9 * (alturaM * alturaM))
    }
  } else if (year >= 45 && year <= 54) {
    if (genero === 'hombre') {
      rangoPesoIdeal[0] =
        tipoPeso === 'lb'
          ? twoDecimales((22.0 * (alturaM * alturaM)) / 0.453592)
          : twoDecimales(22.0 * (alturaM * alturaM))
      rangoPesoIdeal[1] =
        tipoPeso === 'lb'
          ? twoDecimales((27.0 * (alturaM * alturaM)) / 0.453592)
          : twoDecimales(27.0 * (alturaM * alturaM))
      rangoSobrePeso =
        tipoPeso === 'lb'
          ? twoDecimales((32.0 * (alturaM * alturaM)) / 0.453592)
          : twoDecimales(32.0 * (alturaM * alturaM))
      rangoObesidad =
        tipoPeso === 'lb'
          ? twoDecimales((41.9 * (alturaM * alturaM)) / 0.453592)
          : twoDecimales(41.9 * (alturaM * alturaM))
    } else {
      rangoPesoIdeal[0] =
        tipoPeso === 'lb'
          ? twoDecimales((21.0 * (alturaM * alturaM)) / 0.453592)
          : twoDecimales(21.0 * (alturaM * alturaM))
      rangoPesoIdeal[1] =
        tipoPeso === 'lb'
          ? twoDecimales((26.0 * (alturaM * alturaM)) / 0.453592)
          : twoDecimales(26.0 * (alturaM * alturaM))
      rangoSobrePeso =
        tipoPeso === 'lb'
          ? twoDecimales((31.0 * (alturaM * alturaM)) / 0.453592)
          : twoDecimales(31.0 * (alturaM * alturaM))
      rangoObesidad =
        tipoPeso === 'lb'
          ? twoDecimales((40.9 * (alturaM * alturaM)) / 0.453592)
          : twoDecimales(40.9 * (alturaM * alturaM))
    }
  } else if (year >= 55 && year <= 64) {
    if (genero === 'hombre') {
      rangoPesoIdeal[0] =
        tipoPeso === 'lb'
          ? twoDecimales((23.0 * (alturaM * alturaM)) / 0.453592)
          : twoDecimales(23.0 * (alturaM * alturaM))
      rangoPesoIdeal[1] =
        tipoPeso === 'lb'
          ? twoDecimales((28.0 * (alturaM * alturaM)) / 0.453592)
          : twoDecimales(28.0 * (alturaM * alturaM))
      rangoSobrePeso =
        tipoPeso === 'lb'
          ? twoDecimales((33.0 * (alturaM * alturaM)) / 0.453592)
          : twoDecimales(33.0 * (alturaM * alturaM))
      rangoObesidad =
        tipoPeso === 'lb'
          ? twoDecimales((42.9 * (alturaM * alturaM)) / 0.453592)
          : twoDecimales(42.9 * (alturaM * alturaM))
    } else {
      rangoPesoIdeal[0] =
        tipoPeso === 'lb'
          ? twoDecimales((22.0 * (alturaM * alturaM)) / 0.453592)
          : twoDecimales(22.0 * (alturaM * alturaM))
      rangoPesoIdeal[1] =
        tipoPeso === 'lb'
          ? twoDecimales((27.0 * (alturaM * alturaM)) / 0.453592)
          : twoDecimales(27.0 * (alturaM * alturaM))
      rangoSobrePeso =
        tipoPeso === 'lb'
          ? twoDecimales((32.0 * (alturaM * alturaM)) / 0.453592)
          : twoDecimales(32.0 * (alturaM * alturaM))
      rangoObesidad =
        tipoPeso === 'lb'
          ? twoDecimales((41.9 * (alturaM * alturaM)) / 0.453592)
          : twoDecimales(41.9 * (alturaM * alturaM))
    }
  } else if (year >= 65 && year <= 74) {
    if (genero === 'hombre') {
      rangoPesoIdeal[0] =
        tipoPeso === 'lb'
          ? twoDecimales((24.0 * (alturaM * alturaM)) / 0.453592)
          : twoDecimales(24.0 * (alturaM * alturaM))
      rangoPesoIdeal[1] =
        tipoPeso === 'lb'
          ? twoDecimales((29.0 * (alturaM * alturaM)) / 0.453592)
          : twoDecimales(29.0 * (alturaM * alturaM))
      rangoSobrePeso =
        tipoPeso === 'lb'
          ? twoDecimales((34.0 * (alturaM * alturaM)) / 0.453592)
          : twoDecimales(34.0 * (alturaM * alturaM))
      rangoObesidad =
        tipoPeso === 'lb'
          ? twoDecimales((43.9 * (alturaM * alturaM)) / 0.453592)
          : twoDecimales(43.9 * (alturaM * alturaM))
    } else {
      rangoPesoIdeal[0] =
        tipoPeso === 'lb'
          ? twoDecimales((23.0 * (alturaM * alturaM)) / 0.453592)
          : twoDecimales(23.0 * (alturaM * alturaM))
      rangoPesoIdeal[1] =
        tipoPeso === 'lb'
          ? twoDecimales((28.0 * (alturaM * alturaM)) / 0.453592)
          : twoDecimales(28.0 * (alturaM * alturaM))
      rangoSobrePeso =
        tipoPeso === 'lb'
          ? twoDecimales((33.0 * (alturaM * alturaM)) / 0.453592)
          : twoDecimales(33.0 * (alturaM * alturaM))
      rangoObesidad =
        tipoPeso === 'lb'
          ? twoDecimales((42.9 * (alturaM * alturaM)) / 0.453592)
          : twoDecimales(42.9 * (alturaM * alturaM))
    }
  } else if (year >= 75) {
    if (genero === 'hombre') {
      rangoPesoIdeal[0] =
        tipoPeso === 'lb'
          ? twoDecimales((25.0 * (alturaM * alturaM)) / 0.453592)
          : twoDecimales(25.0 * (alturaM * alturaM))
      rangoPesoIdeal[1] =
        tipoPeso === 'lb'
          ? twoDecimales((30.0 * (alturaM * alturaM)) / 0.453592)
          : twoDecimales(30.0 * (alturaM * alturaM))
      rangoSobrePeso =
        tipoPeso === 'lb'
          ? twoDecimales((35.0 * (alturaM * alturaM)) / 0.453592)
          : twoDecimales(35.0 * (alturaM * alturaM))
      rangoObesidad =
        tipoPeso === 'lb'
          ? twoDecimales((44.9 * (alturaM * alturaM)) / 0.453592)
          : twoDecimales(44.9 * (alturaM * alturaM))
    } else {
      rangoPesoIdeal[0] =
        tipoPeso === 'lb'
          ? twoDecimales((24.0 * (alturaM * alturaM)) / 0.453592)
          : twoDecimales(24.0 * (alturaM * alturaM))
      rangoPesoIdeal[1] =
        tipoPeso === 'lb'
          ? twoDecimales((29.0 * (alturaM * alturaM)) / 0.453592)
          : twoDecimales(29.0 * (alturaM * alturaM))
      rangoSobrePeso =
        tipoPeso === 'lb'
          ? twoDecimales((34.0 * (alturaM * alturaM)) / 0.453592)
          : twoDecimales(34.0 * (alturaM * alturaM))
      rangoObesidad =
        tipoPeso === 'lb'
          ? twoDecimales((43.9 * (alturaM * alturaM)) / 0.453592)
          : twoDecimales(43.9 * (alturaM * alturaM))
    }
  }

  return {
    imc: twoDecimales(imc),
    peso: twoDecimales(pesoKg),
    rango: rangoPesoIdeal,
    rangoSobrePeso,
    rangoObesidad
  }
}

export default calcularIMC
