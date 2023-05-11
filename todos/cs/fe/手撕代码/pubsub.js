const PubSub = {
  id: 1,
  messages: {},
  subscribe(msg, func) {
    this.messages[msg] = this.messages[msg] || {}
    const token = this.id++
    this.messages[msg][token] = func

    return token
  },
  unsubscribe(token) {
    for (const msg in this.messages) {
      delete this.messages[msg][token]
    }
  },
  subscribeOnce(msg, func) {
    const self = this
    const token = this.subscribe(msg, function () {
      self.unsubscribe(token)
      func.apply(this, arguments)
    })
  },
  publish(msg, ...data) {
    if (!this.messages[msg]) return
    for (const message in this.messages) {
      for (const token in this.messages[message]) {
        this.messages[message][token](...data)
      }
    }
  }
}