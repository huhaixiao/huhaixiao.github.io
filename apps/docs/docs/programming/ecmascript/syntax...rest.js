// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters

// The rest parameter syntax allows us to represent an indefinite number of arguments as an array.
function myFun(a,  b, ...manyMoreArgs) {
  console.log("a", a)
  console.log("b", b)
  console.log("manyMoreArgs", manyMoreArgs)
}

myFun("one", "two", "three", "four", "five", "six")

/**
 * Difference between rest parameters and the arguments object
 * - rest parameters are only the ones that haven't been given a separate name
 * - arguments object contains all arguments passed to the function;
 * 
 * - arguments object is not a real array
 * - arguments object has additional functionality specific to itself (like the callee property).
 */

/**
 * From arguments to an array
 */

function f(a, b) {

  let normalArray = Array.prototype.slice.call(arguments)
  // -- or --
  let normalArray = [].slice.call(arguments)
  // -- or --
  let normalArray = Array.from(arguments)

  let first = normalArray.shift()  // OK, gives the first argument
  let first = arguments.shift()    // ERROR (arguments is not a normal array)
}

function f(...args) {
  let normalArray = args
  let first = normalArray.shift() // OK, gives the first argument
}