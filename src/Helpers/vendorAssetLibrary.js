import owensCorningLogo1x from '../assets/vendor-assets/owens-corning/owens-corning.png'
import owensCorningLogo2x from '../assets/vendor-assets/owens-corning/owens-corning@2x.png'
import owensCorningLogo3x from '../assets/vendor-assets/owens-corning/owens-corning@3x.png'

import jamesHardieLogo1x from '../assets/vendor-assets/james-hardie/siding-james-hardie-logo.png'
import jamesHardieLogo2x from '../assets/vendor-assets/james-hardie/siding-james-hardie-logo@2x.png'
import jamesHardieLogo3x from '../assets/vendor-assets/james-hardie/siding-james-hardie-logo@3x.png'

import royalSidingLogo1x from '../assets/vendor-assets/royal-building/siding-royal-building-logo-color.png'
import royalSidingLogo2x from '../assets/vendor-assets/royal-building/siding-royal-building-logo-color@2x.png'
import royalSidingLogo3x from '../assets/vendor-assets/royal-building/siding-royal-building-logo-color@3x.png'

import alsideLogo1x from '../assets/vendor-assets/alside/alside.png'

import alsideLogo2x from '../assets/vendor-assets/alside/alside@2x.png'
import alsideLogo3x from '../assets/vendor-assets/alside/alside@3x.png'
import firestoneLogo1x from '../assets/vendor-assets/firestone/firestone_logo.png'

import certainteedSidingLogo1x from '../assets/vendor-assets/certainteed/siding-certainteed-logo.png'
import certainteedSidingLogo2x from '../assets/vendor-assets/certainteed/siding-certainteed-logo@2x.png'
import certainteedSidingLogo3x from '../assets/vendor-assets/certainteed/siding-certainteed-logo@3x.png'

import carterLogo1x from '../assets/vendor-assets/carter/carterlumber.png'
import carterLogo2x from '../assets/vendor-assets/carter/carterlumber.png'
import carterLogo3x from '../assets/vendor-assets/carter/carterlumber.png'

import gafLogo1x from '../assets/vendor-assets/gaf/gaf-logo.png'
import gafLogo2x from '../assets/vendor-assets/gaf/gaf-logo@2x.png'
import gafLogo3x from '../assets/vendor-assets/gaf/gaf-logo@3x.png'

import alliedLogo1x from '../assets/vendor-assets/allied/allied-logo.png'
import alliedLogo2x from '../assets/vendor-assets/allied/allied-logo@2x.png'
import alliedLogo3x from '../assets/vendor-assets/allied/allied-logo@3x.png'

import vinylmax from '../assets/vendor-assets/vinylmax/vinylmax-logo_160x80.svg'

import norandex1x from '../assets/vendor-assets/norandex/norandex-logo.png'
import norandex2x from '../assets/vendor-assets/norandex/norandex-logo@2x.png'
import norandex3x from '../assets/vendor-assets/norandex/norandex-logo@3x.png'

export const owensCorningLogo = {
  small: owensCorningLogo1x,
  medium: owensCorningLogo2x,
  large: owensCorningLogo3x,
}

export const jamesHardieLogo = {
  small: jamesHardieLogo1x,
  medium: jamesHardieLogo2x,
  large: jamesHardieLogo3x,
}

export const royalSidingLogo = {
  small: royalSidingLogo1x,
  medium: royalSidingLogo2x,
  large: royalSidingLogo3x,
}

export const alsideLogo = {
  small: alsideLogo1x,
  medium: alsideLogo2x,
  large: alsideLogo3x,
}

export const firestoneLogo = {
  small: firestoneLogo1x,
  medium: firestoneLogo1x,
  large: firestoneLogo1x,
}

export const certainteedSidingLogo = {
  small: certainteedSidingLogo1x,
  medium: certainteedSidingLogo2x,
  large: certainteedSidingLogo3x,
}

export const carterLogo = {
  small: carterLogo1x,
  medium: carterLogo2x,
  large: carterLogo3x,
}

export const gafLogo = {
  small: gafLogo1x,
  medium: gafLogo2x,
  large: gafLogo3x,
}

export const alliedLogo = {
  small: alliedLogo1x,
  medium: alliedLogo2x,
  large: alliedLogo3x,
}

export const norandexLogo = {
  small: norandex1x,
  medium: norandex2x,
  large: norandex3x
}

export const vinylmaxLogo = {
  small: vinylmax
}

export const getImageExtension = (imgName) => {
  return imgName.substr(imgName.length - 3)
}

export const vendors = [
  { logo: jamesHardieLogo, altText: 'James Hardie Siding Logo', styleClasses: 'vendor__james-hardie' },
  { logo: owensCorningLogo, altText: 'Owens Corning Logo', styleClasses: 'vendor__owens-corning' },
  { logo: certainteedSidingLogo, altText: 'Certainteed Siding Logo', styleClasses: 'vendor__certainteed' },
  { logo: royalSidingLogo, altText: 'Royal Building Products Logo', styleClasses: 'vendor__royal-building' },
  { logo: alsideLogo, altText: 'Alside Siding Logo', styleClasses: 'vendor__alside' },
  { logo: firestoneLogo, altText: 'Firestone Building Products Logo', styleClasses: 'vendor__firestone' },
  { logo: vinylmaxLogo, altText: 'Vinylmax Products Logo', styleClasses: 'vendor__vinylmax' },
  { logo: norandexLogo, altText: 'Norandex Products Logo', styleClasses: 'vendor__norandex' }
]
