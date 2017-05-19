function forEach (array, callback, optionalThisObject) {
  var forEachCallback = callback;

  if (optionalThisObject) {
    forEachCallback = callback.bind(optionalThisObject);
  }

  for (var i = 0; i < array.length; i++) {
    if (i in array) {
      forEachCallback(array[i], i, array);
    }
  }
};