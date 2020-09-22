import BeforeImage from '../assets/image-gallery/placeholders/before-temp.jpg'
import BeforeImage2 from '../assets/image-gallery/placeholders/before-temp-2.png'
import BeforeImage3 from '../assets/image-gallery/placeholders/before-temp-3.jpg'
import BeforeImage4 from '../assets/image-gallery/placeholders/before-temp-4.jpg'
import AfterImage from '../assets/image-gallery/placeholders/after-temp.jpg'
import AfterImage2 from '../assets/image-gallery/placeholders/after-temp-2.jpg'
import AfterImage3 from '../assets/image-gallery/placeholders/after-temp-3.jpg'
import AfterImage4 from '../assets/image-gallery/placeholders/after-temp-4.jpg'
import SingleImage from '../assets/image-gallery/placeholders/single-temp-1.jpg'
import SingleImage2 from '../assets/image-gallery/placeholders/single-temp-2.jpg'
import SingleImage4 from '../assets/image-gallery/placeholders/single-temp-4.jpg'

//TODO: Sort this data out better because it is not all mock data anymore
export const beforeAfterMockData = [
  {
    before: { src: BeforeImage, altText: 'Before image of a roof', subText: 'Before' },
    after: { src: AfterImage, altText: 'After Image of a roof', subText: 'After' }
  },
  {
    before: { src: BeforeImage2, altText: 'Before image of siding', subText: 'Before' },
    after: { src: AfterImage2, altText: 'After Image of siding', subText: 'After' }
  },
  {
    before: { src: BeforeImage2, altText: 'Before image of a remodel', subText: 'Before' },
    after: { src: AfterImage2, altText: 'After Image of a remodel', subText: 'After' }
  },
]

export const mockGalleryImageObjects1 = [
  {
    id: 'remodel-single-1',
    isHero: true,
    src: SingleImage,
    altText: 'After Image of a remodel',
    subText: ''
  },
  {
    id: 'remodel-before-1',
    isHero: false,
    src: BeforeImage,
    altText: 'Before image of a roof',
    subText: ''
  },
  {
    id: 'remodel-after-1',
    isHero: false,
    src: AfterImage,
    altText: 'After Image of a roof',
    subText: ''
  },
  {
    id: 'remodel-single-2',
    isHero: false,
    src: SingleImage2,
    altText: 'After Image of a remodel',
    subText: ''
  },
  {
    id: 'remodel-before-2',
    isHero: false,
    src: BeforeImage2,
    altText: 'Before image of siding',
    subText: ''
  },
  {
    id: 'remodel-after-2',
    isHero: false,
    src: AfterImage2,
    altText: 'After Image of a remodel',
    subText: ''
  }
]

export const mockGalleryImageObjects2 = [
  {
    id: 'remodel-single-4',
    isHero: true,
    src: SingleImage4,
    altText: 'After Image of a remodel',
    subText: ''
  },
  {
    id: 'remodel-before-3',
    isHero: false,
    src: BeforeImage3,
    altText: 'Before image of a roof',
    subText: ''
  },
  {
    id: 'remodel-after-3',
    isHero: false,
    src: AfterImage3,
    altText: 'After Image of a roof',
    subText: ''
  },
  {
    id: 'remodel-before-4',
    isHero: false,
    src: BeforeImage4,
    altText: 'Before image of siding',
    subText: ''
  },
  {
    id: 'remodel-after-4',
    isHero: false,
    src: AfterImage4,
    altText: 'After Image of a remodel',
    subText: ''
  }
]

export const mockGallerySections = [
  { title: 'Siding 1 - North Ridgeville, OH', images: mockGalleryImageObjects1 },
  { title: 'Roofing - Vermilion, OH', images: mockGalleryImageObjects2 }
]




