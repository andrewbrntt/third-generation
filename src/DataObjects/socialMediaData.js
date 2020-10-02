import AngiesList from '../Assets/review-sites/angies-list/angies-list-seal.png'
import AngiesListMedium from '../Assets/review-sites/angies-list/angies-list-seal@2x.png'
import AngiesListLarge from '../Assets/review-sites/angies-list/angies-list-seal@3x.png'
import { socialMediaRoutes } from './routes'
import HomeAdvisor from '../Assets/review-sites/home-advisor/home-advisor-seal.png'
import HomeAdvisorMedium from '../Assets/review-sites/home-advisor/home-advisor-seal@2x.png'
import HomeAdvisorLarge from '../Assets/review-sites/home-advisor/home-advisor-seal@3x.png'
import BBB from '../Assets/review-sites/bbb/bbb-seal.svg'

export const accreditationSites = [
  {
    imgDefault: AngiesList,
    imgMedium: AngiesListMedium,
    imgLarge: AngiesListLarge,
    id: 'AL',
    altText: 'Angie\\\'s List Certified seal',
    routeTo: socialMediaRoutes.angies.routeTo
  },
  {
    imgDefault: HomeAdvisor,
    imgMedium: HomeAdvisorMedium,
    imgLarge: HomeAdvisorLarge,
    id: 'HA',
    altText: 'Home Advisor Approved Seal',
    routeTo: socialMediaRoutes.homeAdvisor.routeTo,
    noLink: true
  },
  {
    imgDefault: BBB,
    imgMedium: BBB,
    imgLarge: BBB,
    id: 'bbb',
    altText: 'Better Business Bureau Accredited Seal',
    routeTo: socialMediaRoutes.bbb.routeTo
  }
]
