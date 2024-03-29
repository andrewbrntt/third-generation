export const routesData = {
  home: { routeName: 'Home', routeTo: '/', exact: true },
  about: { routeName: 'About', routeTo: '/about' },
  services: [
    { routeName: 'Remodel', routeTo: '/remodel' },
    { routeName: 'Roofing', routeTo: '/roofing' },
    { routeName: 'Siding', routeTo: '/siding' },
    { routeName: 'Repairs', routeTo: '/repairs' }
  ],
  reviews: { routeName: 'Reviews', routeTo: '/reviews' },
  contactUs: { routeName: 'Contact Us', routeTo: '/contact' },
  imageGalleries: [
    { routeName: 'Kitchen', routeTo: '/kitchen-photos' },
    { routeName: 'Bathroom', routeTo: '/bathroom-photos' },
    { routeName: 'Basement', routeTo: '/basement-photos' },
    { routeName: 'Roofing', routeTo: '/roofing-photos' },
    // { routeName: 'Whole-Home', routeTo: '/whole-home-photos' },
    { routeName: 'Other', routeTo: '/other-photos' }
  ],
  emergency: {
    routeName: '24-Hour Emergency',
    routeTo: '/emergency-service'
  }
}

export const socialMediaRoutes = {
  facebook: { routeName: 'Facebook', routeTo: 'https://www.facebook.com/3rdgenconst/' },
  instagram: { routeName: 'Instagram', routeTo: 'https://www.instagram.com/3rd_gen_construction/?hl=en' },
  bbb: {
    routeName: 'Better Business Bureau',
    routeTo: 'https://www.bbb.org/us/oh/grafton/profile/construction/3rd-generation-construction-llc-0312-92046378'
  },
  angies: {
    routeName: 'Angie\'s List',
    routeTo: 'https://www.angieslist.com/companylist/us/oh/grafton/3rd-generation-construction-llc-reviews-9609906.htm'
  },
  homeAdvisor: { routeName: 'Home Advisor', routeTo: 'https://www.homeadvisor.com/rated.3rdGeneration.86057266.html' },
  google: {
    routeName: 'Google',
    routeTo: 'https://www.google.com/search?client=ms-android-verizon&cds=3&cs=1&hl=en-US&v=11.30.9.21.arm64&output=search&q=3rd+Generation+Construction+llc&ludocid=10215793668164252082&lsig=AB86z5Xw67MdcxIrDbtAvXzqbZQN&kgs=82f03822b75cfb8c&shndl=-1&source=sh/x/kp/local&entrypoint=sh/x/kp/local'
  }
}

export const serviceRoutes = [
  { routeName: 'Remodel', routeTo: '/remodel' },
  { routeName: 'Roofing', routeTo: '/roofing' },
  { routeName: 'Siding', routeTo: '/siding' },
  { routeName: 'Repairs', routeTo: '/repairs' },
  {
    routeName: '24-Hour Emergency',
    routeTo: '/emergency-service',
  }
]

export const topMenuRoutes = [
  { routeName: 'Home', routeTo: '/', exact: true },
  { routeName: 'About', routeTo: '/about' },
]
export const bottomMenuRoutes = [
  { routeName: 'Reviews', routeTo: '/reviews' },
  { routeName: 'Contact Us', routeTo: '/contact' }
]
