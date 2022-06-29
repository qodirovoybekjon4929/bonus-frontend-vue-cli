const state = {
    data: {
        userData: {}
    }
}
const getters = {
    userData: (state) => state.data.userData
}
const mutations = {
    SET_USER_DATA: (state, data) => {
        state.data.userData = data
    }
}
const actions = {
    getUserData({commit}, data) {
        commit("SET_USER_DATA", data.data)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}