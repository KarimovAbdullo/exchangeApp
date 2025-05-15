function isNumber(input: string) {
  return /^-?\d*\.?\d+$/.test(input) && !isNaN(parseFloat(input))
}

export function validator(...validators: ((value: string) => string | void)[]) {
  return (value: string) => {
    for (const fn of validators) {
      const message = fn(value)
      if (message) {
        return message
      }
    }
  }
}

export function required(value: string) {
  if (
    value === '' ||
    value === null ||
    value === undefined ||
    value.length === 0
  ) {
    return 'This field is required'
  }
}

export function requiredString(value: string) {
  if (
    value === '' ||
    value === null ||
    value === undefined ||
    value.trim().length === 0
  ) {
    return 'This field is required'
  }
}

export const requiredDynamic = (text: string) => (value: string) => {
  if (
    value === '' ||
    value === null ||
    value === undefined ||
    value.trim().length === 0
  ) {
    return text
  }
}

export const onlyString = (text: string) => (value: string) => {
  const lettersOnly = /^[a-zA-Zа-яА-Я]+$/

  if (!lettersOnly.test(value)) {
    return text
  }
}

export const minNumberValue =
  (minValue: number, isEqual?: boolean, valueText?: string) =>
  (value: string) => {
    const numberValue = Number(value) || parseFloat(value)

    if (!isNumber(value)) {
      return `Minimum ${valueText || 'value'} ${minValue}`
    }

    if (
      isNaN(numberValue) || isEqual
        ? numberValue <= minValue
        : numberValue < minValue
    ) {
      return `Minimum ${valueText || 'value'} ${minValue}`
    }
  }

export const maxNumberValue =
  (maxValue?: number | string) => (value: string) => {
    const newMaxValue = parseFloat(maxValue?.toString() || '0')

    if (!isNumber(value)) {
      return `Maximum value ${maxValue}`
    }

    if (isNaN(Number(value)) || parseFloat(value) > newMaxValue) {
      return `Maximum value ${maxValue}`
    }
  }
export const maxDecimalNumber = (decimalPlaces: number) => (value: string) => {
  const regex = new RegExp(`^-?\\d+(\\.\\d{1,${decimalPlaces}})?$`)
  if (!regex.test(value)) {
    return `Value must have up to ${decimalPlaces} decimal places`
  }
}

export function email(value: string) {
  if (!value) {
    return
  }

  if (value.includes(' ')) {
    return 'Spaces in emails are not allowed'
  }

  const regx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const cyrillic = /\p{sc=Cyrillic}/gu
  if (!regx.test(value) || cyrillic.test(value)) {
    return 'Please enter a valid email address'
  }
}

export function minLength(size: number) {
  return (value: string) => {
    if (value.length < size) {
      return 'Must be at least {size} characters'.replace(
        '{size}',
        String(size),
      )
    }
  }
}

export function fixedTextLength(size: number) {
  return (value: string) => {
    if (value.length < size) {
      return 'Must be {size} characters'.replace('{size}', String(size))
    }
  }
}

export function onlyLetter(value: string) {
  const regx = /^[A-Za-z]+$/
  if (!regx.test(value)) {
    return 'This field only accepts letters'
  }
}

export function atLeastOneLetter(value: string) {
  const regx = /[A-Za-z]+/
  if (!regx.test(value)) {
    return 'This field requires at least one letter'
  }
}

export const atLeastOneLetterDynamic = (text: string) => (value: string) => {
  const regx = /[A-Za-z]+/
  if (!regx.test(value)) {
    return text
  }
}

export function onlyNumber(value: string) {
  if (!/^-?\d*(\.\d+)?$/.test(value)) {
    return 'This field only accepts numbers'
  }
}

export function onlyTrue(value: boolean) {
  if (!value) {
    return 'This field must be accepted'
  }
}

export const onlyTrueDynamic = (text: string) => (value: boolean) => {
  if (!value) {
    return text
  }
}

export function onlyLink(value: string) {
  // const urlRegex = new RegExp(
  //   '^(https?:\\/\\/)?' + // protocol
  //     '((?:[a-z\\d](?:[a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
  //     '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
  //     '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
  //     '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
  //     '(\\#[-a-z\\d_]*)?$',
  //   'i',
  // ) // fragment locator

  const urlRegex = new RegExp(
    /^((https?|ftp):\/\/)?(www.)?(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,
    'i',
  ) // fragment locator

  if (!urlRegex.test(value) && value.length !== 0) {
    return 'Please enter a valid link'
  }
}

export const passwordValidation = (value: string) => {
  const passwordRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/

  if (!passwordRegex.test(value)) {
    return 'Password must contain an uppercase letter, a lowercase letter, a symbol, a number and must be at least 8 letters long'
  }
}

export const passwordValidationDynamic = (text: string) => (value: string) => {
  const passwordRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/

  if (!passwordRegex.test(value)) {
    return text
  }
}

export const phoneNumberValidation =
  (isRequired: boolean = true) =>
  (value: string) => {
    const regex = /^\d{6,14}$/

    if (!isRequired && value === '') {
      return undefined
    }

    if (!regex.test(value)) {
      return 'The phone number is invalid'
    }
  }

export function noEmptyValidation(value: string) {
  if (!/^(?!\s*$).+/.test(value)) {
    return 'This field cannot be empty'
  }
}

export const minNumberValueWithText =
  (minValue: number, isEqual: boolean, valueText: string) =>
  (value: string) => {
    const numericValue = parseFloat(value)

    if (isNaN(numericValue) || /\D|\s/.test(value)) {
      return 'Please enter a numerical value.'
    }

    if (isEqual ? !(numericValue >= minValue) : !(numericValue > minValue)) {
      return valueText.replace('{value}', minValue.toString())
    }
  }

export const maxNumberValueWithText =
  ({
    maxValue,
    isEqual,
    valueText,
  }: {
    maxValue: number
    isEqual?: boolean
    valueText: string
  }) =>
  (value: string) => {
    const numericValue = parseFloat(value)
    const maxValueNumber = parseFloat(
      maxValue.toFixed(Number.isInteger(maxValue) ? 0 : 2),
    )

    if (isNaN(numericValue) || /[^0-9.]/.test(value)) {
      return 'Please enter a numerical value.'
    }

    if (
      isEqual
        ? !(numericValue <= maxValueNumber)
        : !(numericValue < maxValueNumber)
    ) {
      return valueText.replace('{value}', maxValueNumber.toString())
    }
  }

export const amountValidation = (maxAmount: number) => (value: string) => {
  const numberValue = parseFloat(value)

  if (numberValue > maxAmount) {
    return 'Insufficient balance'
  }
}
