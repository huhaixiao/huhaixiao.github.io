/**
 * getter
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get
 * The get syntax binds an object property to a function that will be called when that property is looked up.
 */
const obj = {
  log: ['a', 'b', 'c'],
  get latest() {
    if (this.log.length === 0) {
      return undefined;
    }
    return this.log[this.log.length - 1];
  },
  // lazy getter
  get cache() {
    delete this.cache
    return this.cache = 123
  }
};

console.log(obj.latest);

/**
 * setter
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set
 * The set syntax binds an object property to a function to be called when there is an attempt to set that property.
 */
const language = {
  set current(name) {
    this.log.push(name);
  },
  log: []
};

language.current = 'EN';
language.current = 'FA';

console.log(language.log); // expected output: Array ["EN", "FA"]

// delete 会将getter与setter同时删除
delete obj.property

// define getter setter on exist object
const o = { a: 0 }
Object.defineProperty(o, 'b', {
  get: function () {
    return this.a + 1;
  },
  set: function (value) {
    this.a = value
  }
})