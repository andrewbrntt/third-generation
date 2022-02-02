const SortImageArray = (array) => {
  return array.sort((imageA, imageB) => {
    return imageA.order - imageB.order
  })
}

export default SortImageArray
