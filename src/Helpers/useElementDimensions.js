import { useCallback, useLayoutEffect, useState } from 'react'

function getDimensions (element) {
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

function useElementDimensions (ref) {

  const [dimensions, setDimensions] = useState(getDimensions(ref ? ref.current : {}))

  const handleResize = useCallback(() => {
    if (ref.current) {
      setDimensions(getDimensions(ref.current))
    }
  }, [ref])

  useLayoutEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [handleResize])

  return dimensions
}

export default useElementDimensions
