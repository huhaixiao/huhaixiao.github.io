# Assertions

- `^` - Matches the beginning of input
- `$` - Matches the end of input
- `\b` - Matches a word boundary
- `\B` - Matches a non-word boundary
- `x(?=y)` - Lookahead
- `x(?!y)` - Negative lookahead
- `(?<=y)x` - Lookbehind 兼容性差
- `(?<!y)x` - Negative Lookbehind 兼容性差

# Character classes

- `.`
    - Matches any single character except line terminators.
    - Inside a character set, the dot loses its special meaning and matches a literal dot.
    - ES2018 added the s “dotAll” flag, which allows the dot to also match line terminators.
- `\d` - `[0-9]`
- `\D` - `[^0-9]`
- `\w` - `[A-Za-z0-9_]`
- `\W` - `[^A-Za-z0-9_]`
- `\s` - Matches a single white space character
- `\S` - Matches a single character other than white space
- `\uhhhh` - four hexadecimal digits, 兼容好
- `\u{hhhh}` or `\u{hhhhh}`
    - Only when the u flag is set
    - Matches the character with the Unicode value U+hhhh or U+hhhhh
    - 可匹配多位, u flag兼容性差
- `\` - literally interpreted specially, specially interpreted literally.

# Groups and ranges

- `x|y` - Matches either “x” or “y”
- `[xyz]` - A character set
- `[^xyz]` - A negative character set
- `(x)` - ***Capturing group***
- `\n` - “n” is a positive number. A back reference to *Capturing group*
- `(?:x)` - ***Non-capturing group***
- `(?<Name>x)` - ***Named capturing group***
- `\k<Name>` - A back reference to the Named capture group

# Quantifiers

- `x{n}`
- `x{n,}`
- `x{n,}?` - quantifiers default greedy, `?` makes quantifiers “non-greedy”
- `x{n,m}`
- `*` - `{0,}`
- `+` - `{1,}`
- `?` - `{0,1}`

# flags

- `g` - global search
    - `g` will be ignored if `y`
- `y` - sticky search
- `i` - case-insensitive search
- `m` - multi-line search
- `s` - allow . to match new line characters.
- `u` - unicode
- `lastIndex`
    - Is set only flagged `g` or `y`
    - is a read/write integer property
    - specifies the index at which to start the next match
    - JavaScript `RegExp` objects are stateful when they have the global or sticky flags set

# RegExp API

## `RegExp.prototype.test(str)`

- `return` `true` if there is a match

## `RegExp.prototype.exec(str)`

- `[0]` - The full string of characters matched
- `[1], ...[n]` - The parenthesized substring matches, if any.
- `index` - The 0-based index of the match in the string.
- `input` - The original string that was matched against.
- `indices` - first entry represents its start index and the second entry its end index.
- `groups` - Named capture group

# String API

## `String.prototype.match(regexp)`

- If `non-RegExp` object, converted to a `RegExp` by using `new RegExp(regexp)`
- If `g`, return all matching results
- If no `g`, same as `RegExp.exec(str)`

## `String.prototype.replace(regexp, replacerFunction)`

- `match` - The matched substring
- `p1, p2, ...` - The nth string capture group (including named capturing groups)
- `offset`
- `string`

```jsx
function replacer(match, p1, p2, p3, offset, string) {
  // p1 is nondigits, p2 digits, and p3 non-alphanumerics
  return [p1, p2, p3].join(' - ');
}
let newString = 'abc12345#$*%'.replace(/([^\d]*)(\d*)([^\w]*)/, replacer);
console.log(newString);  // abc - 12345 - #$*%
```

## `String.prototype.replaceAll(regexp, replacerFunction)`

## `String.prototype.search(regexp)`

- If `non-RegExp` object, converted to a `RegExp` by using `new RegExp(regexp)`

## `String.prototype.split(regexp)`

- Splitting with a RegExp to include parts of the separator in the result

```jsx
const myString = 'Hello 1 word. Sentence number 2.'
const splits = myString.split(/(\d)/)

console.log(splits) // [ "Hello ", "1", " word. Sentence number ", "2", "." ]
```

# Reference

- [Regexr](https://regexr.com/)
- [Regex Crossword](https://regexcrossword.com/)
- [MDN Regular Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
