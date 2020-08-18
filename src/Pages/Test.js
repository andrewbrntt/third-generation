import React, { useEffect, useState } from 'react'
import ImageGalleryModal from '../components/ImageGalleryModal'
import BodyHeader from '../components/BodyHeader'
import BodySection from '../components/BodySection'
import BeforeAfterGallerySection from '../components/BeforeAfterGallerySection'
import { beforeAfterMockData } from '../helpers/mockData'
import ReviewList from '../components/ReviewList'

const Test = () => {

  const [imagePair, setImagePair] = useState({})
  const [currentImageToggle, setCurrentImageToggle] = useState('before')
  const [currentImage, setCurrentImage] = useState({})
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleButtonClick = () => {
    changeImage()
  }

  const handleModalOpenToggle = () => {
    setIsModalOpen(!isModalOpen)
  }

  const changeImage = () => {
    const updatedImageToggle = currentImageToggle === 'before' ? 'after' : 'before'
    setCurrentImageToggle(updatedImageToggle)
    setCurrentImage(imagePair[currentImageToggle])
  }


  useEffect(() => {

  })
  return (
  <>
    <ImageGalleryModal handleModalClose={handleModalOpenToggle} imageData={currentImage} handleArrowClick={handleButtonClick} isModalOpen={isModalOpen}/>
    <BodyHeader pageHeader='Our Work' linkText='Contact Us'>
      <p>
        Third Generation Construction uses affordable, quality products to convert mundane spaces into beautiful
        homes and guarantee well-built projects that ensure customer satisfaction.
      </p>
      <p className='p--top-spacing'>
        View our gallery to see dramatic
        before-and-after transformations.
      </p>
    </BodyHeader>
    <BodySection styleClasses='color-primary' sectionTitle='Gallery'>
      <BeforeAfterGallerySection handleModalOpen={handleModalOpenToggle} setImagePair={setImagePair}  galleryImages={beforeAfterMockData}/>
    </BodySection>
    <BodySection linkText='Reviews' styleClasses='color-primary' sectionTitle='Reviews'>
      <ReviewList randomCount='5'/>
    </BodySection>
  </>
  )
}
export default Test
