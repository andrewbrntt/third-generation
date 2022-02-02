import { GALLERY_REDUCER_ACTIONS } from '../../Helpers/GLOBAL_DEFS'

const imageGalleryReducer = (state, action) => {
  switch (action.type) {
    case GALLERY_REDUCER_ACTIONS.MODAL_STATE:
      return { ...state, isModalOpen: action.payload }
    case GALLERY_REDUCER_ACTIONS.CURRENT_INDEX:
      return { ...state, selectedImageIndex: action.payload }
    case GALLERY_REDUCER_ACTIONS.HERO_IMAGE:
      return { ...state, heroImage: action.payload }
    case GALLERY_REDUCER_ACTIONS.THUMBNAILS:
      return { ...state, galleryThumbnailImages: action.payload }
    case GALLERY_REDUCER_ACTIONS.MODAL_IMAGES:
      return { ...state, galleryModalImages: action.payload }
    default:
      return state
  }
}

export default imageGalleryReducer