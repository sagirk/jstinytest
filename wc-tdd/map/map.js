function map (originalArray, callback, optionalThis) {
  var mapCallback = callback;

  if (optionalThis) {
    mapCallback = callback.bind(optionalThis);
  }

  var mappedArray = [];

  for (var i = 0; i < originalArray.length; i++) {
    if (i in originalArray) {
      mappedArray[i] = mapCallback(originalArray[i], i, originalArray);
    }
  }

  return mappedArray;
};