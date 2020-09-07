import React, { useEffect, useState } from 'react'
import BeforeAfter from './BeforeAfter'
import shortId from 'shortid'
import ImageGalleryModal from './ImageGalleryModal'

const ImageGallerySection = ({ title, images }) => {

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedImageId, setSelectedImageId] = useState(null)

  const createBeforeAfterPair = (image) => {
    const imagePairObject = images.find(currentImage => image.pairId === currentImage.id)
    return { id: image.id, before: image, after: imagePairObject }
  }

  const createGallerySectionItem = (imageObject) => {
    if (imageObject.subText && imageObject.subText.toLowerCase() === 'after') {
      return
    }
    if (imageObject.pairId && imageObject.subText.toLowerCase() === 'before') {
      imageObject = createBeforeAfterPair(imageObject)
      return (
        <div key={shortId.generate()} className='image-gallery-section__img--border'>
          <button onClick={() => onImageClick(imageObject.id)}>
            <BeforeAfter before={imageObject.before} after={imageObject.after}/>
          </button>
        </div>
      )
    } else {
      return (
        <button key={shortId.generate()} onClick={() => onImageClick(imageObject.id)}>
          <img className='image-gallery-section__single-img image-gallery-section__img'
               src={imageObject.src}
               alt={imageObject.altText}/>
        </button>
      )
    }
  }

  const onImageClick = (imageId) => {
    if (imageId !== selectedImageId) {
      setSelectedImageId(imageId)
    }

    if (isModalOpen !== !isModalOpen) {
      setIsModalOpen(!isModalOpen)
    }

  }

  // useEffect(() => {
  //   if (isModalOpen) {
  //     const body = document.getElementsByTagName('body')[0]
  //     body.setAttribute('style', 'position: fixed;')
  //   } else {
  //     const body = document.getElementsByTagName('body')[0]
  //     body.setAttribute('style', 'position: initial;')
  //   }
  // }, [isModalOpen])

  return (
    <>
      {selectedImageId &&
      <ImageGalleryModal isModalOpen={isModalOpen}
                         handleModalClose={setIsModalOpen}
                         gallerySectionImages={images}
                         initialImageId={selectedImageId}
      />}
      <div className='image-gallery-section__container'>
        <span className='image-gallery-section__title'>{title}</span>
        <div className='image-gallery-section__img-container'>
          {images.map(image => createGallerySectionItem(image))}
        </div>
      </div>
    </>
  )
}

export default ImageGallerySection
