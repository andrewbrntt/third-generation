import { useEffect } from 'react'
import axios from 'axios'
import GLOBAL_DEFS from '../GLOBAL_DEFS'
import createImage from './createImageObject'

function createImageSections (images) {
  // noinspection JSUnresolvedVariable
  const group1 = images.filter(image => image.public_id.includes(GLOBAL_DEFS.IMAGE_GROUPS.PROJECT_1))
  // noinspection JSUnresolvedVariable
  const group2 = images.filter(image => image.public_id.includes(GLOBAL_DEFS.IMAGE_GROUPS.PROJECT_2))
  // noinspection JSUnresolvedVariable
  const group3 = images.filter(image => image.public_id.includes(GLOBAL_DEFS.IMAGE_GROUPS.PROJECT_3))
  // noinspection JSUnresolvedVariable
  const group4 = images.filter(image => image.public_id.includes(GLOBAL_DEFS.IMAGE_GROUPS.PROJECT_4))

  return [
    { title: '', images: group1 },
    { title: '', images: group2 },
    { title: '', images: group3 },
    { title: '', images: group4 }
  ]
}

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

export function useImagesCDNAllImages (setState) {
  const windowSize = getWindowWidth()

  useEffect(() => {
    axios.get(`${GLOBAL_DEFS.CDN_DEFS.CDN_DOMAIN_PREFIX}${process.env.REACT_APP_CDN_CLOUD_NAME}/image/list/${windowSize}-all.json`)
      .then(res => {
        // noinspection JSUnresolvedVariable
        setState(createImageSections(res.data.resources))
      })
  }, [windowSize])
}

export function useImagesCDNSingleStockArt (setState, suffix, pageHero = false) {
  const windowSize = pageHero && window.innerWidth >= 1200 ? GLOBAL_DEFS.WINDOW_SIZES.DESKTOP_LARGE : getWindowWidth()

  let url = `${GLOBAL_DEFS.CDN_DEFS.CDN_DOMAIN_PREFIX}${process.env.REACT_APP_CDN_CLOUD_NAME}/image/list/${windowSize}-${suffix}.json`

  useEffect(() => {
    axios.get(url)
      .then(res => {
        // noinspection JSUnresolvedVariable
        const image = createImage(res.data.resources[0].public_id, '', '', '')
        setState(image)
      })
  }, [setState, windowSize, suffix, url])
}

export function getImagesCDNSingleStockArtTest (suffix, pageHero = false) {
  const windowSize = pageHero && window.innerWidth >= 1200 ? GLOBAL_DEFS.WINDOW_SIZES.DESKTOP_LARGE : getWindowWidth()
  let url = `${GLOBAL_DEFS.CDN_DEFS.CDN_DOMAIN_PREFIX}${process.env.REACT_APP_CDN_CLOUD_NAME}/image/list/${windowSize}-${suffix}.json`
  return axios.get(url)
}
