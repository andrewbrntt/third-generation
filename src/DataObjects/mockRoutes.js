export const routesData = {
  home: { routeName: 'Home', routeTo: '/', exact: true },
  about: { routeName: 'About', routeTo: '/' },
  remodel: { routeName: 'Remodel', routeTo: '/' },
  roofing: { routeName: 'Roofing', routeTo: '/' },
  siding: { routeName: 'Siding', routeTo: '/' },
  repairs: { routeName: 'Repairs', routeTo: '/' },
  ourWork: { routeName: 'Our Work', routeTo: '/' },
  reviews: { routeName: 'Reviews', routeTo: '/' },
  contactUs: { routeName: 'Contact Us', routeTo: '/' },
  kitchenGallery: { routeName: 'Kitchen', routeTo: '/' },
  bathroomGallery: { routeName: 'Bathroom', routeTo: '/' },
  basementGallery: { routeName: 'Basement', routeTo: '/' },
  roofingGallery: { routeName: 'Roofing', routeTo: '/' },
  wholeHomeGallery: { routeName: 'Whole-Home Remodel', routeTo: '/' },
  otherGallery: { routeName: 'Other', routeTo: '/' },
  emergency: {
    routeName: '24-Hour Emergency',
    routeTo: '/'
  }
}

export const serviceRoutes = [
  { routeName: 'Remodel', routeTo: '/' },
  { routeName: 'Roofing', routeTo: '/' },
  { routeName: 'Siding', routeTo: '/' },
  { routeName: 'Repairs', routeTo: '/' },
  {
    routeName: '24-Hour Emergency',
    routeTo: '/emergency-service',
  }
]
export const topMenuRoutes = [
  { routeName: 'Home', routeTo: '/', exact: true },
  { routeName: 'About', routeTo: '/' },
]
export const bottomMenuRoutes = [
  { routeName: 'Our Work', routeTo: '/' },
  { routeName: 'Reviews', routeTo: '/' },
  { routeName: 'Contact Us', routeTo: '/' }
]