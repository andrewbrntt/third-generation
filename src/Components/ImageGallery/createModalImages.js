import React from 'react'

const createModalImages = (images, hero, sortImageArray) => {

  let sortedModalImages = []
  let modalImages

if(images.length > 0) {
  modalImages = images.filter(image => !image.public_id.includes('small') && !image.public_id.includes('hero'))
  sortedModalImages = sortImageArray(modalImages)
}
    sortedModalImages.unshift(hero)
    return sortedModalImages
}
export default createModalImages
