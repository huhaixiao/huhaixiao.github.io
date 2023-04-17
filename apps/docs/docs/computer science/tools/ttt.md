```javascript
var str = 'abcdefghij\naklmnopqrstuvwxyzabc'
var simple = /a/
var simpleGlobal = /a/g
var simpleSticky = /a/y
var simpleMulti = /^a/m
var simpleIgnorecase = /a/i

var wordBoundary = /\bworld/
wordBoundary.test('hello world')
wordBoundary.test('helloworld')

var negativeWordBoundary = /\Bworld/
negativeWordBoundary.test('hello world')
negativeWordBoundary.test('helloworld')

var lookahead = /hello(?=world)/
lookahead.test('hello world')
lookahead.test('helloworld')

var negativeLookahead = /x(?!y)/
negativeLookahead.test('hello world')
negativeLookahead.test('helloworld')

/\d/.test('123')
/\s/.test('\t')
/x|y/.test('abcx')

simple.exec(str)
while(simpleGlobal.exec(str)) {
  simpleGlobal.lastIndex
}
while(simpleSticky.exec(str)) {
  simpleSticky.lastIndex
}
while(simpleGlobal.test(str)) {
  simpleGlobal.lastIndex
}
while(simpleSticky.test(str)) {
  simpleSticky.lastIndex
}
simpleMulti.test(str)
```