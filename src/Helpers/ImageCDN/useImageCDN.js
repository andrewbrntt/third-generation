import { useEffect } from 'react'
import axios from 'axios'
import GLOBAL_DEFS from '../GLOBAL_DEFS'
import createImage from './createImageObject'

function createImageSections (images) {
  const group1 = images.filter(image => image.public_id.includes(GLOBAL_DEFS.IMAGE_GROUPS.PROJECT_1))
  const group2 = images.filter(image => image.public_id.includes(GLOBAL_DEFS.IMAGE_GROUPS.PROJECT_2))
  const group3 = images.filter(image => image.public_id.includes(GLOBAL_DEFS.IMAGE_GROUPS.PROJECT_3))
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
        const image = createImage(res.data.resources[0].public_id, '', '', '')
        console.log('created', image)
        console.log('response image', res.data.resources[0])
        setState(image)
      })
  }, [setState, windowSize, suffix, url])
}

export function getImagesCDNSingleStockArtTest (suffix, pageHero = false) {
  const windowSize = pageHero && window.innerWidth >= 1200 ? GLOBAL_DEFS.WINDOW_SIZES.DESKTOP_LARGE : getWindowWidth()
  let url = `${GLOBAL_DEFS.CDN_DEFS.CDN_DOMAIN_PREFIX}${process.env.REACT_APP_CDN_CLOUD_NAME}/image/list/${windowSize}-${suffix}.json`
  return axios.get(url)
}

// TODO: Maybe a way to get a count of the projects from the CDN
//  would be to count the amount of json objects are in the list payload
