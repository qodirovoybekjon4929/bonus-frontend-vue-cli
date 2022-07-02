import { Loading } from "quasar"
import axios from "../../axios"

const state = {
    data: {
        checkDialogData:  {
            barCode: '',
            show: false,
            data: []
        },
        users: [],
        checkData: {}
    }
}
const getters = {
    users: (state) => state.data.users,
    checkData: (state) => state.data.checkData,
    checkDialogData: (state) => state.data.checkDialogData
}
const mutations = {
    CLEAR_USER: (state) => state.data.users = [],
    HIDE_CHECK_DIALOG: (state) => {
        state.data.checkDialogData.show = false
    },
    SHOW_CHECK_DIALOG: (state) => {
        state.data.checkDialogData.show = true
    },
    SET_USER_DATA: (state, data) => {
        state.data.users = data
    },
    SET_CHECK_DATA: (state, data) => {
        state.data.checkData = data
    }
}
const actions = {
    clearUser({commit}) {
        commit("CLEAR_USER")
    },
    hideCheckDialog({commit}) {
        commit("HIDE_CHECK_DIALOG")
    },
    showCheckDialog({commit}) {
        commit("SHOW_CHECK_DIALOG")
    },
    logOut() {
        Loading.show()
        localStorage.clear()
        window.location.reload()
        Loading.hide()
    },
    async searchUser({commit}, data) {
        try {
            Loading.show()
            const response = await axios.get("/api/client/get-client-for-bonus", {
                params: {
                    client_id: data.form.code,
                    client_fio: data.form.fullname
                }
            })
            commit("SET_USER_DATA", response.data)
        } catch(e) {
            this.$toast.error(e.response.data.message || "Xatolik yuz berdi!", {
                position: "top-right"
            })
        } finally {
            Loading.hide()
        }
    },

    async getCheck({commit}, {data}) {
        try {
            Loading.show()
            const response = await axios.get(`/api/bonuses/get-bonus`, {
                params: {
                    client_id: data
                }
            })
            commit("SET_CHECK_DATA", response.data)
            commit("SHOW_CHECK_DIALOG")
            return Promise.resolve(response.data)
        }catch(e) {
            return Promise.reject(e.response?.data?.message)
        } finally {
            Loading.hide()
        }
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}