import React from 'react'

const SkipLink = () => {
  const skipLinkFocus = (e) => {
    e.preventDefault()
    const targetElement = document.getElementById('main-content')
    targetElement.setAttribute('tabindex', -1)
    targetElement.focus()
    targetElement.scrollIntoView()
  }

  return (
    <a id='skip-link' href='#main-content' onClick={e => skipLinkFocus(e)} className='sr-only sr-only-focusable skip-link__a'>Skip to Main Content</a>
  )
}

export default SkipLink
