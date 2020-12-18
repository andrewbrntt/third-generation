import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faCaretDown,
  faCaretRight,
  faCircle,
  faHome,
  faHorizontalRule,
  faPhone,
  faStar as faStarSolid,
  faStarHalfAlt,
  faTimes,
  faTools
} from '@fortawesome/pro-solid-svg-icons'
import {
  faArrowCircleLeft,
  faArrowCircleRight,
  faCheckCircle,
  faClipboardListCheck,
  faFileContract,
  faFileSignature,
  faHammer,
  faHouse,
  faPhoneAlt,
  faRaindrops,
  faSnowflake,
  faSparkles,
  faSpinnerThird,
  faStar as faStarRegular,
  faSun,
  faTemperatureDown,
  faTimesCircle
} from '@fortawesome/pro-regular-svg-icons'
import { faTools as duoTools } from '@fortawesome/pro-duotone-svg-icons'

const fontAwesomeLibrary = () => {
  library.add(
    faStarSolid,
    faStarHalfAlt,
    faStarRegular,
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
    faTimes,
    faCheckCircle,
    faArrowCircleRight,
    faArrowCircleLeft,
    faCaretDown,
    faCaretRight,
    faTimesCircle,
    faSpinnerThird,
    faPhone
  )
}

export default fontAwesomeLibrary
