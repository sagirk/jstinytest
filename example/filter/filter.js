function filter(originalArray, callback, optionalThis) {
  var filterCallback = callback;

  if (optionalThis) {
    filterCallback = callback.bind(optionalThis);
  }

  var filteredArray = [];

  for (var i = 0; i < originalArray.length; i++) {
    if (filterCallback(originalArray[i], i, originalArray)) {
      filteredArray.push(originalArray[i]);
    }
  }

  return filteredArray;
};