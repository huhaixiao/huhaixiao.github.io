// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol

// Symbol 枚举
const COLOR = {
  RED: Symbol('red'),
  GREEN: Symbol('green'),
  BLUE: Symbol('blue')
}

// Symbol 私有属性
window.aaa = {};
(function (globalObject) {
  var jquery = Symbol('jquery')
  globalObject[jquery] = {}
})(window.aaa);