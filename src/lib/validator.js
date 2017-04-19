import R from 'ramda'
import creditCardType from 'credit-card-type'
/**
 * Check argument is email
 * @param {string} input string
 * @returns {boolean} is input email
 */
export const isEmail = R.curry((errorMessage, field) => {
  return R.test(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, field) || field == null ? true : errorMessage
})

/**
 * Required validator
 * @param {string} errorMessage error message
 * @param {*} input something to validate
 * @returns {(boolean|string)} true if input is present, errorMessage otherwise
 */
export const required = R.curry((errorMessage, field) => {
  return R.isPresent(field) ? true : errorMessage
})

export const isLettersAndNumbers = R.curry((errorMessage, field) => {
  return R.test(/^([A-Za-z0-9._-]*\s*)*$/, field) ? true : errorMessage
})

export const isNumber = R.curry((errorMessage, field) => {
  return R.test(/^([0-9]*)*$/, field) ? true : errorMessage
})

export const isCreditCard = R.curry((errorMessage, field) => {
  if (!R.test(/\d{4}\s\d{4}\s\d{4}\s\d{4}/, field) || !creditCardType(field.slice(0, 4))[0]) return errorMessage
  return true
})

export const withNoSpaces = R.curry((errorMessage, field) => {
  return R.test(/^(.*\s+.*)+$/, field) ? errorMessage : true
})

export const confirmationPassword = R.curry((errorMessage, field, object) => {
  return field !== object.password ? errorMessage : true
})

export const passwordLength = R.curry((errorMessage, field) => {
  return field && field.toString().length < 6 ? errorMessage : true
})
// Add your basic validation function here

const validator = (validations: Object): Object => {
  return (object: Object) => {
    return R.pipe(
      R.map(R.of),
      R.map(R.flatten),
      R.mapObjIndexed((arr, key) => arr.map(v => v(object[key], object))),
      R.map(R.reject(R.equals(true))),
      R.pickBy(R.complement(R.isEmpty))
    )(validations)
  }
}

export default validator
