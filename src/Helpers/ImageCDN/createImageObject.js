import shortId from 'shortid'

const createImage = (src, altText, phase, name, device, gallery, order, thumbnail) => {
  return {
    id: shortId.generate(),
    src,
    altText,
    phase,
    name,
    device,
    gallery,
    order,
    thumbnail,
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
