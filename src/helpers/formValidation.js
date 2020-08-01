export function validateFullName(fullName) {
  let validStr = checkStringIsValid(fullName)
  return /^[a-zA-Z\s]+$/.test(validStr)
}

export function validateEmail (email) {
let validStr = checkStringIsValid(email)
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(validStr).toLowerCase());
}

export function validatePhoneNumber(phoneNumber) {
  let validStr = checkStringIsValid(phoneNumber)
  return /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/i.test(validStr)
}

export function validateService(service) {
  return service.value !== ''
}

export function validateMessage(message) {
  let validStr = checkStringIsValid(message)
  return /^[a-zA-Z\s]+$/.test(validStr)
}

function isEmpty(str) {
let trimmedStr = str.trim()
 return (!trimmedStr || trimmedStr.length === 0)
}

function hasHtml (str) {
  return /(<([^>]+)>)/gi.test(str)
}

function checkStringIsValid(str) {
   if(str && !isEmpty(str) && !hasHtml(str)) {
     return str
   } else {
     return ''
   }
}
