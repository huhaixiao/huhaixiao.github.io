const _listeningTo = Symbol('listeningTo')
const _emitterId = Symbol('emitterId')

const EmitterMixin = {
  on(event, callback, options = {}) {
    this.listenTo(this, event, callback, options)
  },
  once(event, callback, options) {
    let wasFired = false

    const onceCallback = function (event, ...args) {
      if (!wasFired) {
        wasFired = true
        event.off()
        callback.call(this, event, ...args)
      }
    }

    this.listenTo(this, event, onceCallback, options)
  },
  off(event, callback) {
    this.stopListening(this, event, callback)
  },
  listenTo(emitter, event, callback, options = {}) {
    let emitterInfo, eventCallbacks

    // _listeningTo: {
    //   emitterId: {
    //     emitter: emitter,
    //     callbacks: {
    //       event1: [callback1, callback2, ...]
    //       ...
    //     }
    //   },
    //   ...
    // }

    if (!this[_listeningTo]) {
      this[_listeningTo] = {}
    }

    const emitters = this[_listeningTo]

    if(!_getEmitterId(emitter)) {
      _setEmitterId(emitter)
    }
  }
}