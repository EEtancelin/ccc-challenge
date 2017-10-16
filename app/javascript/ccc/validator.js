
export const required = value => (value ? undefined : 'Required')

export const isNumber = value =>
  value && isNaN(Number(value)) ? 'Must be a number' : undefined

const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined

const maxLength15 = maxLength(15)

export const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined
export const minLength2 = minLength(2)

export const isAbove = min => value =>
  value && value < min ? `Must be above ${min}` : undefined

export const isBellow = max => value =>
  value && value > max ? `Must be under ${max}` : undefined

const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined
