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
import SingleImage3 from '../assets/image-gallery/placeholders/single-temp-3.jpg'
import SingleImage4 from '../assets/image-gallery/placeholders/single-temp-4.jpg'
import AngiesList from '../assets/review-sites/angies-list/angies-list-seal.png'
import AngiesListMedium from '../assets/review-sites/angies-list/angies-list-seal@2x.png'
import AngiesListLarge from '../assets/review-sites/angies-list/angies-list-seal@3x.png'
import HomeAdvisor from '../assets/review-sites/home-advisor/home-advisor-seal.png'
import HomeAdvisorMedium from '../assets/review-sites/home-advisor/home-advisor-seal@2x.png'
import HomeAdvisorLarge from '../assets/review-sites/home-advisor/home-advisor-seal@3x.png'
import BBB from '../assets/review-sites/bbb/bbb-seal.svg'

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
  { id: 'remodel-single-3', pairId: '', src: SingleImage, altText: 'After Image of a remodel' },
  {
    id: 'remodel-before-3',
    pairId: 'remodel-after-3',
    src: BeforeImage3,
    altText: 'Before image of a roof',
    subText: 'Before'
  },
  {
    id: 'remodel-after-3',
    pairId: 'remodel-before-3',
    src: AfterImage3,
    altText: 'After Image of a roof',
    subText: 'After'
  },
  {
    id: 'remodel-single-4',
    pairId: '',
    src: SingleImage4,
    altText: 'After Image of a remodel'
  },
  {
    id: 'remodel-before-4',
    pairId: 'remodel-after-4',
    src: BeforeImage4,
    altText: 'Before image of siding',
    subText: 'Before'
  },
  {
    id: 'remodel-after-4',
    pairId: 'remodel-before-4',
    src: AfterImage4,
    altText: 'After Image of a remodel',
    subText: 'After'
  }
]

export const mockGallerySections = [
  { title: 'Siding 1 - North Ridgeville, OH', images: mockGalleryImageObjects1 },
  { title: 'Roofing - Vermilion, OH', images: mockGalleryImageObjects2 }
]

export const reviewSites = [
  {
    imgDefault: AngiesList,
    imgMedium: AngiesListMedium,
    imgLarge: AngiesListLarge,
    id: 'AL',
    altText: 'Angie\\\'s List Certified seal'
  },
  {
    imgDefault: HomeAdvisor,
    imgMedium: HomeAdvisorMedium,
    imgLarge: HomeAdvisorLarge,
    id: 'HA',
    altText: 'Home Advisor Approved Seal'
  },
  {
    imgDefault: BBB,
    imgMedium: BBB,
    imgLarge: BBB,
    id: 'bbb',
    altText: 'Better Business Bureau Accredited Seal'
  }
]

const fullName = {
  id: 'contact-form__full-name',
  name: 'full-name',
  labelText: 'Full Name',
  type: 'text',
  isRequired: true,
  value: '',
  hasError: false,
  errorMessage: ''
}

const email = {
  id: 'contact-form__email',
  name: 'email',
  labelText: 'Email',
  inputFormat: '(email@domain.com)',
  type: 'email',
  isRequired: true,
  value: '',
  hasError: false,
  errorMessage: ''
}

const phone = {
  id: 'contact-form__phone',
  name: 'phone',
  labelText: 'Phone Number',
  type: 'tel',
  isRequired: true,
  value: '',
  hasError: false,
  errorMessage: ''
}

const message = {
  id: 'contact-form__message',
  name: 'message',
  labelText: 'Message',
  inputType: 'text',
  isRequired: false,
  elementType: 'textarea',
  hasError: false,
  value: '',
  errorMessage: ''
}

const services = {
  id: 'contact-form__services',
  name: 'services',
  labelText: 'Type of Service',
  type: 'text',
  elementType: 'select',
  options: [
    { value: 'remodel', text: 'Remodel' },
    { value: 'repairs', text: 'Repairs' },
    { value: 'roofing', text: 'Roofing' },
    { value: 'siding', text: 'Siding' }
  ],
  isRequired: true,
  value: '',
  hasError: false,
  errorMessage: ''
}

export const formFieldsData = { fullName, email, phone, message, services }
