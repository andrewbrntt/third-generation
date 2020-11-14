import shortId from 'shortid'

const createImage = (src, altText, phase, name) => {
  return {
    id: shortId.generate(),
    src,
    altText,
    phase,
    name
  }
}

export default createImage
