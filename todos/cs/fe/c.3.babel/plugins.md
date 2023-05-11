# @babel/plugin-proposal-decorators

## Simple class decorator

```javascript
@annotation
class MyClass{}

function annotation(target) {
  target.annotated = true
}
```

## Class decorator

```javascript
@isTestable(true)
class MyClass{}

function isTestable(value){
  return function decorator(target) {
    target.isTestable = value
  }
}
```