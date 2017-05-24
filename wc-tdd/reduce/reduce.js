function reduce(array, callback, initialValue) {
  var assignedIndexes = Object.keys(array);
  var startingIndex = assignedIndexes[0];
  var accumulator = initialValue;
  // Persist length of input array at the beginning to safeguard 
  // against it being modified later by the callback, etc.
  var length = array.length;

  // No initialValue
  if (arguments.length < 3) {
    if (!assignedIndexes.length) throw new TypeError('Reduce of empty array with no initial value');

    // TODO: Get a code review from Gordon to validate if skipping the while
    // loop in favor of a non-loop soultion was a better approach.

    // while (startingIndex in array === false && startingIndex < length) {
    //   startingIndex++;
    // }

    // if (assignedIndexes.length === 1) {
    //   var onlyIndex = assignedIndexes[0];
    //   var onlyElement = array[onlyIndex];
    //   return onlyElement;
    // }

    accumulator = array[startingIndex];

    if (assignedIndexes.length === 1) return accumulator;

    startingIndex++;

  // Has initialValue
  } else {
    if (!assignedIndexes.length) return accumulator;
  }

  for (var i = startingIndex; i < length; i++) {
    if (i in array) {
      accumulator = callback(accumulator, array[i], i, array);
    }
  }

  return accumulator;
}