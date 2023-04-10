```jsx
String.prototype.charCodeAt(index)
String.fromCharCode(num)
String.prototype._charAt = function(index) { 
	return this[index]
}
String.prototype._startsWith = function(str) {  
	var reg = new RegExp(`^${str}`)  
	return reg.test(this)
}
String.prototype._endsWith = function(str) {  
	var regExp = new RegExp(`${str}$`)  
	return regExp.test(this)
}
String.prototype.includes(str)
String.prototype.indexOf(str)
String.prototype.slice(num)
// 含头不含尾
String.prototype.substring(indexStart, indexEnd)
// 参数为正则
String.prototype.match(regexp)
String.prototype.replace(regexp)
String.prototype.search(regexp)
String.prototype.split(regexp)
// 可以用正则实现
String.prototype.trim()
String.prototype.trimStart()
String.prototype.trimEnd()

String.fromCharCode(32993) === '胡'
var str = 'text'
str.charAt(0)
var decimalUnicode = str.charCodeAt(0)
var hexUnicode = decimalUnicode.toString(16)

// 可被正则替换
var endsWith = str.endsWith('xt')
endsWith = str.match(/xt$/).length === 1

// 可被正则替换
var index = str.indexOf('t')
index = str.match(/t/).index

var includes = str.includes('ex')
includes = str.match(/ex/).length > 0

var lastIndex = str.lastIndexOf('t')
```