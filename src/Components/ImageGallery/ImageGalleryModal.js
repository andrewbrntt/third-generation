import React, { useCallback, useEffect, useLayoutEffect, useRef, useReducer } from 'react'
import LazyLoad from 'react-lazyload'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { clearAllBodyScrollLocks, disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import ImageGalleryArrow from './ImageGalleryArrow'
import DynamicImage from '../DynamicImage'

const initState = {
  currentImageIndex: -1,
  currentImage: {},
  nextArrowVisible: false,
  previousArrowVisible: false
}

const REDUCER_ACTIONS = {
  CURRENT_IMAGE: 'current_image',
  PREVIOUS_ARROW: 'previous_arrow',
  NEXT_ARROW: 'next_arrow',
  CURRENT_INDEX: 'current_index'
}

const imageModalReducer = (state, action) => {
  switch (action.type) {
    case REDUCER_ACTIONS.CURRENT_IMAGE:
      return { ...state, currentImage: action.payload }
    case REDUCER_ACTIONS.PREVIOUS_ARROW:
      return { ...state, previousArrowVisible: action.payload }
    case REDUCER_ACTIONS.NEXT_ARROW:
      return { ...state, nextArrowVisible: action.payload }
    case REDUCER_ACTIONS.CURRENT_INDEX:
      return { ...state, currentImageIndex: action.payload }
    default:
      return state
  }
}

const ImageGalleryModal = ({
  styleClasses,
  initialImageIndex,
  gallerySectionImages,
  handleModalClose,
  isModalOpen
}) => {

  const arrows = {
    PREVIOUS: 'previous',
    NEXT: 'next'
  }

  const [state, dispatch] = useReducer(imageModalReducer, initState, initState => initState)

  const modalContainer = useRef(null)

  const handleArrowClick = (direction) => {
    if (arrows.PREVIOUS === direction && !isFirstImage()) {
      dispatch({ type: REDUCER_ACTIONS.CURRENT_INDEX, payload: state.currentImageIndex - 1 })
    } else if (arrows.NEXT === direction && !isFinalImage()) {
      dispatch({ type: REDUCER_ACTIONS.CURRENT_INDEX, payload: state.currentImageIndex + 1 })
    }
  }

  const isFirstImage = useCallback(() => {
    return state.currentImageIndex === 0 && gallerySectionImages.length > 1
  }, [state.currentImageIndex, gallerySectionImages])

  const isFinalImage = useCallback(() => {
    return state.currentImageIndex === gallerySectionImages.length - 1 && gallerySectionImages.length > 1
  }, [state.currentImageIndex, gallerySectionImages])

  useLayoutEffect(() => {
    if (isFirstImage()) {
      dispatch({ type: REDUCER_ACTIONS.PREVIOUS_ARROW, payload: false })
    } else {
      dispatch({ type: REDUCER_ACTIONS.PREVIOUS_ARROW, payload: true })
    }

    if (isFinalImage()) {
      dispatch({ type: REDUCER_ACTIONS.NEXT_ARROW, payload: false })
    } else {
      dispatch({ type: REDUCER_ACTIONS.NEXT_ARROW, payload: true })
    }

    if (state.currentImageIndex !== -1) {
      dispatch({ type: REDUCER_ACTIONS.CURRENT_IMAGE, payload: gallerySectionImages[state.currentImageIndex] })
    }
  }, [isFirstImage, isFinalImage, gallerySectionImages, state.currentImageIndex])

  useLayoutEffect(() => {
    if (isModalOpen) {
      dispatch({ type: REDUCER_ACTIONS.CURRENT_IMAGE, payload: gallerySectionImages[initialImageIndex] })

      dispatch({ type: REDUCER_ACTIONS.CURRENT_INDEX, payload: initialImageIndex })
    }
  }, [isModalOpen, gallerySectionImages, initialImageIndex])

  useEffect(() => {
    if (isModalOpen) {
      disableBodyScroll(modalContainer.current)
    } else {
      enableBodyScroll(modalContainer.current)
    }

    return () => clearAllBodyScrollLocks()

  }, [isModalOpen])

  return (
    <div ref={modalContainer}
         className={`image-gallery__modal ${isModalOpen ? 'modal--display-block' : 'modal--display-none'} ${styleClasses || ''}`}>
      <div className='image-gallery__close-btn-container'>
        <button className='image-gallery__modal-btn modal__close-btn' onClick={() => handleModalClose()}>
          <FontAwesomeIcon className='modal__times-icon' icon={['fa', 'times']} />
        </button>
      </div>
      <div className='image-gallery--display-flex'>
        <div className='image-gallery__modal-container'>
          <div style={{ visibility: state.previousArrowVisible ? 'visible' : 'hidden' }}
               className='image-gallery__arrow-btn-container image-gallery__modal-arrow-btn-left'>
            <button className='image-gallery__modal-arrow-btn image-gallery__modal-btn'
                    onClick={() => handleArrowClick(arrows.PREVIOUS)}>
              <ImageGalleryArrow styleClasses='image-gallery__arrow-icon' icon={['far', 'arrow-circle-left']} />
            </button>
          </div>
          <div className={`image-gallery__img-container`}>
            <div className='image-gallery__img--display-block'>
              <LazyLoad once>
                <DynamicImage styleClasses='image-gallery__modal-image' imageObject={state.currentImage} />
              </LazyLoad>
              {state.currentImage && state.currentImage.subText &&
              <div className='image-gallery__text default-text color-white'>
                {state.currentImage.subText}
              </div>}
            </div>
          </div>
          <div style={{ visibility: state.nextArrowVisible ? 'visible' : 'hidden' }}
               className='image-gallery__arrow-btn-container image-gallery__modal-arrow-btn-right'>
            <button className='image-gallery__modal-arrow-btn image-gallery__modal-btn'
                    onClick={() => handleArrowClick(arrows.NEXT)}>
              <ImageGalleryArrow styleClasses='image-gallery__arrow-icon' icon={['far', 'arrow-circle-right']} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImageGalleryModal
