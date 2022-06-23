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
    getData() {
        alert(process.env.VUE_APP_BASE_URL)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    muattions,
    actions
}