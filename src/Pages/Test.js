import React from 'react'
import {Image} from 'cloudinary-react'
import IconWithLine from '../components/IconWithLine'
import Tools from '../assets/icon-tools.svg'

const Test = () => {
  return (
    <div style={{height: '800px', display: 'flex', justifyContent: 'center', alignItems: 'center'}} className='background-color-white body-section--width-full'>
  <Image cloudName={process.env.REACT_APP_CDN_CLOUD_NAME} publicId="image-gallery/mobile/group-3/mobile.third-generation-construction-our-work-gallery-roof-3.6-small_zzwzoc.jpg"/>
    </div>
  )
}
export default Test
