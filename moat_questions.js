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
