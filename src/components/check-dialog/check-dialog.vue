<template>
    <div>
        <q-dialog v-model="checkDialogData.show" persistent style="width: 550px">
            <q-card style="width: 550px; min-height: 200px; padding: 15px;">
                <div style="width: 100%; text-align: center;">
                    <span style="font-weight: bold; font-size: 30px;">{{ checkData.client_fio }}</span>
                </div>
                <div style="width: 100%; min-height: 100px; display: flex; margin-top: 10px;">
                    <div style="width: 50%; display: flex; align-items: center; justify-content: center;">
                        <q-icon name="call" style="font-size: 40px; color: lightseagreen; margin-right: 10px;" /> <span
                            style="font-size: 20px;">{{
                                    checkData.main_phone_number
                            }}</span>
                    </div>

                    <div style="width: 50%; display: flex; align-items: center; justify-content: center;">
                        <q-icon name="badge" style="font-size: 40px; color: lightgreen; margin-right: 10px;" /> <span
                            style="font-size: 20px;">{{
                                    checkData.client_id
                            }}</span>
                    </div>
                </div>

                <div style="width: 100%; display: flex; align-items: center; justify-content: center;">
                    <span style="font-weight: bold; font-size: 60px;">
                        {{ parseInt(checkData.bonus).toLocaleString().split(",").join(" ") }}
                    </span>
                </div>

                <div
                    style="width: 100%; display: flex; align-items: center; justify-content: center; margin-top: 30px;">
                    <div style="width: 50%; display: flex; align-items: center; justify-content: center;">
                        <div style="width: 200px; height: 100px; display: flex; align-items: center; justify-content: center; background: lightskyblue; border-radius: 5px; color: #fff; transition: all 0.3s;"
                            class="print-btn" @click="getCheck()">
                            <q-icon name="print" style="font-size: 60px;" />
                        </div>
                    </div>

                    <div style="width: 50%; display: flex; align-items: center; justify-content: center">
                        <div style="width: 200px; height: 100px; display: flex; align-items: center; justify-content: center; background: lightgreen; border-radius: 5px; color: #fff; transition: all 0.3s"
                            class="check-btn" @click="checkDialogData.show = false">
                            <q-icon name="done" style="font-size: 60px;" />
                        </div>
                    </div>
                </div>
            </q-card>
        </q-dialog>
    </div>
</template>

<script lang="js">
import { mapGetters } from 'vuex'

export default {
    name: "check-dialog",

    computed: {
        ...mapGetters({ checkDialogData: "homePage/checkDialogData" }),
        ...mapGetters({ checkData: "homePage/checkData" })
    },

    data() {
        return {
            name: "dialog"
        }
    },

    methods: {
        async getCheck() {
            try {
                let winPrint = window.open("", "ABC")

                await winPrint.document.write(`<div>
                            <div style="width: 250px; height: 300px; border: 1px solid green; margin: auto; text-align: center;">
                                <div style="margin-top: 10px;">
                                    <span style="font-weight: bold;">ISHONCH DO'KONLAR TARMOG'I</span>
                                    <br>
                                    <span style="font-weight: bold; font-size: 30px;">BONUS</span>
                                    <br>
                                    <span>${this.checkData.date}</span>
                                    <br>
                                    <span style="font-weight: bold;">${this.checkData.client_fio}</span>
                                    <br>
                                    <br>
                                    <span style="font-weight: bold; font-size: 18px;">${parseInt(this.checkData.bonus).toLocaleString().split(",").join(" ").toString()}</span>
                                    <br>
                                    <br>
                                    <img alt='bar-code' src='https://barcode.tec-it.com/barcode.ashx?data=${this.checkData.client_id}&code=&translate-esc=true'/>
                                </div>
                            </div>
                        </div>`)
                setTimeout(() => {
                    winPrint.print()
                }, 3000)
                this.checkDialogData.show = false
            } catch (e) {
                this.$toast.error(e.response?.data?.message || "Xatolik yuz berdi!", {
                    position: "top-right"
                })
            }
        }
    }
}
</script>

<style>
.print-btn:active {
    background: rgba(135, 206, 250, 0.233) !important;
}

.check-btn:active {
    background: rgba(144, 238, 144, 0.226) !important;
}
</style>