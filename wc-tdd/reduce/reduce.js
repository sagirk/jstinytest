function reduce(array, callback, initialValue) {
  var startingIndex = 0;
  var resultSoFar = initialValue;
  var arrayIndexes = Object.keys(array);
  // Persist length of input array at the beginning to safeguard 
  // against it being modified later by the callback, etc.
  var length = array.length;

  // No initialValue
  if (arguments.length < 3) {
    if (!arrayIndexes.length) throw new TypeError('Reduce of empty array with no initial value');

    if (arrayIndexes.length === 1) {
      var onlyIndex = arrayIndexes[0];
      var onlyElement = array[onlyIndex];
      return onlyElement;
    }

    while (startingIndex in array === false && startingIndex < length) {
      startingIndex++;
    }

    resultSoFar = array[startingIndex];
    startingIndex++;

  // Has initialValue
  } else {
    if (!arrayIndexes.length) return initialValue;
  }

  for (var i = startingIndex; i < length; i++) {
    if (i in array) {
      resultSoFar = callback(resultSoFar, array[i], i, array);
    }
  }

  return resultSoFar;
}