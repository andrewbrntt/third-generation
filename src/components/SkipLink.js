import React from 'react'

const SkipLink = () => {
  const skipLinkFocus = (e) => {
    e.preventDefault()
    const targetElement = document.querySelectorAll('h1, h2, h3, h4, h5, h6')[0];
    targetElement.setAttribute('tabindex', -1)
    targetElement.focus()
    targetElement.scrollIntoView()
  }

  return (
    <button id='skip-link' onClick={e => skipLinkFocus(e)}
       className='sr-only sr-only-focusable skip-link__a'>Skip to Main Content</button>
  )
}

export default SkipLink
 
