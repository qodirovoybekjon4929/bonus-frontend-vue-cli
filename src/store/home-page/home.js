import { Loading } from "quasar"
import axios from "../../axios"

const state = {
    data: {
        users: []
    }
}
const getters = {
    users: (state) => state.data.users
}
const mutations = {
    SET_USER_DATA: (state, data) => {
        state.data.users = data
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
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}