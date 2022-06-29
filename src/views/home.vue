<template>
    <div style="width: 100%; height: 100vh">
        <div style="width: 100%; height: 80px; box-shadow: 0px 0px 20px -5px lightgreen; display: flex; padding: 5px; background: lightgreen;"
            class="app-bar">
            <div
                style="width: 300px; height: 100%; margin-right: 5px; display: flex; align-items: center; justify-content: center;">
                <q-input placeholder="Kod..."
                    style="font-size: 30px; padding: 5px; background: #fff; border-radius: 5px;" color="green"
                    borderless clearable v-model="searchForm.code" @keyup.enter="searchUser()" />
            </div>

            <div style="width: 800px; height: 100%; display: flex; align-items: center; justify-content: left;">
                <q-input placeholder="Mijoz F.I.O..."
                    style="font-size: 30px; padding: 5px; background: #fff; border-radius: 5px" color="green" borderless
                    clearable v-model="searchForm.fullname" @keyup.enter="searchUser()" />
            </div>

            <div style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: right;">
                <div style="width: 100px; height: 65px; border-radius: 5px; display: flex; align-items: center; justify-content: center; font-size: 40px; background: lightskyblue; margin-right: 5px; color: #fff; transition: all 0.3s;"
                    class="n-button" @click="searchUser()">
                    <q-icon name="search" />
                </div>

                <div style="width: 100px; height: 65px; border-radius: 5px; display: flex; align-items: center; justify-content: center; font-size: 40px; background: lightcoral; color: #fff; transition: all 0.3s"
                    class="n-button" @click="logOut()">
                    <q-icon name="logout" />
                </div>
            </div>
        </div>

        <div v-if="users.length <= 0" class="no-data">
            <span>Ma'lumotlar mavjud emas</span>
        </div>

        <div v-else class="have-data">
            <div class="have-one-data" v-if="users.length <= 1">
                <div>
                    <div style="width: 500px; height: 200px; transition: all 0.3s;" v-for="(user, index) of users"
                        :key="index" class="one-user">
                        <div
                            style="width: 100%; height: 50%; display: flex; align-items: center; justify-content: center; border: 1px solid rgba(0, 0, 0, 0.068);">
                            <span style="font-weight: bold; font-size: 20px;">{{ user.fio }}</span>
                        </div>
                        <div style="width: 100%; height: 50%; display: flex;">
                            <div
                                style="width: 50%; height: 100%; display: flex; align-items: center; justify-content: center; border: 1px solid rgba(0, 0, 0, 0.068);">
                                <q-icon name="phone" style="font-size: 40px; margin-right: 10px; color: lightgreen" />
                                <span style="font-weight: bold; font-size: 15px;">{{ user.main_phone_number }}</span>
                            </div>

                            <div style="width: 50%; height: 100%">
                                <div
                                    style="width: 100%; height: 50%; display: flex; align-items: center; justify-content: left; border: 1px solid rgba(0, 0, 0, 0.068); padding-left: 30px;">
                                    <q-icon name="badge"
                                        style="margin-right: 10px; font-size: 30px; color: lightskyblue;" />
                                    <span style="font-weight: bold;">{{ user.id }}</span>
                                </div>

                                <div
                                    style="width: 100%; height: 50%; display: flex; align-items: center; justify-content: left; border: 1px solid rgba(0, 0, 0, 0.068); padding-left: 30px;">
                                    <q-icon name="description"
                                        style="margin-right: 10px; font-size: 30px; color: lightskyblue;" />
                                    <span style="font-weight: bold;">{{ user.type }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div v-if="users.length > 1">
                <div>
                    <div>
                        <div style="width: 50%; height: 200px; transition: all 0.3s" v-for="(user, index) of users"
                            :key="index" class="one-user" @click="sendUser(user)">
                            <div
                                style="width: 100%; height: 50%; display: flex; align-items: center; justify-content: center; border: 1px solid rgba(0, 0, 0, 0.068);">
                                <span style="font-weight: bold; font-size: 20px;">{{ user.fio }}</span>
                            </div>
                            <div style="width: 100%; height: 50%; display: flex;">
                                <div
                                    style="width: 50%; height: 100%; display: flex; align-items: center; justify-content: center; border: 1px solid rgba(0, 0, 0, 0.068);">
                                    <q-icon name="phone"
                                        style="font-size: 40px; margin-right: 10px; color: lightgreen" />
                                    <span style="font-weight: bold; font-size: 15px;">{{ user.main_phone_number
                                    }}</span>
                                </div>

                                <div style="width: 50%; height: 100%">
                                    <div
                                        style="width: 100%; height: 50%; display: flex; align-items: center; justify-content: left; border: 1px solid rgba(0, 0, 0, 0.068); padding-left: 30px;">
                                        <q-icon name="badge"
                                            style="margin-right: 10px; font-size: 30px; color: lightskyblue;" />
                                        <span style="font-weight: bold;">{{ user.id }}</span>
                                    </div>

                                    <div
                                        style="width: 100%; height: 50%; display: flex; align-items: center; justify-content: left; border: 1px solid rgba(0, 0, 0, 0.068); padding-left: 30px;">
                                        <q-icon name="description"
                                            style="margin-right: 10px; font-size: 30px; color: lightskyblue;" />
                                        <span style="font-weight: bold;">{{ user.type }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="js">
import { mapGetters } from "vuex"

export default {
    name: "home-page",

    watch: {
        'searchForm.code'() {
            // this.searchForm.fullname = ""
        },
        'searchForm.fullname'() {
            // this.searchForm.code = ""
        }
    },

    computed: {
        ...mapGetters({ users: "homePage/users" })
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
        sendUser(user) {
            this.$store.dispatch("getItemsPage/getUserData", {
                data: user
            })
            this.$router.push("/get-items-page")
        },
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
.one-user:active {
    background: rgba(0, 0, 0, 0.089) !important;
}

.one-user {
    margin-top: 5px;
    border-radius: 5px;
    box-shadow: 0px 0px 15px -13px black;
    padding: 10px;
    -webkit-user-select: none;
    cursor: pointer;
    display: inline-block;
}

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

.have-data {
    width: 100%;
    height: 100%;
}

.have-one-data {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.app-bar {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 1;
}
</style>