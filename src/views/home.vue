<template>
    <div style="width: 100%; height: 100vh">
        <div style="width: 100%; height: 80px; box-shadow: 0px 0px 20px -5px lightgreen; display: flex; padding: 5px; background: lightgreen;">
            <div style="width: 300px; height: 100%; margin-right: 5px; display: flex; align-items: center; justify-content: center;">
                <q-input placeholder="Kod..." style="font-size: 30px; padding: 5px; background: #fff; border-radius: 5px;" color="green" borderless clearable v-model="searchForm.code" @keyup.enter="searchUser()"/>
            </div>

            <div style="width: 800px; height: 100%; display: flex; align-items: center; justify-content: left;">
                <q-input placeholder="Mijoz F.I.O..." style="font-size: 30px; padding: 5px; background: #fff; border-radius: 5px" color="green" borderless clearable v-model="searchForm.fullname" @keyup.enter="searchUser()"/>
            </div>

            <div style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: right;">
                <div style="width: 100px; height: 65px; border-radius: 5px; display: flex; align-items: center; justify-content: center; font-size: 40px; background: lightskyblue; margin-right: 5px; color: #fff; transition: all 0.3s;" class="n-button" @click="searchUser()">
                    <q-icon name="search"/>
                </div>

                <div style="width: 100px; height: 65px; border-radius: 5px; display: flex; align-items: center; justify-content: center; font-size: 40px; background: lightcoral; color: #fff; transition: all 0.3s" class="n-button" @click="logOut()">
                    <q-icon name="logout"/>
                </div>
            </div>
        </div>
        
        <div v-if="users.length<= 0" class="no-data">
            <span>Ma'lumotlar mavjud emas</span>
        </div>

        <div v-else class="have-data">
            <pre>{{users}}</pre>
        </div>
    </div>
</template>

<script lang="js">
import {mapGetters} from "vuex"

export default {
    name: "home-page",

    watch: {
        'searchForm.code'() {
            this.searchForm.fullname = ""
        },
        'searchForm.fullname'() {
            this.searchForm.code = ""
        }
    },

    computed: {
        ...mapGetters({users: "homePage/users"})
    },

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

        searchUser() {
            this.$store.dispatch("homePage/searchUser", {
                form: this.searchForm
            })
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
.no-data {
    width: 100%;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>