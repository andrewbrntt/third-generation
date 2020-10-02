export function validateFullName (fullName) {
  return checkStringIsValid(fullName) && /^[a-zA-Z\s]+$/.test(fullName)
}

export function validateEmail (email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return checkStringIsValid(email) && re.test(String(email).toLowerCase())
}

export function validatePhoneNumber (phoneNumber) {
  return checkStringIsValid(phoneNumber) && /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/i.test(phoneNumber)
}

export function validateService (service) {
  return service.value !== ''
}

export function validateMessage (message) {
  if (message.length > 0) {
    return !hasHtml(message)
  } else {
    return true
  }

}

function isEmpty (str) {
  let trimmedStr = str.trim()
  return (!trimmedStr || trimmedStr.length === 0)
}

function hasHtml (str) {
  return /(<([^>]+)>)/gi.test(str)
}

function checkStringIsValid (str) {
  return !isEmpty(str) && !hasHtml(str)
}
