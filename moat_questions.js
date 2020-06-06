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
