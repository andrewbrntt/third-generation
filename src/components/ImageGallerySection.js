import React, { useState, useEffect, useLayoutEffect } from 'react'
import shortId from 'shortid'
import ImageGalleryModal from './ImageGalleryModal'

const ImageGallerySection = ({ title, images }) => {

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedImageId, setSelectedImageId] = useState(null)

  const createGallerySectionItem = (imageObject) => {
    return (
      <a  href='#' key={shortId.generate()} onClick={() => onImageClick(imageObject.id)}>
        <img className={imageObject.isHero ? 'image-gallery-section__hero-img' : 'image-gallery-section__img'}
             src={imageObject.src}
             alt={imageObject.altText}/>
      </a>
    )
  }

  const onImageClick = (imageId) => {
    if (imageId !== selectedImageId) {
      setSelectedImageId(imageId)
    }

    if (isModalOpen !== !isModalOpen) {
      setIsModalOpen(!isModalOpen)
    }

  }

  useLayoutEffect(() => {
    if (isModalOpen) {
      const reactRootDiv = document.getElementById('root')
      reactRootDiv.setAttribute('style', 'position: fixed;')
    } else {
      const reactRootDiv = document.getElementById('root')
      reactRootDiv.setAttribute('style', 'position: initial;')
    }
  }, [isModalOpen])

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
