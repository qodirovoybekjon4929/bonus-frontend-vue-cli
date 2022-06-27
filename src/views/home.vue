<template>
    <div>
        <div style="width: 100%; height: 80px; box-shadow: 0px 0px 20px -5px lightgreen; display: flex; padding: 5px; background: lightgreen;">
            <div style="width: 300px; height: 100%; margin-right: 5px; display: flex; align-items: center; justify-content: center;">
                <q-input placeholder="Kod..." style="font-size: 30px; padding: 5px; background: #fff; border-radius: 5px;" color="green" borderless clearable v-model="searchForm.code"/>
            </div>

            <div style="width: 800px; height: 100%; display: flex; align-items: center; justify-content: center;">
                <q-input placeholder="Mijoz F.I.O..." style="font-size: 30px; padding: 5px; background: #fff; border-radius: 5px" color="green" borderless clearable v-model="searchForm.fullname"/>
            </div>

            <div style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: right;">
                <div style="width: 100px; height: 65px; border-radius: 5px; display: flex; align-items: center; justify-content: center; font-size: 40px; background: lightskyblue; margin-right: 5px; color: #fff; transition: all 0.3s;" class="n-button">
                    <q-icon name="search"/>
                </div>

                <div style="width: 100px; height: 65px; border-radius: 5px; display: flex; align-items: center; justify-content: center; font-size: 40px; background: lightcoral; color: #fff; transition: all 0.3s" class="n-button" @click="logOut()">
                    <q-icon name="logout"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="js">
import axios from 'axios'
import { Loading } from 'quasar'


export default {
    name: "home-page",

    data() {
        return {
            text: "home-page",
            searchForm: {
                code: "",
                fullname: ""
            }
        }
    },

    methods: {
        async logOut() {
            this.$store.dispatch("homePage/logOut")
        },

        async searchUser() {
            try {
                Loading.show()
                const response = await axios.get("/api/clients/get-client", {
                    params: {
                        client_id: this.searchForm.code,
                        client_fio: this.searchForm.fullname
                    }
                })
                console.log(response)
            } catch(e) {
                this.$toast.error(e.response.data.message || "Xatolik yuz berdi!", {
                    position: "top-right"
                })
            } finally {
                Loading.hide()
            }
        }
    }
}
</script>

<style>
.n-button:active {
    background: rgba(0, 0, 0, 0.13) !important;
}
.search-input:focus {
    outline: none !important;
}
</style>