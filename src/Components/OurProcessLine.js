import React from 'react'

const BEFORE = 'before'
const AFTER = 'after'

const getMarginStyle = (margin) => {
  if (margin === BEFORE) {
    return 'our-process-infographic--margin-bottom-neg-28'
  } else if (margin === AFTER) {
    return 'our-process-infographic--margin-top-neg-28'
  }
}

export const GraphicRightLines = ({ margin }) => {
  return (<>
    <div className={`${getMarginStyle(margin)} our-process-infographic__top-div-right--border-right`}>{}</div>
    <div
      className='our-process-infographic__bottom-div-right--border-top our-process-infographic__bottom-div-right--border-left'>{}</div>
  </>)
}

export const GraphicLeftLines = ({ margin }) => {
  return (
    <>
      <div className='our-process-infographic__top-div-left--border-left'>{}</div>
      <div
        className={`${getMarginStyle(margin)} our-process-infographic__bottom-div-left--border-top our-process-infographic__bottom-div-left--border-right`}>{}</div>
    </>
  )
}
