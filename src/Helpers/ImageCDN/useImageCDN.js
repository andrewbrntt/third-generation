import axios from 'axios'
import GLOBAL_DEFS from '../GLOBAL_DEFS'

export function getWindowWidth () {
  let windowSize

  if (window.innerWidth >= 992) {
    windowSize = GLOBAL_DEFS.WINDOW_SIZES.DESKTOP
  } else if (window.innerWidth >= 768) {
    windowSize = GLOBAL_DEFS.WINDOW_SIZES.TABLET
  } else {
    windowSize = GLOBAL_DEFS.WINDOW_SIZES.MOBILE
  }
  return windowSize
}

export function getGroupImagesCDN (imageGroupTag) {
  const windowSize = getWindowWidth()
  return axios.get(`${GLOBAL_DEFS.CDN_DEFS.CDN_DOMAIN_PREFIX}${process.env.REACT_APP_CDN_CLOUD_NAME}/image/list/${windowSize}-${imageGroupTag}.json`)
}

export function getImagesCDNSingleStockArtTest (suffix, pageHero = false) {
  const windowSize = pageHero && window.innerWidth >= 1200 ? GLOBAL_DEFS.WINDOW_SIZES.DESKTOP_LARGE : getWindowWidth()
  let url = `${GLOBAL_DEFS.CDN_DEFS.CDN_DOMAIN_PREFIX}${process.env.REACT_APP_CDN_CLOUD_NAME}/image/list/${windowSize}-${suffix}.json`
  return axios.get(url)
}
