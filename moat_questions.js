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
