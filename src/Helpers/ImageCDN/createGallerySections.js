import { FULL_GALLERY_DATA } from '../GLOBAL_DEFS'

const createGallerySections = (galleryName, imageData) => {

  const currentGalleryInfo = FULL_GALLERY_DATA.find(gallery => galleryName === gallery.NAME)
  let gallerySections = []

  if (imageData.phases) {
    for (let i = 0; i < currentGalleryInfo.NUM_OF_PROJECTS; i++) {

      let sectionImages = imageData.images.filter(image => image.project === `${ galleryName }-project-${ i + 1 }`)

      gallerySections.push({ phases: imageData.phases, images: sectionImages })
    }
  } else {
    gallerySections.push(imageData)
  }
  return gallerySections
}

export default createGallerySections