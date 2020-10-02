import React from 'react'

const PageHeader = ({ header, styleClasses }) => {
  return (
    <h1 className={`color-primary h1-page-header ${styleClasses ? styleClasses : ''}`}>{header}</h1>
  )
}

export default PageHeader
