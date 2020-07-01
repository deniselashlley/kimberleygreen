const pxToRem = px => {
  const baseREM = 16
  return `${px / baseREM}rem`
}

export default pxToRem
