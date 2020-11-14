const SortImageArray = (array) => {
  return array.sort((imageA, imageB) => {
    let imageANumber = imageA.src.match(/(\d+(\.\d+))/g)
    let imageBNumber = imageB.src.match(/(\d+(\.\d+))/g)

    let firstImage = imageANumber[0].split('.').pop()
    let secondImage = imageBNumber[0].split('.').pop()

    return firstImage - secondImage
  })
}

export default SortImageArray
