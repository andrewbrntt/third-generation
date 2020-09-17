import React from 'react'
import IconWithLine from '../components/IconWithLine'
import Tools from '../assets/icon-tools.svg'

const Test = () => {
  return (
    <div style={{height: '800px', display: 'flex', justifyContent: 'center', alignItems: 'center'}} className='background-color-primary body-section--width-full'>
      <IconWithLine icon={Tools}/>
    </div>
  )
}
export default Test
