import React, { useEffect, useLayoutEffect, useState, useRef } from 'react'
import shortId from 'shortid'

import ImageGalleryModal from './ImageGalleryModal'

const clone = require('rfdc')()

const ImageGallerySection = ({ title, images, isSection }) => {


  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedImageId, setSelectedImageId] = useState(null)
  const [heroImage, setHeroImage] = useState(null)
  const [galleryImages, setGalleryImages] = useState(null)

  const createGallerySectionHero = () => {
    if (heroImage) {
      return (
        <a className='image-gallery-section__hero-link' href='#' key={shortId.generate()}
           onClick={() => onImageClick(heroImage.id)}>
          <img className='image-gallery-section__hero-img'
               src={heroImage.src}
               alt={heroImage.altText}/>
        </a>
      )
    }
  }

  const createGallerySectionItem = (imageObject) => {
    return (
      <a className='image-gallery-section__img-link'
         href='#' key={shortId.generate()} onClick={() => onImageClick(imageObject.id)}>
        <img className=''
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
    if (images && JSON.stringify(images) !== JSON.stringify(galleryImages)) {
      let hero = images.find(image => image.isHero)
      const galleryImagesClone = clone(images)

      if (galleryImagesClone) {
        setHeroImage(hero)
        galleryImagesClone.shift()
        setGalleryImages(galleryImagesClone)
      }

    }
  }, [])

  return (
    <>
      {selectedImageId &&
      <ImageGalleryModal
        isModalOpen={isModalOpen}
                         handleModalClose={setIsModalOpen}
                         gallerySectionImages={images}
                         initialImageId={selectedImageId}
      />}
      <div className='image-gallery-section__container'>
        {!isSection && <span className='image-gallery-section__title'>{title}</span>}
        {heroImage && createGallerySectionHero(heroImage)}
        <div className='image-gallery-section__img-container'>
          {galleryImages && galleryImages.map(image => {
            return createGallerySectionItem(image)
          })
          }
        </div>
      </div>
    </>
  )
}

export default ImageGallerySection
