import GLOBAL_DEFS from '../../Helpers/GLOBAL_DEFS'

const createHeroImage = (sectionImages) => {
  //  Find Hero Image from response
return sectionImages.find(image => image.src.includes(GLOBAL_DEFS.HERO))
}

export default createHeroImage
