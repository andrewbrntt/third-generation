import React from 'react'
import ImageGallerySectionItem from './ImageGallerySectionItem'
import shortId from 'shortid'

const ImageGalleryImageGroup = ({galleryThumbnailImages, onImageClick, groupTitle}) => {
  return (
    <>
      {groupTitle && <h3 className='image-group__title'>{groupTitle}</h3>}
      {galleryThumbnailImages && galleryThumbnailImages.map((image, index) =>
        <ImageGallerySectionItem key={shortId.generate()}
                                 onImageClick={onImageClick}
                                 imageObject={image}
                                 index={index}
        />)}
    </>
  )
}

export default ImageGalleryImageGroup
