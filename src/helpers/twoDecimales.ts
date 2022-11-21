const twoDecimales = (decimal: number): number => {
  const { round } = Math
  return round(decimal * 100) / 100
}

export default twoDecimales
