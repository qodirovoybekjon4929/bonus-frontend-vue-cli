import axios from "../../axios"

const state = {
    data: {
        buyDialogData: {
            show: false
        },
        userData: {}
    }
}
const getters = {
    userData: (state) => state.data.userData,
    buyDialogData: (state) => state.data.buyDialogData
}
const mutations = {
    HIDE_BUY_DIALOG: (state) => {
        state.data.buyDialogData.show = false
    },
    SHOW_BUY_DIALOG: (state) => {
        state.data.buyDialogData.show = true
    },
    SET_USER_DATA: (state, data) => {
        state.data.userData = data
    },
    SET_BONUS: (state, bonus) => {
        state.data.userData.bonus = bonus
    }
}
const actions = {
    hideBuyDialog({commit}) {
        commit("HIDE_BUY_DIALOG")
    },
    showBuyDialog({commit}) {
        commit("SHOW_BUY_DIALOG")
    },
    async getBonus({commit}, id) {
        try {
            const response = await axios.get("/api/bonuses/get-bonus", {
                params: {
                    client_id: id
                }
            })
            commit("SET_BONUS", response.data.bonus)
        }catch(e) {
            return Promise.reject(e)
        }
    },
    getUserData({commit, dispatch}, data) {
        dispatch("getBonus", data.data.id)
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