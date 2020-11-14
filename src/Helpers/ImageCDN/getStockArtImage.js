import { getImagesCDNSingleStockArtTest } from './useImageCDN'
import createImage from './createImageObject'

const getStockArtImage = (imageTag) => {
  return getImagesCDNSingleStockArtTest(imageTag)
    .then(res => {
      return createImage(res.data.resources[0].public_id, '', '')
      }
    )
    .catch(err => console.error('SHUT IT DOWN =>', err))
}

export default getStockArtImage
