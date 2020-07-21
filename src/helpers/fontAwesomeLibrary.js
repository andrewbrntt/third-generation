import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar as faStarSolid, faStarHalfAlt, faHorizontalRule, faTools, faCircle } from '@fortawesome/pro-solid-svg-icons'
import { faStar as faStarRegular } from '@fortawesome/pro-regular-svg-icons'
import { faTools as duoTools } from '@fortawesome/pro-duotone-svg-icons'
import {faFacebook, faInstagram} from '@fortawesome/free-brands-svg-icons'

const fontAwesomeLibrary = () => {
  library.add(
    faStarSolid,
    faStarHalfAlt,
    faStarRegular,
    faFacebook,
    faInstagram,
    faTools,
    faHorizontalRule,
    duoTools,
    faCircle
  )
}

export default fontAwesomeLibrary