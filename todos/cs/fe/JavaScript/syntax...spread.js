// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

/**
 * ES2015 ES6
 * Spread in function calls
 * - Replace apply
 * - Apply for new operator
 */
function func(x, y, z) {
  console.log(x, y, z, 'hhh.x.y.z')
}
const args = [1, 2, 3]
func(...args)
func.apply(null, args)

const dateFields = [1970, 0, 1]
const d = new Date(...dateFields)

/**
 * ES2015 ES6
 * Spread in array literals
 * - A more powerful array literal
 * - Copy an array
 * - A better way to concate arrays
 */
const parts = ['shoulders', 'knees']
const lyrics = ['head', ...parts, 'and', 'toes']

const arr = [1, 2, 3]
const arrCopy = [...arr]
arrCopy.push(4)

const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]
let arr3 = arr1.concat(arr2)
arr3 = [...arr1, ...arr2]
let arr4 = Array.prototype.unshift.apply(arr1, arr2)
arr4 = [...arr2, ...arr1]

/**
 * ES2018
 * Spread in object literals
 */
// Object.assign triggers getters and setters
const obj1 = { foo: 'bar', x: 42 }
const obj2 = { foo: 'baz', y: 13 }
const cloneObj = { ...obj1 }
const mergedObj = { ...obj1, ...obj2 }
