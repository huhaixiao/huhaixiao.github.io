class Test {
  constructor () {
    this.setup()
    this.setupPromise = new Promise(resolve => {
      this.setupResolve = resolve
    })
  }

  setup() {
    setTimeout(() => {
      this.setupResolve()
    }, 3000)
  }

  async getName() {
    await this.setupPromise()
  }
}