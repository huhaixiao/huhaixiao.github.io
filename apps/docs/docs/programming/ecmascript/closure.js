// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

/**
 * A closure is the combination of a function bundled together (enclosed) 
 * with references to its surrounding state (the lexical environment).
 * 
 * a closure gives you access to an outer function’s scope from an inner function.
 * 
 * closures are created every time a function is created, at function creation time.
 */

// Practical closures
function makeSizer(size) {
  return function() {
    document.body.style.fontSize = size + 'px';
  };
}

var size12 = makeSizer(12);
var size14 = makeSizer(14);
var size16 = makeSizer(16);

document.getElementById('size-12').onclick = size12;
document.getElementById('size-14').onclick = size14;
document.getElementById('size-16').onclick = size16;

// Emulating private methods with closures
var counter = (function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }

  return {
    increment: function() {
      changeBy(1);
    },

    decrement: function() {
      changeBy(-1);
    },

    value: function() {
      return privateCounter;
    }
  };
})();

console.log(counter.value());  // 0.

counter.increment();
counter.increment();
console.log(counter.value());  // 2.

/**
 * Closure Scope Chain
 * - Local Scope (Own scope)
 * - Outer Functions Scope
 * - Global Scope
 */
var e = 10;
function sum(a){
  return function(b){
    return function(c){
      // outer functions scope
      return function(d){
        // local scope
        return a + b + c + d + e;
      }
    }
  }
}

console.log(sum(1)(2)(3)(4)); // log 20

/**
 * Creating closures in loops: A common mistake
 */

//  mistake
for (var i = 0; i < helpText.length; i++) {
  var item = helpText[i];
  document.getElementById(item.id).onfocus = function() {
    showHelp(item.help);
  }
}

// function factory
for (var i = 0; i < helpText.length; i++) {
  var item = helpText[i];
  document.getElementById(item.id).onfocus = makeHelpCallback(item.help);
}

// IIFE
for (var i = 0; i < helpText.length; i++) {
  (function() {
    var item = helpText[i];
    document.getElementById(item.id).onfocus = function() {
      showHelp(item.help);
    }
 })(); // Immediate event listener attachment with the current value of item (preserved until iteration).
}

// let, every closure binds block-scoped variable.
for (let i = 0; i < helpText.length; i++) {
  let item = helpText[i];
  document.getElementById(item.id).onfocus = function() {
    showHelp(item.help);
  }
}

// forEach
helpText.forEach(function(text) {
  document.getElementById(text.id).onfocus = function() {
    showHelp(text.help);
  }
});