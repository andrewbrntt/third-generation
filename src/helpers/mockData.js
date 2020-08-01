import AfterImage from '../assets/before-temp.jpg'
import BeforeImage from '../assets/after-temp.jpg'
import AngiesList from '../assets/angies-list-seal.png'
import HomeAdvisor from '../assets/home-advisor-seal.png'
import BBB from '../assets/bbb-seal.svg'


export const beforeAfterMockData = [
  { before: {src:BeforeImage, altText: 'Before image of a roof'}, after: {src: AfterImage, altText: 'After Image of a roof'}},
  { before: {src:BeforeImage, altText: 'Before image of siding'}, after: {src:AfterImage, altText: 'After Image of siding'}},
  { before: {src:BeforeImage, altText: 'Before image of a remodel'}, after: {src:AfterImage, altText: 'After Image of a remodel'}},
]

export const reviewSites = [
  { img: AngiesList, id: 'AL', altText: 'Angie\\\'s List Certified seal' },
  { img: HomeAdvisor, id: 'HA', altText: 'Home Advisor Approved Seal' },
  { img: BBB, id: 'bbb', altText: 'Better Business Bureau Accredited Seal' }
]

const fullName = {
  id: 'contact-form__full-name',
  name: 'full-name',
  labelText: 'Full Name',
  type: 'text',
  isRequired: true,
  value: 'Eat My Cock',
  hasError: false,
  errorMessage: ''
}
const email = {
  id: 'contact-form__email',
  name: 'email',
  labelText: 'Email (email@domain.com)',
  type: 'email',
  isRequired: true,
  value: 'hello',
  hasError: false,
  errorMessage: ''
}
const phone = {
  id: 'contact-form__phone',
  name: 'phone',
  labelText: 'Phone (XXX-XXX-XXXX)',
  type: 'tel',
  isRequired: true,
  value: '1234',
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
  value: 'remodel',
  hasError: false,
  errorMessage: ''
}

export const formFieldsData = { fullName, email, phone, message, services }


// const fullName = {
//   id: 'contact-form__full-name',
//   name: 'full-name',
//   labelText: 'Full Name',
//   type: 'text',
//   isRequired: true,
//   value: null
// }
// const email = {
//   id: 'contact-form__email',
//   name: 'email',
//   labelText: 'Email (email@domain.com)',
//   type: 'email',
//   isRequired: true,
//   value: null
// }
// const phone = {
//   id: 'contact-form__phone',
//   name: 'phone',
//   labelText: 'Phone (XXX-XXX-XXXX)',
//   type: 'tel',
//   isRequired: true,
//   value: null
// }
// const message = {
//   id: 'contact-form__message',
//   name: 'message',
//   labelText: 'Message',
//   inputType: 'text',
//   isRequired: false,
//   elementType: 'textarea'
// }
//
// const servicesWithError = {
//   ...services,
// }
