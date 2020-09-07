import React from 'react'

export const GraphicRightLines = _ => {
  return (<>
    <div className='our-process-infographic__top-div-right--border-right'>{}</div>
    <div className='our-process-infographic__bottom-div-right--border-top our-process-infographic__bottom-div-right--border-left'>{}</div>
  </>)
}

export const GraphicLeftLines = _ => {
  return (
    <>
      <div className='our-process-infographic__top-div-left--border-left'>{}</div>
      <div className='our-process-infographic__bottom-div-left--border-top our-process-infographic__bottom-div-left--border-right'>{}</div>
    </>
  )
}
