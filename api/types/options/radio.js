const Radio = {
  name: '',
  options: [],
  value: '',
  setOptions: function (newOptions) {
    let found = false
    newOptions.map((newOption) => {
      this.options.map((oldOption) => {
        if (oldOption[0] === newOption[0]) {
          found = true
          oldOption[1] = newOption[1]
        }
      })
    })

    if (!found) {
      this.options = this.options.concat(newOptions)
    }
  }
}

export default Radio
