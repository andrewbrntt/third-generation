//TODO: I may turn this into a custom hook to skip elements


import React, { useState, useLayoutEffect, useCallback } from 'react'

function useSkipElementFocus (ref, event) {

  useCallback(() => {

    let elementSibling = ref.current.nextSibling

    if (elementSibling.nodeName === 'INPUT') {
      elementSibling.focus()
    }

    if (event.shiftKey && event.keyCode === 9) {
      //shift was down when tab was pressed
      let elementParent = ref.current.previousSibling.nodeName
      elementParent.focus()

      console.log(elementParent)
    }
  },[ref])

}
