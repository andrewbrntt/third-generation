import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faStar as faStarSolid,
  faStarHalfAlt,
  faHorizontalRule,
  faTools,
  faCircle,
  faHome,
  faTimes
} from '@fortawesome/pro-solid-svg-icons'
import {
  faStar as faStarRegular,
  faPhoneAlt,
  faClipboardListCheck,
  faFileSignature,
  faFileContract,
  faHammer,
  faSparkles,
  faTemperatureDown,
  faHouse,
  faSnowflake,
  faRaindrops,
  faSun
} from '@fortawesome/pro-regular-svg-icons'
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
    faCircle,
    faPhoneAlt,
    faClipboardListCheck,
    faFileSignature,
    faFileContract,
    faHammer,
    faHome,
    faSparkles,
    faTemperatureDown,
    faHouse,
    faSnowflake,
    faRaindrops,
    faSun,
    faTimes
  )
}

export default fontAwesomeLibrary
