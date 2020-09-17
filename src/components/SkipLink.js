import React from 'react'

const SkipLink = () => {
  const skipLinkFocus = (e) => {
    e.preventDefault()
    const targetElement = document.querySelectorAll('h1')[0];
    targetElement.setAttribute('tabindex', -1)
    targetElement.focus()
    targetElement.scrollIntoView()
    targetElement.style.borderColor = 'blue'
  }

  return (
    <button id='skip-link' onClick={skipLinkFocus}
       className='sr-only sr-only-focusable skip-link__a'>Skip to Main Content</button>
  )
}

export default SkipLink
 
