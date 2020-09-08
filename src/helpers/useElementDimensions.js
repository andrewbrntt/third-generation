import React, { useState, useLayoutEffect, useCallback } from 'react'

function getElementDimensions (element) {
  if (!element) {
    return {
      width: 0,
      height: 0
    }
  } else {
    return {
      width: element.offsetWidth,
      height: element.offsetHeight
    }
  }
}

function getWindowDimensions () {
  if (!window) {
    return {
      width: 0,
      height: 0
    }
  } else {
    return {
      width: window.innerWidth,
      height: window.innerHeight
    }
  }
}


function useElementDimensions (ref) {

  const [dimensions, setDimensions] = useState(getElementDimensions(ref ? ref.current : {}))

  const handleResize = useCallback(() => {
    if(ref.current) {
      setDimensions(getElementDimensions(ref.current))
    } else {
      setDimensions(getWindowDimensions())
    }
  }, [ref, window.innerHeight, window.innerWidth])

  useLayoutEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [handleResize])

  return dimensions
}

export default useElementDimensions
