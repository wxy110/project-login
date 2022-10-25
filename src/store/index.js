const store = {
    state: {},
    setAction(stateKey, newValue) {
        this.state[stateKey] = newValue
        console.log(this.state)

    },
    clearAction(stateKey) {
        this.state[stateKey] = ''
        console.log(this.state)

    },
    getAction(stateKey) {
        console.log(this.state)
        return this.state[stateKey]
    }
}

// export {store}
// import {store}
// store.setAction('message', 1)
export default store