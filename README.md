Tiniest JavaScript unit testing library
=======================================

This is an in-browser JavaScript library I've been using for years. It's so small and simple that it never occured to me to open source it until I saw all the overly complicated alternatives that are out there.

If you're looking for a JavaScript library full of features or install guides that say things like `grunt`, `npm` or `bower`, you've come to the wrong place. Sorry, this probably isn't for you. Move along now.

If you're looking for a quick way to unit-test a JavaScript function/object in a web-page and don't want to get bogged down in frameworks, you've come to the right place. Take a seat... no scratch that, you'll have everything you need in a few seconds so you may as well remain standing.

*   [Download simpletest.js](https://rawgit.com/sagirk/simpleTest/master/simpletest.js)
*   [Example](https://github.com/sagirk/simpleTest/tree/master/example)

10 second tutorial
------------------

Download [simpletest.js](https://rawgit.com/sagirk/simpleTest/master/simpletest.js) and put it somewhere in your web directory.

Let's say you have a function in `adder.js`:

```javascript
function add(a, b) {
  return a + b;
}
```

Create a test page called `adder-test.html` (you can name it anything). This includes your code under test, simpletest.js and defines your tests:

```html
<script src="simpletest.js"></script>
<script src="adder.js"></script>
<script>
 tests({

   'adds numbers': function() {
     eq(6, add(2, 4));
     eq(6.4, add(2.4, 4));
   },

   'subtracts numbers': function() {
     eq(-2, add(2, -4)); 
   },

 });
</script>
```

Open the page in your browser. Green is good. Red is bad. If it's red, look in the JavaScript console for messages.

![](https://github.com/sagirk/simpleTest/blob/master/screenshots/results-green.png)

**That's it!**

Don't believe me? Here's the [source](https://github.com/sagirk/simpleTest/blob/master/example/forEach.html) and [result](https://rawgit.com/sagirk/simpleTest/master/example/forEach.html).

What else?
==========

If your tests fail, you'll get stack traces:

![](https://github.com/sagirk/simpleTest/blob/master/screenshots/results-red.png)

Function reference
------------------

```javascript
// Force a failure
fail(reason);

// Assert expected === actual
eq(expected, actual)
```

Errm that's it. Now stop wasting time - go test that function.

Projects using simpleTest
-----------------------

*   [Filtrex](https://github.com/joewalnes/filtrex) - A simple, safe, JavaScript Filter Expression compiler ([Tests](https://github.com/joewalnes/filtrex/blob/master/test/filtrex-test.html)) ([Results](https://rawgit.com/joewalnes/filtrex/master/test/filtrex-test.html))