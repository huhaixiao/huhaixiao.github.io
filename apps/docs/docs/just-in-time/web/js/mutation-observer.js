function callback(mutationList, observer) {
  mutationList.forEach(mutation => {
    // mutation MutationRecord
    // https://developer.mozilla.org/en-US/docs/Web/API/MutationRecord
    switch (mutation.type) {
      case 'attributes':
        if(mutation.attributeName === 'style') {
          var oldHeight = parseInt(mutation.oldValue.match(/height:.*/)[0].split(':')[1])
          if(oldHeight < 50) {
            debugger
          }
          
          console.log(mutation, 'hhh.mutation.type...')
          // console.log(mutation, 'hhh.mutation...')
          console.trace()
        }
        break
      case 'characterData':
        break
      case 'childList':
        break
    }
  })
}

// MutationObserverInit
// https://developer.mozilla.org/en-US/docs/Web/API/MutationObserverInit
var options = {
  // subtree: true,
  // childList: true,
  attributes: true,
  attributeFilter: ['id', 'class', 'style'],
  attributeOldValue: true,
  // characterData: true,
  // characterDataOldValue: true
}

// https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver
var observe = new MutationObserver(callback)
observe.observe($0, options)
// observe.observe(document.body, options)
// observe.disconnect()

