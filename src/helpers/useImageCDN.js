import { useEffect } from 'react'
import axios from 'axios'

function createImageSections (images) {
  const group1 = images.filter(image => image.public_id.includes('group-1'))
  const group2 = images.filter(image => image.public_id.includes('group-2'))
  const group3 = images.filter(image => image.public_id.includes('group-3'))
  const group4 = images.filter(image => image.public_id.includes('group-4'))

  return [{ title: '', images: group1 }, { title: '', images: group2 }, { title: '', images: group3 }, { title: '', images: group4 }]
}

export function getWindowWidth () {
  let windowSize = ''

  if (window.innerWidth >= 992) {
    windowSize = 'desktop'
  } else if (window.innerWidth >= 768) {
    windowSize = 'tablet'
  } else {
    windowSize = 'mobile'
  }
  return windowSize
}

export function useImagesCDN (setState, imageGroupTag) {

  const windowSize = getWindowWidth()

  useEffect(() => {
    axios.get(`https://res.cloudinary.com/dop1zc5k4/image/list/${windowSize}-${imageGroupTag}.json`)
      .then(res => {
        setState(res.data.resources)
      })
  }, [])
}

export function useImagesCDNAllImages (setState) {

  const windowSize = getWindowWidth()

  useEffect(() => {
    axios.get(`https://res.cloudinary.com/dop1zc5k4/image/list/${windowSize}-all.json`)
      .then(res => {
        setState(createImageSections(res.data.resources))
      })
  }, [])
}

export function useImagesCDNThumbnails (setState, imageGroupTag) {
  useEffect(() => {
    axios.get(`https://res.cloudinary.com/dop1zc5k4/image/list/${imageGroupTag}.json`)
      .then(res => {
        setState(res.data.resources)
      })
  }, [])
}

export function useImagesCDNFullSize (setState, imageGroupTag) {
  useEffect(() => {
    axios.get(`https://res.cloudinary.com/dop1zc5k4/image/list/${imageGroupTag}.json`)
      .then(res => {
        setState(res.data.resources)
      })
  }, [])
}

export function useImagesCDNStockArt (setState) {
  const windowSize = getWindowWidth()

  useEffect(() => {
    axios.get(`https://res.cloudinary.com/dop1zc5k4/image/list/${windowSize}-stock-art.json`)
      .then(res => {
        setState(res.data.resources)
      })
  }, [])
}

export function useImagesCDNSingleStockArt (setState, suffix) {
  const windowSize = getWindowWidth()

let url = `https://res.cloudinary.com/dop1zc5k4/image/list/${windowSize}-${suffix}.json`

  useEffect(() => {
    axios.get(url)
      .then(res => {
        setState(res.data.resources[0])
      })
  }, [])
}

export function useImagesCDNServiceCards (setState) {
  const windowSize = getWindowWidth()

  let url = `https://res.cloudinary.com/dop1zc5k4/image/list/${windowSize}-service-card.json`

  useEffect(() => {
    axios.get(url)
      .then(res => {
        setState(res.data.resources)
      })
  }, [])
}
