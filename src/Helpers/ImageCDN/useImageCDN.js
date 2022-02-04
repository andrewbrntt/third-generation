import axios from 'axios'
import { CDN_DEFS, WINDOW_SIZES } from '../GLOBAL_DEFS'

export function getWindowWidth () {
  let windowSize

  if (window.innerWidth >= 992) {
    windowSize = WINDOW_SIZES.DESKTOP
  } else if (window.innerWidth >= 768) {
    windowSize = WINDOW_SIZES.TABLET
  } else {
    windowSize = WINDOW_SIZES.MOBILE
  }
  return windowSize
}

export function getGroupImagesCDN (galleryName) {
  const windowSize = getWindowWidth()
  return axios.get(`${CDN_DEFS.CDN_DOMAIN_PREFIX}${CDN_DEFS.REACT_APP_CDN_CLOUD_NAME}/image/list/${windowSize}-${galleryName}.json`)
}

export function getImagesCDNSingleStockArt (suffix, pageHero = false) {
  const windowSize = pageHero && window.innerWidth >= 1200 ? WINDOW_SIZES.DESKTOP_LARGE : getWindowWidth()
  let url = `${CDN_DEFS.CDN_DOMAIN_PREFIX}${CDN_DEFS.REACT_APP_CDN_CLOUD_NAME}/image/list/${windowSize}-${suffix}.json`
  return axios.get(url)
}
