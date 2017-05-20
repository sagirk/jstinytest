function reduce (array, callback, initialValue) {
  var accumulator;

  if (typeof initialValue !== 'undefined') {
    accumulator = initialValue;

    for (var i = 0; i < array.length; i++) {
      callback(accumulator, array[i], i, array);
    }
  } else {
    accumulator = array[0];

    for (var i = 1; i < array.length; i++) {
      callback(accumulator, array[i], i, array);
    }
  }

  return accumulator;
};