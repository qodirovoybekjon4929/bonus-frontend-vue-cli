import { Loading } from "quasar"

const state = {
    data: {
        storeMessage: "salom-store"
    }
}
const getters = {
    storeMessage: (state) => state.data.storeMessage
}
const muattions = {}
const actions = {
    logOut() {
        Loading.show()
        localStorage.clear()
        window.location.reload()
        Loading.hide()
    }
}

export default {
    namespaced: true,
    state,
    getters,
    muattions,
    actions
}