import shortId from 'shortid'

const createImage = (src, altText, phase, name) => {
  return {
    id: shortId.generate(),
    src,
    altText,
    phase,
    name,
    subText: toTitleCase(phase)
  }
}

export default createImage

function toTitleCase (str) {
  if (str && str !== '') {
    return str.replace(
      /\w\S*/g,
      function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
      }
    )
  }
}
