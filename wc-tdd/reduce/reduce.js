function reduce (array, callback, initialValue) {
  var accumulator;

  if (typeof initialValue !== 'undefined') {
    accumulator = initialValue;

    for (var i = 0; i < array.length; i++) {
      if (i in array) {
        accumulator = callback(accumulator, array[i], i, array);
      }
    }
  } else {
    firstAssignedIndex = array.findIndex(function (element) {
      return element !== undefined;
    });

    accumulator = array[firstAssignedIndex];

    for (var i = firstAssignedIndex+1; i < array.length; i++) {
      if (i in array) {
        accumulator = callback(accumulator, array[i], i, array);
      }
    }
  }

  return accumulator;
};