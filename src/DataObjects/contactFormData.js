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

export const FORM_CONSTANTS = {
  POST: 'POST',
  SUBMIT_URL: 'https://formspree.io/f/mleoebak',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
  ACCEPT: 'Accept',
  DATA_TYPE: 'application/json',
  FULL_NAME: 'full-name',
  EMAIL: 'email',
  PHONE: 'phone',
  MESSAGE: 'message',
  SERVICES: 'services',
  SUBMIT: 'submit',
  PHONE_NUMBER: '4405223324'
}
