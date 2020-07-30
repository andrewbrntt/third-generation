// import React, { useEffect, useState } from 'react'
// import { formFieldsData } from './mockData'
//
// function updateFormData (formData, newValue) {
//   let clone = Object.assign({}, formData)
//   return Object.assign({}, clone, { value: newValue })
// }
//
// function useContactForm (formElements) {
//
//   useEffect(() => {
//     const handleChange = (e) => {
//       e.preventDefault()
//       e.stopPropagation()
//
//       let targetElement = e.target
//
//       switch (targetElement.id) {
//         case fullName.id:
//           setFullName(updateFormData(fullName, targetElement.value))
//           break
//         case phone.id:
//           setPhone(updateFormData(phone, targetElement.value))
//           break
//         case email.id:
//           setEmail(updateFormData(email, targetElement.value))
//           break
//         case services.id:
//           setServices(updateFormData(services, targetElement.value))
//           break
//         case message.id:
//           setMessage(updateFormData(message, targetElement.value))
//           break
//         default:
//           return targetElement
//       }
//     }
//
//     Object.keys(formFieldsData).forEach(fieldData => {
//       let currentField = document.getElementById(formFieldsDataCopy[fieldData].id)
//       currentField.addEventListener('change', handleChange)
//     })
//
//     return () => {
//       Object.keys(formFieldsData).forEach(fieldData => {
//         let currentField = document.getElementById(formFieldsDataCopy[fieldData].id)
//         currentField.removeEventListener('change', handleChange)
//       })
//     }
//   }, [email.value, fullName.value, phone.value, services.value, message.value])
//
//   return formFields
// }
//
// export default useContactForm
//
