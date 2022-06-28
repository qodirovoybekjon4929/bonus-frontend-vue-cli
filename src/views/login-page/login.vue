<template>
    <div style="width: 100%; height: 100vh; padding: 30px;" @click="inputFocus()">
        <div style="width: 700px; margin: auto">
            <q-img src="../../assets/ishonch-logo/ishonch-logo-horizantal.png" />
        </div>
        <div style="width: 500px; height: 500px; margin: auto; margin-top: 80px">
            <div
                style="width: 100%; display: flex; align-items: center; justify-content: center; height: 70px; font-size: 60px; font-weight: bold; margin-top: 30px;">
                <span>{{ hidePin }}</span>
            </div>
            <div style="width: 100%; display: flex; align-items: center; justify-content: center; margin-top: 20px;">
                <div style="padding: 10px" v-for="(btn, index) of buttons1" :key="index">
                    <div v-if="btn.id"
                        style="width: 100px; height: 100px; display: flex; align-items: center; justify-content: center; font-size: 55px; font-weight: bold; box-shadow: 0px 0px 20px -8px limegreen; border-radius: 5px; transition: all 0.3s; background: limegreen; color: #fff; -webkit-user-select: none"
                        class="n-button" @click="addPin(btn)">
                        <span>
                            {{ btn.id }}
                        </span>
                    </div>

                    <div v-else
                        style="width: 100px; height: 100px; display: flex; align-items: center; justify-content: center; font-size: 55px; font-weight: bold; box-shadow: 0px 0px 20px -8px lightcoral; border-radius: 5px; transition: all 0.3s; background: lightcoral; color: #fff; -webkit-user-select: none"
                        class="n-button-clear" @click="addPin(btn)">
                        <q-icon :name="btn.icon" />
                    </div>
                </div>
            </div>

            <div style="width: 100%; display: flex; align-items: center; justify-content: center;">
                <div style="padding: 10px" v-for="(btn, index) of buttons2" :key="index">
                    <div style="width: 100px; height: 100px; display: flex; align-items: center; justify-content: center; font-size: 55px; font-weight: bold; box-shadow: 0px 0px 20px -8px limegreen; border-radius: 5px; transition: all 0.3s; background: limegreen; color: #fff; -webkit-user-select: none;"
                        class="n-button" @click="addPin(btn)">
                        <span>
                            {{ btn.id }}
                        </span>
                    </div>
                </div>
            </div>

            <div style="width: 100%; display: flex; align-items: center; justify-content: center;">
                <div style="padding: 10px" v-for="(btn, index) of buttons3" :key="index">
                    <div v-if="btn.id"
                        style="width: 100px; height: 100px; display: flex; align-items: center; justify-content: center; font-size: 55px; font-weight: bold; box-shadow: 0px 0px 20px -8px limegreen; border-radius: 5px; transition: all 0.3s; background: limegreen; color: #fff; -webkit-user-select: none"
                        class="n-button" @click="addPin(btn)">
                        <span>
                            {{ btn.id }}
                        </span>
                    </div>

                    <div v-else
                        style="width: 100px; height: 100px; display: flex; align-items: center; justify-content: center; font-size: 55px; font-weight: bold; box-shadow: 0px 0px 20px -5px lightskyblue; border-radius: 5px; transition: all 0.3s; background: lightskyblue; color: #fff; -webkit-user-select: none"
                        class="n-button-login" @click="addPin(btn)">
                        <q-icon :name="btn.icon" />
                    </div>
                </div>
            </div>
        </div>
    </div>

    <q-input v-model="barCode" autofocus @keyup.enter="barCodeFunc()" class="bar-code" ref="autoFocus" />
</template>

<script lang="js">
import { Loading } from 'quasar'
import axios from "../../axios"
import { mapGetters } from "vuex"

export default {
    name: "login-page",

    data() {
        return {
            barCode: "",
            text: "login-page",
            pin: "",
            hidePin: "",
            buttons1: [
                {
                    id: 1
                },
                {
                    id: 2
                },
                {
                    id: 3
                },
                {
                    icon: "cleaning_services"
                }
            ],
            buttons2: [
                {
                    id: 4
                },
                {
                    id: 5
                },
                {
                    id: 6
                },
                {
                    id: 0
                }
            ],
            buttons3: [
                {
                    id: 7
                },
                {
                    id: 8
                },
                {
                    id: 9
                },
                {
                    icon: "login"
                }
            ]
        }
    },

    computed: {
        ...mapGetters({ check: "homePage/checkData" })
    },

    methods: {
        inputFocus() {
            this.$refs.autoFocus.focus()
        },
        async barCodeFunc() {
            try {
                await this.$store.dispatch(`homePage/getCheck`, {
                    data: this.barCode
                })
                let winPrint = window.open("", "ABC")

                await winPrint.document.write(`<div>
                            <div style="width: 250px; height: 300px; border: 1px solid green; margin: auto; text-align: center;">
                                <div style="margin-top: 10px;">
                                    <span style="font-weight: bold;">ISHONCH DO'KONLAR TARMOG'I</span>
                                    <br>
                                    <span style="font-weight: bold; font-size: 30px;">BONUS</span>
                                    <br>
                                    <span>${this.check.date}</span>
                                    <br>
                                    <span style="font-weight: bold;">${this.check.client_fio}</span>
                                    <br>
                                    <br>
                                    <span style="font-weight: bold; font-size: 18px;">${this.check.bonus}</span>
                                    <br>
                                    <br>
                                    <img alt='bar-code' src='https://barcode.tec-it.com/barcode.ashx?data=${this.check.client_id}&code=&translate-esc=true'/>
                                </div>
                            </div>
                        </div>`)
                setTimeout(() => {
                    winPrint.print()
                }, 3000)
                window.close()
            } catch (e) {
                this.$toast.error(e.response?.data?.message || "Xatolik yuz berdi!", {
                    position: "top-right"
                })
            } finally {
                this.barCode = ""
            }
        },
        async addPin(item) {
            if (item.id === 0) {
                this.pin += item.id
                this.hidePin += "*"
            }
            if (item.id) {
                this.pin += item.id
                this.hidePin += "*"
            } else if (item.icon) {
                if (item.icon === "cleaning_services") {
                    this.pin = ""
                    this.hidePin = ""
                } else if (item.icon === "login") {
                    try {
                        Loading.show()
                        const response = await axios.post("/api/consultants/sign-in", {
                            password: this.pin
                        })
                        await localStorage.setItem("access_token", response.data.token)
                        await this.$router.push("/")
                        window.location.reload()
                    } catch (e) {
                        this.$toast.error(e.response?.data?.message || "Xatolik yuz berdi!", {
                            position: "top-right"
                        })
                    } finally {
                        Loading.hide()
                    }
                }
            }
        }
    }
}
</script>

<style>
.n-button:active {
    background: rgba(50, 205, 50, 0.226) !important;
}

.n-button-clear:active {
    background: rgba(240, 128, 128, 0.24) !important;
}

.n-button-login:active {
    background: rgba(135, 206, 250, 0.233) !important;
}

.bar-code {
    position: absolute;
    top: 0;
    width: 0px !important;
    z-index: -30;
}
</style>