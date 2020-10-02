import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import shortId from 'shortid'
import LazyLoad from 'react-lazyload'
import { Image } from 'cloudinary-react'
import ImageGalleryModal from './ImageGalleryModal'

const ImageGallerySection = ({ title, images, isSection }) => {

  const ImageGallerySectionContainer = useRef(null)

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedImageIndex, setSelectedImageIndex] = useState(null)
  const [heroImage, setHeroImage] = useState(null)
  const [galleryThumbnailImages, setGalleryThumbnailImages] = useState(null)
  const [galleryModalImages, setGalleryModalImages] = useState([])
  const [galleryImagesWidth, setGalleryImagesWidth] = useState([])

  const derivedPublicId = (imageSrc) => {
    return imageSrc.substring(imageSrc.indexOf('/image-gallery') + 1)
  }

  const getImageNameFromPublicId = (publicId, small) => {
    if (small) {
      return publicId.substring(publicId.lastIndexOf('.third-generation'), publicId.indexOf('-small_'))
    } else {
      return publicId.substring(publicId.lastIndexOf('.third-generation') + 1, publicId.indexOf('_'))
    }
  }

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

  const sortImageArray = (array) => {
    return array.sort((imageA, imageB) => {
      let imageANumber = imageA.public_id.match(/(\d+(\.\d+))/g)
      let imageBNumber = imageB.public_id.match(/(\d+(\.\d+))/g)

      let pooA = imageANumber[0].split('.').pop()
      let pooB = imageBNumber[0].split('.').pop()

      return pooA - pooB
    })
  }

  const createGallerySectionHero = () => {
    if (heroImage) {
      return (
        <a className='image-gallery-section__hero-link' href='/' key={shortId.generate()}
           onClick={onImageClick}>
          <Image className='image-gallery-section__hero-img' cloudName={process.env.REACT_APP_CDN_CLOUD_NAME}
                 publicId={heroImage.public_id}/>
        </a>
      )
    }
  }

  const createGallerySectionItem = (imageObject, index) => {
    console.log(imageObject)
    return (
      <a
        className={`${index % 3 === 1 ? 'image-gallery-section__img-link-margin-x' : ''} image-gallery-section__img-link`}
        href='#' key={shortId.generate()} onClick={onImageClick}>
        <Image className='image-gallery__thumbnail-img' cloudName={process.env.REACT_APP_CDN_CLOUD_NAME}
               publicId={imageObject.public_id}/>
      </a>
    )
  }

  const createThumbnails = () => {
    let thumbnails = images.filter(image => image.public_id.includes('small'))

    let sortedThumbnailImages = sortImageArray(thumbnails)

    if (JSON.stringify(sortedThumbnailImages) !== JSON.stringify(galleryThumbnailImages)) {
      setGalleryThumbnailImages(sortedThumbnailImages)
    }
  }

  const createModalImages = (hero) => {
    let modalImages = images.filter(image => !image.public_id.includes('small') && !image.public_id.includes('hero'))

    let sortedModalImages = sortImageArray(modalImages)

    sortedModalImages.unshift(hero)

    if (JSON.stringify(sortedModalImages) !== JSON.stringify(galleryModalImages)) {
      setGalleryModalImages(sortedModalImages)
    }
  }

  useEffect(() => {
    console.log('render/mount')
    return () => console.log('unmount')
  }, [])

  useLayoutEffect(() => {
    if (images) {
      let hero = images.find(image => image.public_id.includes('hero'))
      if (hero !== heroImage) {
        setHeroImage(hero)
      }

      createThumbnails()
      createModalImages(hero)

      if (ImageGallerySectionContainer.current && galleryImagesWidth !== ImageGallerySectionContainer.current.offsetWidth) {
        setGalleryImagesWidth(ImageGallerySectionContainer.current.offsetWidth)
      }
    }
  }, [images, ImageGallerySectionContainer.current])

  return (
    <>
      {isModalOpen &&
      <ImageGalleryModal
        isModalOpen={isModalOpen}
        handleModalClose={setIsModalOpen}
        gallerySectionImages={galleryModalImages}
        initialImageIndex={selectedImageIndex}
      />}
      <LazyLoad>
        <div className='image-gallery-section__container'>
          {!isSection && <span className='image-gallery-section__title'>{title}</span>}
          {heroImage && createGallerySectionHero(heroImage)}
          <div ref={ImageGallerySectionContainer} className='image-gallery-section__img-container'>
            {galleryThumbnailImages && galleryThumbnailImages.map((image, index) => createGallerySectionItem(image, index))}
          </div>
        </div>
      </LazyLoad>
    </>
  )
}

export default ImageGallerySection
