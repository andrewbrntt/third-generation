export const GalleryImageGroup1 = [
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

const BeforeImageObject1 = {
  id: 'mock-image-1',
  src: 'https://i.picsum.photos/id/351/150/150.jpg?hmac=Rqo8yjcCnF5P9gpc50hSBSrT3Vf767qJmeLeV9qpe_s',
  altText: '',
  phase: ''
}

const BeforeImageObject2 = {
  id: 'mock-image-2',
  src: 'https://i.picsum.photos/id/351/150/150.jpg?hmac=Rqo8yjcCnF5P9gpc50hSBSrT3Vf767qJmeLeV9qpe_s',
  altText: '',
  phase: ''
}

const BeforeImageObject3 = {
  id: 'mock-image-3',
  src: 'https://i.picsum.photos/id/351/150/150.jpg?hmac=Rqo8yjcCnF5P9gpc50hSBSrT3Vf767qJmeLeV9qpe_s',
  altText: '',
  phase: '',
}

const BeforeImageObject4 = {
  id: 'mock-image-4',
  src: 'https://i.picsum.photos/id/351/150/150.jpg?hmac=Rqo8yjcCnF5P9gpc50hSBSrT3Vf767qJmeLeV9qpe_s',
  altText: '',
  phase: ''
}

const DuringImageObject1 = {
  id: 'mock-image-1',
  src: 'https://i.picsum.photos/id/351/150/150.jpg?hmac=Rqo8yjcCnF5P9gpc50hSBSrT3Vf767qJmeLeV9qpe_s',
  altText: '',
  phase: ''
}

const DuringImageObject2 = {
  id: 'mock-image-2',
  src: 'https://i.picsum.photos/id/351/150/150.jpg?hmac=Rqo8yjcCnF5P9gpc50hSBSrT3Vf767qJmeLeV9qpe_s',
  altText: '',
  phase: ''
}

const DuringImageObject3 = {
  id: 'mock-image-3',
  src: 'https://i.picsum.photos/id/351/150/150.jpg?hmac=Rqo8yjcCnF5P9gpc50hSBSrT3Vf767qJmeLeV9qpe_s',
  altText: '',
  phase: ''
}

const DuringImageObject4 = {
  id: 'mock-image-4',
  src: 'https://i.picsum.photos/id/351/150/150.jpg?hmac=Rqo8yjcCnF5P9gpc50hSBSrT3Vf767qJmeLeV9qpe_s',
  altText: '',
  phase: ''
}

const FinishedImageObject1 = {
  id: 'mock-image-1',
  src: 'https://i.picsum.photos/id/351/150/150.jpg?hmac=Rqo8yjcCnF5P9gpc50hSBSrT3Vf767qJmeLeV9qpe_s',
  altText: '',
  phase: ''
}

const FinishedImageObject2 = {
  id: 'mock-image-2',
  src: 'https://i.picsum.photos/id/351/150/150.jpg?hmac=Rqo8yjcCnF5P9gpc50hSBSrT3Vf767qJmeLeV9qpe_s',
  altText: '',
  phase: ''
}

const FinishedImageObject3 = {
  id: 'mock-image-3',
  src: 'https://i.picsum.photos/id/351/150/150.jpg?hmac=Rqo8yjcCnF5P9gpc50hSBSrT3Vf767qJmeLeV9qpe_s',
  altText: '',
  phase: ''
}

const FinishedImageObject4 = {
  id: 'mock-image-4',
  src: 'https://i.picsum.photos/id/351/150/150.jpg?hmac=Rqo8yjcCnF5P9gpc50hSBSrT3Vf767qJmeLeV9qpe_s',
  altText: '',
  phase: ''
}

export const MOCK_GALLERY_BEFORE_AFTER = {
  location: 'Poopville, OH',
  before: [BeforeImageObject1, BeforeImageObject2, BeforeImageObject3, BeforeImageObject4],
  during: [DuringImageObject1, DuringImageObject2, DuringImageObject3, DuringImageObject4],
  after: [FinishedImageObject1, FinishedImageObject2, FinishedImageObject3, FinishedImageObject4]
}

export const MOCK_NEW_GALLERY_OBJECT = {
  location: 'Poopville, OH',
  type:'phases',
  imageData: {
    before: [BeforeImageObject1, BeforeImageObject2, BeforeImageObject3, BeforeImageObject4],
    during: [DuringImageObject1, DuringImageObject2, DuringImageObject3, DuringImageObject4],
    after: [FinishedImageObject1, FinishedImageObject2, FinishedImageObject3, FinishedImageObject4]
  }
}
