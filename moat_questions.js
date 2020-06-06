/* getFileExtension will take in a string that
 * represents a file name. This function should
 * return a string that represents the file's
 * extension, without the period.
 *
 * Example: "foo.jpg" === "jpg"
 *
 * Return false if input is not a string or
 * if it does not contain a file extension
 */

function getFileExtension(file) {
  if (!typeof file === 'string') {
    return false;
  }

  if (!file.includes('.')) {
    return false;
  }

  let words = file.split('.');

  return words[words.length - 1];
}

/* arraySum will take in an array. This array
 * will contain numbers, strings and/or arrays like itself.
 * Sum all the numbers you find, anywhere in the nest of arrays.
 *
 * Example: arraySum([1, [2], "1"]) === 3
 *
 * Return false if input is not an array, or is empty.
 */

function arraySum(array) {
  if (!Array.isArray(array) || array.length == 0) {
    return false;
  }

  let total = 0;
  let size = array.length;
  let i = 0;

  for (i = 0; i < size; i++) {
    if (typeof array[i] == 'number') {
      total = total + array[i];
    }

    if (Array.isArray(array[i])) {
      total = total + arraySum(array[i]);
    }
  }

  return total;
}

/*
 * Extend the global String object with a toCamelCase() method.
 * When this function is called it will return a new string that
 * is in camel case format.
 *
 * camel case must (1) start with a lowercase letter and
 * (2) the first letter of every new subsequent word has
 * its first letter capitalized and is compounded with the previous word.
 *
 * Example: After calling addToCamelCaseToString() you should be able
 * to do this:
 *
 * "hello world".toCamelCase() === "helloWorld"
 */

function addToCamelCaseToString(input_string) {
  let words = input_string.split(' ');

  let final_array = [];

  final_array.push(words[0].toLowerCase());

  let size = words.length;

  for (let i = 1; i < size; i++) {
    let temp_word = words[i].toLowerCase();
    final_array.push(temp_word.charAt(0).toUpperCase() + temp_word.slice(1));
  }

  let ans = final_array.join('');

  return ans;
}
