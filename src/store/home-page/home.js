import { Loading } from "quasar"
import axios from "../../axios"

const state = {
    data: {
        users: [],
        checkData: {}
    }
}
const getters = {
    users: (state) => state.data.users,
    checkData: (state) => state.data.checkData
}
const mutations = {
    SET_USER_DATA: (state, data) => {
        state.data.users = data
    },
    SET_CHECK_DATA: (state, data) => {
        state.data.checkData = data
    }
}
const actions = {
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
        alert(data)
        try {
            Loading.show()
            const response = await axios.get(`/api/bonuses/get-bonus/${data}`)
            commit("SET_CHECK_DATA", response.data)
            return Promise.resolve(response.data)
        }catch(e) {
            this.$toast.error(e.response?.data?.message || "Xatolik yuz berdi!", {
                position: "top-right"
            })
            return Promise.reject(e)
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