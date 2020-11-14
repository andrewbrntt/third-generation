import shortId from 'shortid'

const createImage = (src, altText, phase) => {
  return {
    id: shortId.generate(),
    src: src,
    altText: altText,
    phase: phase
  }
}

export default createImage
