// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  let number1 = array1.join("")
  let modifynombre = Number(number1)
  let number2 = array2.join("")
  let modifynombre2 = Number(number2)
 
  return modifynombre + modifynombre2
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  const str = String(value);
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return str === reversed;
}


/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
   if (input === undefined || input === null || input === '') {
    return 'Required field';
  }

  const num = Number(input);

  if (isNaN(num) || num === 0) {
    return 'Must be a number besides 0';
  }

  return '';
}

