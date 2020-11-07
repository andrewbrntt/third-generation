import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import LazyLoad from 'react-lazyload'
import shortId from 'shortid'
import derivedPublicId from './derivePublicId'
import getImageNameFromPublicId from './getImageNameFromPublicId'
import ImageGalleryModal from './ImageGalleryModal'
import createModalImages from './createModalImages'
import createThumbnails from './createThumbnails'
import sortImageArray from  './sortImageArray'
import ImageGallerySectionHero from './ImageGallerySectionHero'
import GallerySectionItem from './GallerySectionItem'


const ImageGallerySection = ({ title, images, isSection }) => {

  const ImageGallerySectionContainer = useRef(null)

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedImageIndex, setSelectedImageIndex] = useState(null)
  const [heroImage, setHeroImage] = useState(null)
  const [galleryThumbnailImages, setGalleryThumbnailImages] = useState(null)
  const [galleryModalImages, setGalleryModalImages] = useState([])
  const [galleryImagesWidth, setGalleryImagesWidth] = useState([])

  const onImageClick = (e) => {
    e.preventDefault()
    const element = e.target

    const currentElementPublicId = derivedPublicId(element.src)
    let imageName = ''

    if (currentElementPublicId.includes('hero')) {
      imageName = getImageNameFromPublicId(currentElementPublicId, false)
    } else {
      imageName = getImageNameFromPublicId(currentElementPublicId, true)
    }

    const selectedImageIndex = galleryModalImages.findIndex(image => image.public_id.includes(imageName))
    setSelectedImageIndex(selectedImageIndex)
    setIsModalOpen(true)
  }

  useLayoutEffect(() => {
    if (images) {
      //  Find Hero Image from response
      let hero = images.find(image => image.public_id.includes('hero'))

      // Check to see if it is different
      if (hero && JSON.stringify(hero) !== JSON.stringify(heroImage)) {
        setHeroImage(hero)
      }

      // Create the thumbnails for the section
      const thumbnails = createThumbnails(images, sortImageArray)

      // Create the images for the modal
      const modalImages = createModalImages(images, hero, sortImageArray)

      // Check to see if the thumbnails have changed
      if (JSON.stringify(thumbnails) !== JSON.stringify(galleryThumbnailImages)) {
        setGalleryThumbnailImages(thumbnails)
      }

      // Check to see if the modal images have changed
      if (JSON.stringify(modalImages) !== JSON.stringify(galleryModalImages)) {
        setGalleryModalImages(modalImages)
      }

      // Sets image sizes
      if (ImageGallerySectionContainer.current && galleryImagesWidth !== ImageGallerySectionContainer.current.offsetWidth) {
        setGalleryImagesWidth(ImageGallerySectionContainer.current.offsetWidth)
      }
    }
  }, [images])

  const GallerySection = useMemo(() => {
    return (
      <LazyLoad>
        <div className='image-gallery-section__container'>
          {!isSection && <span className='image-gallery-section__title'>{title}</span>}
          {heroImage && <ImageGallerySectionHero onImageClick={onImageClick} heroImage={heroImage} />}
          <div ref={ImageGallerySectionContainer} className='image-gallery-section__img-container'>
            {galleryThumbnailImages && galleryThumbnailImages.map((image, index) => <GallerySectionItem key={shortId.generate()} onImageClick={onImageClick} imageObject={image} index={index} />)}
          </div>
        </div>
      </LazyLoad>
    )
  }, [galleryThumbnailImages, heroImage])

  return (
    <>
      {isModalOpen &&
      <ImageGalleryModal
        isModalOpen={isModalOpen}
        handleModalClose={setIsModalOpen}
        gallerySectionImages={galleryModalImages}
        initialImageIndex={selectedImageIndex}
      />}
      {GallerySection}
    </>
  )
}

export default ImageGallerySection
