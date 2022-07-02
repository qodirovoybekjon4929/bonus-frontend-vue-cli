<template>
    <div>
        <div
            style="width: 100%; height: 80px; position: -webkit-sticky; position: sticky; top: 0;  box-shadow: 0px 0px 20px -5px lightgreen; display: flex; padding: 5px; background: lightgreen; z-index: 1">
            <div style="width: 50%;">
                <div
                    style="width: 100%; height: 50%; display: flex; align-items: center; justify-content: center; border: 1px solid rgba(255, 255, 255, 0.300)">
                    <span style="font-weight: bold; font-size: 20px; color: #fff;">
                        {{ userData.fio }}
                    </span>
                </div>

                <div style="width: 100%; height: 100%; display: flex;">
                    <div
                        style="width: 50%; height: 50%; display: flex; align-items: center; justify-content: center; border: 1px solid rgba(255, 255, 255, 0.300)">
                        <q-icon name="phone" style="font-size: 20px; color: #fff; margin-right: 10px;" />
                        <span style="font-size: 15px; color: #fff;">
                            {{ userData.main_phone_number }}
                        </span>
                    </div>
                    <div
                        style="width: 50%; height: 50%; display: flex; align-items: center; justify-content: center; border: 1px solid rgba(255, 255, 255, 0.300);">
                        <q-icon name="person" style="font-size: 20px; color: #fff; margin-right: 10px;" />
                        <span style="font-size: 15px; color: #fff;">
                            {{ userData.id }}
                        </span>
                    </div>
                </div>
            </div>

            <div
                style="width: 50%; display: flex; align-items: center; justify-content: center; border: 1px solid rgba(255, 255, 255, 0.300);">
                <span style="font-weight: bold; font-size: 30px; color: #fff;">
                    {{ parseInt(userData.bonus).toLocaleString().split(",").join(" ").toString() }}
                </span>
            </div>
        </div>

        <!-- page -->
        <div style="width: 100%; height: 100vh; padding: 10px;">
            <q-table style="box-shadow: 0px 0px 15px -12px black;" title="Tovar"
                no-data-label="Ma'lumotlar mavjud emas!" :columns="columns" :rows="buyTable" hide-pagination />

            <div>

            </div>
        </div>
        <!-- page -->
    </div>
    <div class="bottom-app-bar">
        <div style="width: 50%; height: 100%; display: flex; align-items: center; justify-content: left;">
            <div style="width: 100px; height: 65px; border-radius: 5px; display: flex; align-items: center; justify-content: center; font-size: 40px; background: lightskyblue; color: #fff; transition: all 0.3s; margin-right: 10px"
                class="n-button" @click="goBuyPage()">
                <q-icon name="store" />
            </div>

            <div style="width: 100px; height: 65px; border-radius: 5px; display: flex; align-items: center; justify-content: center; font-size: 40px; background: red; color: #fff; transition: all 0.3s; margin-right: 10px"
                class="n-button" @click="clearBuyData()">
                <q-icon name="delete_sweep" />
            </div>

            <div style="width: 100px; height: 65px; border-radius: 5px; display: flex; align-items: center; justify-content: center; font-size: 40px; background: lightseagreen; color: #fff; transition: all 0.3s"
                class="n-button" @click="showConfirmDialog()">
                <q-icon name="done" />
            </div>
        </div>

        <div style="width: 50%; height: 100%; display: flex; align-items: center; justify-content: right;">
            <div style="width: 100px; height: 65px; border-radius: 5px; display: flex; align-items: center; justify-content: center; font-size: 40px; background: lightcoral; color: #fff; transition: all 0.3s"
                class="n-button" @click="logOutDialog = true">
                <q-icon name="logout" />
            </div>
        </div>
    </div>
    <div style="width: 100%; height: 100%;">
        <q-dialog v-model="buyDialogData.show" persistent full-width>
            <q-card style="width: 100%; min-height: 100%;">

                <!-- top-app-bar -->

                <div
                    style="width: 100%; height: 80px; position: -webkit-sticky; position: sticky; top: 0;  box-shadow: 0px 0px 20px -5px lightgreen; display: flex; padding: 5px; background: lightgreen; z-index: 1">
                    <div style="width: 50%;">
                        <div
                            style="width: 100%; height: 50%; display: flex; align-items: center; justify-content: center; border: 1px solid rgba(255, 255, 255, 0.300)">
                            <span style="font-weight: bold; font-size: 20px; color: #fff;">
                                {{ userData.fio }}
                            </span>
                        </div>

                        <div style="width: 100%; height: 100%; display: flex;">
                            <div
                                style="width: 50%; height: 50%; display: flex; align-items: center; justify-content: center; border: 1px solid rgba(255, 255, 255, 0.300)">
                                <q-icon name="phone" style="font-size: 20px; color: #fff; margin-right: 10px;" />
                                <span style="font-size: 15px; color: #fff;">
                                    {{ userData.main_phone_number }}
                                </span>
                            </div>
                            <div
                                style="width: 50%; height: 50%; display: flex; align-items: center; justify-content: center; border: 1px solid rgba(255, 255, 255, 0.300);">
                                <q-icon name="person" style="font-size: 20px; color: #fff; margin-right: 10px;" />
                                <span style="font-size: 15px; color: #fff;">
                                    {{ userData.id }}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div
                        style="width: 50%; display: flex; align-items: center; justify-content: center; border: 1px solid rgba(255, 255, 255, 0.300);">
                        <span style="font-weight: bold; font-size: 30px; color: #fff;">
                            {{ parseInt(userData.bonus).toLocaleString().split(",").join(" ").toString() }}
                        </span>
                    </div>
                </div>

                <!-- top-app-bar -->

                <div style="width: 100%; height: 100vh;">
                    <div style="width: 100%; height: 500px; display: flex">
                        <div style="width: 60%; height: 100%; padding: 5px; margin-top: 25px; margin-left: 20px;">
                            <div style="width: 100%; height: 80px; border: 1px solid lightgreen; border-radius: 5px;">
                                <q-input outlined placeholder="Tovar kodi" v-model="item.itemCode.txt"
                                    @click="activeTxt('code')"
                                    style="font-weight: bold; font-size: 35px; padding: 10px;" />
                            </div>

                            <div v-if="item.itemCode.item.residue">
                                <div
                                    style="width: 100%; height: 150px; border: 1px solid rgba(0, 0, 0, 0.1); border-radius: 5px; margin-top: 10px; display: flex; align-items: center; justify-content: center; padding: 10px;">
                                    <span style="font-weight: bold; font-size: 40px;">
                                        {{ item.itemCode.item.product_variant_title || 'Tovar nomi' }}
                                    </span>
                                </div>
                                <div style="width: 100%; height: 50px; margin-top: 20px; display: flex">
                                    <div
                                        style="width: 50%; height: 100%; display: flex; align-items: center; justify-content: left; border: 1px solid rgba(0, 0, 0, 0.1); border-radius: 5px; margin-right: 5px;">
                                        <span style="font-weight: bold; font-size: 20px; margin-left: 5px;">
                                            Qoldiq: {{ item.itemCode.item.residue || "" }}
                                        </span>
                                    </div>

                                    <div
                                        style="width: 50%; height: 100%; display: flex; align-items: center; justify-content: left; border: 1px solid rgba(0, 0, 0, 0.1); border-radius: 5px;">
                                        <span style="font-weight: bold; font-size: 20px; margin-left: 5px;">
                                            Narxi: {{
                                                    parseInt(item.itemCode.item.selling_price)
                                                        .toLocaleString()
                                                        .split(",")
                                                        .join(' ')
                                                    || ""
                                            }}
                                        </span>
                                    </div>
                                </div>

                                <div style="width: 100%; height: 150px; margin-top: 20px; display: flex;">
                                    <div
                                        style="width: 40%; height: 100%; display: flex; align-items: center; justify-content: center; border: 1px solid rgba(0, 0, 0, 0.1); border-radius: 5px; margin-right: 5px;">
                                        <q-input outlined placeholder="Miqdori"
                                            style="font-weight: bold; font-size: 35px; padding: 10px;"
                                            v-model="item.itemLength.txt" @click="activeTxt('length')" />
                                    </div>
                                    <div
                                        style="width: 60%; height: 100%; display: flex; align-items: center; justify-content: center; border: 1px solid rgba(0, 0, 0, 0.1); border-radius: 5px;">
                                        <span style="font-weight: bold; font-size: 40px;">
                                            {{ parseInt(item.itemCode.item.fullSum)
                                                    .toLocaleString()
                                                    .split(",")
                                                    .join(" ")
                                                    .toString()
                                                    || "Summasi"
                                            }}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div style="width: 40%; height: 100%; padding: 5px; -webkit-user-select: none;">
                            <div
                                style="width: 100%; height: 20%; display: flex; align-items: center; justify-content: center; margin-top: 10px">
                                <div class="n-active-btn" @click="clickNum(1)"
                                    style="width: 100px; height: 100px; margin: 5px; background: lightgreen; color: #fff; display: flex; align-items: center; justify-content: center; border-radius: 5px; font-weight: bold; font-size: 30px; box-shadow: 0px 0px 20px -5px lightgreen;">
                                    <span>1</span>
                                </div>

                                <div class="n-active-btn" @click="clickNum(2)"
                                    style="width: 100px; height: 100px; margin: 5px; background: lightgreen; color: #fff; display: flex; align-items: center; justify-content: center; border-radius: 5px; font-weight: bold; font-size: 30px; box-shadow: 0px 0px 20px -5px lightgreen;">
                                    <span>2</span>
                                </div>

                                <div class="n-active-btn" @click="clickNum(3)"
                                    style="width: 100px; height: 100px; margin: 5px; background: lightgreen; color: #fff; display: flex; align-items: center; justify-content: center; border-radius: 5px; font-weight: bold; font-size: 30px; box-shadow: 0px 0px 20px -5px lightgreen;">
                                    <span>3</span>
                                </div>
                            </div>

                            <div
                                style="width: 100%; height: 20%; display: flex; align-items: center; justify-content: center; margin-top: 10px">
                                <div class="n-active-btn" @click="clickNum(4)"
                                    style="width: 100px; height: 100px; margin: 5px; background: lightgreen; color: #fff; display: flex; align-items: center; justify-content: center; border-radius: 5px; font-weight: bold; font-size: 30px; box-shadow: 0px 0px 20px -5px lightgreen;">
                                    <span>4</span>
                                </div>

                                <div class="n-active-btn" @click="clickNum(5)"
                                    style="width: 100px; height: 100px; margin: 5px; background: lightgreen; color: #fff; display: flex; align-items: center; justify-content: center; border-radius: 5px; font-weight: bold; font-size: 30px; box-shadow: 0px 0px 20px -5px lightgreen;">
                                    <span>5</span>
                                </div>

                                <div class="n-active-btn" @click="clickNum(6)"
                                    style="width: 100px; height: 100px; margin: 5px; background: lightgreen; color: #fff; display: flex; align-items: center; justify-content: center; border-radius: 5px; font-weight: bold; font-size: 30px; box-shadow: 0px 0px 20px -5px lightgreen;">
                                    <span>6</span>
                                </div>
                            </div>

                            <div
                                style="width: 100%; height: 20%; display: flex; align-items: center; justify-content: center; margin-top: 10px">
                                <div class="n-active-btn" @click="clickNum(7)"
                                    style="width: 100px; height: 100px; margin: 5px; background: lightgreen; color: #fff; display: flex; align-items: center; justify-content: center; border-radius: 5px; font-weight: bold; font-size: 30px; box-shadow: 0px 0px 20px -5px lightgreen;">
                                    <span>7</span>
                                </div>

                                <div class="n-active-btn" @click="clickNum(8)"
                                    style="width: 100px; height: 100px; margin: 5px; background: lightgreen; color: #fff; display: flex; align-items: center; justify-content: center; border-radius: 5px; font-weight: bold; font-size: 30px; box-shadow: 0px 0px 20px -5px lightgreen;">
                                    <span>8</span>
                                </div>

                                <div class="n-active-btn" @click="clickNum(9)"
                                    style="width: 100px; height: 100px; margin: 5px; background: lightgreen; color: #fff; display: flex; align-items: center; justify-content: center; border-radius: 5px; font-weight: bold; font-size: 30px; box-shadow: 0px 0px 20px -5px lightgreen;">
                                    <span>9</span>
                                </div>
                            </div>

                            <div
                                style="width: 100%; height: 20%; display: flex; align-items: center; justify-content: center; margin-top: 10px">
                                <div class="n-active-btn" @click="clickNum('.')"
                                    style="width: 100px; height: 100px; margin: 5px; background: lightgreen; color: #fff; display: flex; align-items: center; justify-content: center; border-radius: 5px; font-weight: bold; font-size: 30px; box-shadow: 0px 0px 20px -5px lightgreen;">
                                    <span>.</span>
                                </div>

                                <div class="n-active-btn" @click="clickNum(0)"
                                    style="width: 100px; height: 100px; margin: 5px; background: lightgreen; color: #fff; display: flex; align-items: center; justify-content: center; border-radius: 5px; font-weight: bold; font-size: 30px; box-shadow: 0px 0px 20px -5px lightgreen;">
                                    <span>0</span>
                                </div>

                                <div class="n-active-btn" @click="delClickNum()"
                                    style="width: 100px; height: 100px; margin: 5px; background: lightcoral; color: #fff; display: flex; align-items: center; justify-content: center; border-radius: 5px; font-weight: bold; font-size: 40px; box-shadow: 0px 0px 20px -5px lightcoral;">
                                    <q-icon name="backspace" />
                                </div>
                            </div>

                            <div
                                style="width: 100%; height: 20%; display: flex; align-items: center; justify-content: center; margin-top: 10px">
                                <div class="n-active-btn" @click="clearObj()"
                                    style="width: 100px; height: 100px; margin: 5px; background: lightsalmon; color: #fff; display: flex; align-items: center; justify-content: center; border-radius: 5px; font-weight: bold; font-size: 40px; box-shadow: 0px 0px 20px -5px lightsalmon;">
                                    <q-icon name="cleaning_services" />
                                </div>

                                <div style="width: 100px; height: 100px; margin: 5px;">
                                </div>

                                <div class="n-active-btn" @click="searchItem()"
                                    style="width: 100px; height: 100px; margin: 5px; background: lightblue; color: #fff; display: flex; align-items: center; justify-content: center; border-radius: 5px; font-weight: bold; font-size: 40px; box-shadow: 0px 0px 20px -5px lightskyblue;">
                                    <q-icon name="search" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- bottom-app-bar -->
                <div class="bottom-app-bar">
                    <div style="width: 50%; height: 100%; display: flex; align-items: center; justify-content: left;">
                        <div style="width: 100px; height: 65px; border-radius: 5px; display: flex; align-items: center; justify-content: center; font-size: 40px; background: #fff; color: lightgreen; transition: all 0.3s"
                            class="n-button" @click="checkData()">
                            <q-icon name="done" />
                        </div>
                    </div>

                    <div style="width: 50%; height: 100%; display: flex; align-items: center; justify-content: right;">
                        <div style="width: 100px; height: 65px; border-radius: 5px; display: flex; align-items: center; justify-content: center; font-size: 40px; background: lightcoral; color: #fff; transition: all 0.3s"
                            class="n-button" @click="closeBuyDialog()">
                            <q-icon name="close" />
                        </div>
                    </div>
                </div>
                <!-- bottom-app-bar -->

            </q-card>
        </q-dialog>

        <q-dialog v-model="clearDialog" persistent>
            <q-card style="width: 500px; height: 300px">
                <div style="width: 100%; height: 200px; padding: 10px; ">
                    <div
                        style="width: 100%; height: 100%; border: 1px solid rgba(0, 0, 0, 0.1); border-radius: 5px; padding: 5px">
                        <span style="font-weight: bold; font-size: 30px;">
                            Kiritilgan barcha ma'lumotlarni o'chirishga rozimisiz?
                        </span>
                    </div>
                </div>
                <div
                    style="position: absolute; width: 100%; height: 80px; bottom: 0; display: flex; align-items: center; justify-content: right">
                    <div style="width: 100px; height: 65px; border-radius: 5px; display: flex; align-items: center; justify-content: center; font-size: 40px; background: lightgreen; color: #fff; transition: all 0.3s; margin-right: 10px;"
                        class="n-button" @click="clearData()">
                        <q-icon name="done" />
                    </div>

                    <div style="width: 100px; height: 65px; border-radius: 5px; display: flex; align-items: center; justify-content: center; font-size: 40px; background: lightcoral; color: #fff; transition: all 0.3s; margin-right: 10px;"
                        class="n-button" @click="clearDialog = false">
                        <q-icon name="close" />
                    </div>
                </div>
            </q-card>
        </q-dialog>

        <q-dialog v-model="confirmDialog" persistent>
            <q-card style="width: 500px; height: 300px">
                <div style="width: 100%; height: 200px; padding: 10px; ">
                    <div
                        style="width: 100%; height: 100%; border: 1px solid rgba(0, 0, 0, 0.1); border-radius: 5px; padding: 5px">
                        <span style="font-weight: bold; font-size: 30px;">
                            Kiritilgan barcha ma'lumotlarni tasdiqlaysizmi?
                        </span>
                    </div>
                </div>
                <div
                    style="position: absolute; width: 100%; height: 80px; bottom: 0; display: flex; align-items: center; justify-content: right">
                    <div style="width: 100px; height: 65px; border-radius: 5px; display: flex; align-items: center; justify-content: center; font-size: 40px; background: lightgreen; color: #fff; transition: all 0.3s; margin-right: 10px;"
                        class="n-button" @click="confirmItem(this.buyTable, this.userData.id)">
                        <q-icon name="done" />
                    </div>

                    <div style="width: 100px; height: 65px; border-radius: 5px; display: flex; align-items: center; justify-content: center; font-size: 40px; background: lightcoral; color: #fff; transition: all 0.3s; margin-right: 10px;"
                        class="n-button" @click="confirmDialog = false">
                        <q-icon name="close" />
                    </div>
                </div>
            </q-card>
        </q-dialog>

        <q-dialog v-model="logOutDialog" persistent>
            <q-card style="width: 500px; height: 300px">
                <div style="width: 100%; height: 200px; padding: 10px; position: relative;">
                    <div
                        style="width: 100%; height: 100%; border: 1px solid rgba(0, 0, 0, 0.1); border-radius: 5px; padding: 5px">
                        <span style="font-weight: bold; font-size: 30px;">
                            Chiqishni tasdiqlaysizmi?
                        </span>
                        <br>
                        <span v-if="buyTable.length > 0"
                            style="color: red; position: absolute; bottom: 15px; right: 20px;">*Barcha ma'lumotlar
                            tozalanib ketadi</span>
                    </div>
                </div>
                <div
                    style="position: absolute; width: 100%; height: 80px; bottom: 0; display: flex; align-items: center; justify-content: right">
                    <div style="width: 100px; height: 65px; border-radius: 5px; display: flex; align-items: center; justify-content: center; font-size: 40px; background: lightgreen; color: #fff; transition: all 0.3s; margin-right: 10px;"
                        class="n-button" @click="logOut()">
                        <q-icon name="done" />
                    </div>

                    <div style="width: 100px; height: 65px; border-radius: 5px; display: flex; align-items: center; justify-content: center; font-size: 40px; background: lightcoral; color: #fff; transition: all 0.3s; margin-right: 10px;"
                        class="n-button" @click="logOutDialog = false">
                        <q-icon name="close" />
                    </div>
                </div>
            </q-card>
        </q-dialog>

        <q-dialog v-model="checkDialog" persistent>
            <q-card style="width: 500px; min-height: 300px">
                <div style="padding: 10px; width: 100%; text-align: center;">
                    <span style="font-weight: bold; font-size: 20px">Ushbu amaliyot uchun check
                        chiqarasizmi?</span>
                </div>
                <div style="width: 100%; height: 100vh;">
                    <div id="table">
                        <div
                            style="width: 250px; min-height: 300px; border: 1px solid black; margin: auto; text-align: center; padding: 5px; margin-top: 10px;">
                            <div style="margin-top: 10px;">
                                <span style="font-weight: bold;">"ISHONCH" DO'KONLAR TARMOG'I</span>
                                <br>
                                <span style="font-weight: bold; font-size: 30px;">BONUS</span>
                                <br>
                                <div style="width: 100%; display: flex; justify-content: right;">
                                    <span style="font-weight: bold">{{ userData.id }}</span>
                                </div>
                                <span style="font-weight: bold; font-size: 20px;">{{ userData.fio }}</span>
                                <br>
                                <br>
                                <div>
                                    <table id="customers"
                                        style="font-family: sans-serif; border-collapse: collapse; width: 100%;">
                                        <tr>
                                            <th
                                                style="border: 1px solid black; padding: 8px; padding-top: 12px; padding-bottom: 12px; text-align: left; background-color: #fff; color: black;">
                                                Kod
                                            </th>

                                            <th
                                                style="border: 1px solid black; padding: 8px; padding-top: 12px; padding-bottom: 12px; text-align: left; background-color: #fff; color: black;">
                                                Tovar nomi
                                            </th>

                                            <th
                                                style="border: 1px solid black; padding: 8px; padding-top: 12px; padding-bottom: 12px; text-align: left; background-color: #fff; color: black;">
                                                Soni
                                            </th>
                                        </tr>

                                        <tr v-for="(item, index) of buyTable" :key="index">
                                            <td style="border: 1px solid black; padding: 8px;">
                                                {{ item.product_variant_id }}
                                            </td>

                                            <td style="border: 1px solid black; padding: 8px;">
                                                {{ item.itemName }}
                                            </td>

                                            <td style="border: 1px solid black; padding: 8px;">
                                                {{ item.count }}
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                                <div style="width: 100%; display: flex; justify-content: right; margin-top: 5px;">
                                    <span>Masul: Bonus</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    style="width: 100%; position: -webkit-sticky; position: sticky; bottom: 0; display: flex; align-items: center; justify-content: right; padding: 15px; background: #fff;">
                    <div style="width: 100px; height: 65px; border-radius: 5px; display: flex; align-items: center; justify-content: center; font-size: 40px; background: lightgreen; color: #fff; transition: all 0.3s; margin-right: 10px;"
                        class="n-button" @click="getCheck()">
                        <q-icon name="print" />
                    </div>

                    <div style="width: 100px; height: 65px; border-radius: 5px; display: flex; align-items: center; justify-content: center; font-size: 40px; background: lightcoral; color: #fff; transition: all 0.3s; margin-right: 10px;"
                        class="n-button" @click="cancelCheckDialog()">
                        <q-icon name="close" />
                    </div>
                </div>
            </q-card>
        </q-dialog>
    </div>
</template>

<script>
import { Loading } from 'quasar'
import { mapGetters } from 'vuex'
import axios from "../../axios"
export default {
    name: "get-item-page",

    computed: {
        ...mapGetters({ userData: "getItemsPage/userData" }),
        ...mapGetters({ buyDialogData: "getItemsPage/buyDialogData" })
    },

    watch: {
        "item.itemLength.txt"() {
            if (this.item.itemCode.item.residue) {
                if (this.item.itemCode.item.residue >= ~~this.item.itemLength.txt) {
                    let fullSum = ~~this.item.itemCode.item.selling_price * ~~this.item.itemLength.txt
                    this.item.itemCode.item.fullSum = fullSum

                    if (this.userData.bonus >= fullSum) {
                        this.item.itemCode.check = true
                    } else {
                        this.item.itemCode.check = false
                    }
                } else {
                    this.$toast.warning(`Bizda ${this.item.itemCode.item.residue} ta tovar mavjud!`, {
                        position: "top-right"
                    })
                    this.item.itemLength.txt = ""
                    this.item.itemCode.item.fullSum = ""
                }
            } else {
                console.log("")
            }
        }
    },

    data() {
        return {
            checkDialog: false,
            table: false,
            name: "get-item-page",
            logOutDialog: false,
            confirmDialog: false,
            clearDialog: false,
            buyTable: [],
            item: {
                itemCode: {
                    item: {},
                    active: false,
                    txt: "",
                    check: false
                },
                itemLength: {
                    active: false,
                    txt: ""
                }
            },
            columns: [
                {
                    name: 'id',
                    required: true,
                    label: 'Tovar kodi',
                    align: 'center',
                    field: row => row.product_variant_id,
                    format: val => `${val}`,
                    sortable: true
                },
                {
                    name: 'name',
                    required: true,
                    label: 'Tovar nomi',
                    align: 'center',
                    field: row => row.itemName,
                    format: val => `${val}`,
                    sortable: true
                },
                {
                    name: 'length',
                    required: true,
                    label: 'Tovar miqdori',
                    align: 'center',
                    field: row => row.count,
                    format: val => `${val}`,
                    sortable: true
                },
                {
                    name: 'sum',
                    required: true,
                    label: 'Tovar summasi',
                    align: 'center',
                    field: row => parseInt(row.fullSum).toLocaleString().split(",").join(" ").toString(),
                    format: val => `${val}`,
                    sortable: true
                },
            ]
        }
    },

    created() {
    },

    methods: {
        cancelCheckDialog() {
            this.checkDialog = false
            this.$store.dispatch("homePage/clearUser")
            this.$router.push("/")
        },
        getCheck() {
            let table = document.querySelectorAll("#table")
            let el = ""

            table.forEach(e => el = e.outerHTML)

            let winPrint = window.open("", "ABC")

            winPrint.document.write(`${el}`)

            winPrint.print()
            winPrint.close()
            this.checkDialog = false
            this.$store.dispatch("homePage/clearUser")
            this.$router.push("/")
        },
        async confirmItem(items, id) {
            try {
                Loading.show()
                const response = await axios.post("/api/product_delivery/save-bonus-product-variant", {
                    client_id: id,
                    items: items
                })
                this.$toast.success(response.data.message || "Ma'lumot muvoffaqiyatli saqlandi!", {
                    position: "top-right"
                })
                this.confirmDialog = false
                this.checkDialog = true
            } catch (e) {
                this.$toast.error(e.response?.data?.message || "Xatolik yuz berdi!", {
                    position: "top-right"
                })
            } finally {
                Loading.hide()
            }
            console.log(id)
            console.log(items)
        },
        showConfirmDialog() {
            if (this.buyTable.length > 0) {
                this.confirmDialog = true
            } else {
                this.$toast.warning("Sizda tasdiqlash uchun ma'lumotlar mavjud emas!", {
                    position: "top-right"
                })
            }
        },
        clearData() {
            this.buyTable = []
            this.userData.bonus = localStorage.getItem("bonus")
            this.clearDialog = false
        },
        clearBuyData() {
            if (this.buyTable.length > 0) {
                this.clearDialog = true
            } else {
                this.$toast.warning("Sizda o'chirish uchun ma'lumotlar mavjud emas!", {
                    position: "top-right"
                })
            }
        },
        checkData() {
            if (this.item.itemCode.item.fullSum) {
                if (this.item.itemCode.check) {
                    let obj = {}
                    obj.product_variant_id = this.item.itemCode.item.product_variant_id
                    obj.itemName = this.item.itemCode.item.product_variant_title
                    obj.count = this.item.itemLength.txt
                    obj.fullSum = this.item.itemCode.item.fullSum
                    obj.selling_price = this.item.itemCode.item.selling_price
                    this.userData.bonus -= this.item.itemCode.item.fullSum
                    this.buyTable.push(obj)
                    this.$store.dispatch("getItemsPage/hideBuyDialog")
                } else {
                    this.$toast.warning("Sizning bonus summangiz yetarli emas!", {
                        position: "top-right"
                    })
                }
            } else {
                this.$toast.warning("Iltimos oldin tovarni tanlang!", {
                    position: "top-right"
                })
            }
        },
        clearObj() {
            this.item.itemCode.txt = ""
            this.item.itemLength.txt = ""
            this.item.itemCode.item = {}
        },
        async searchItem() {
            try {
                Loading.show()
                const response = await axios.get("/api/product/get-product-variant", {
                    params: {
                        product_variant_id: this.item.itemCode.txt
                    }
                })
                this.item.itemCode.item = response.data
                this.item.itemLength.txt = '1'
            } catch (e) {
                this.item.itemCode.item = {}
                this.$toast.error(e.response.data.message || "Xatolik yuz berdi", {
                    position: 'top-right'
                })
            } finally {
                Loading.hide()
            }
        },
        delClickNum() {
            if (this.item.itemCode.active) {
                this.item.itemCode.txt = this.item.itemCode.txt.substring(0, this.item.itemCode.txt.length - 1)
            } else if (this.item.itemLength.active) {
                this.item.itemLength.txt = this.item.itemLength.txt.substring(0, this.item.itemLength.txt.length - 1)
            }
        },
        activeTxt(txt) {
            if (txt === "code") {
                this.item.itemLength.active = false
                this.item.itemCode.active = true
            } else if (txt === "length") {
                this.item.itemCode.active = false
                this.item.itemLength.active = true
            }
        },
        clickNum(msg) {
            if (this.item.itemCode.active) {
                this.item.itemCode.txt += msg.toString()
            } else if (this.item.itemLength.active) {
                this.item.itemLength.txt += msg.toString()
            }
        },
        closeBuyDialog() {
            this.$store.dispatch("getItemsPage/hideBuyDialog")
        },
        goBuyPage() {
            this.item.itemCode.txt = ""
            this.item.itemLength.txt = ""
            this.item.itemCode.item = {}
            this.$store.dispatch("getItemsPage/showBuyDialog")
        },
        async logOut() {
            this.$store.dispatch("homePage/logOut")
        },
    }
}
</script>

<style>
.bottom-app-bar {
    width: 100%;
    height: 80px;
    display: flex;
    padding: 5px;
    background: lightgreen;
    box-shadow: 0px 0px 20px - 5px lightgreen;
    position: -webkit - sticky;
    position: sticky;
    bottom: 0;
}

.n-button:active {
    background: rgba(255, 255, 255, 0.267) !important;
}

.n-active-btn:active {
    background: rgba(0, 0, 0, 0.116) !important;
}
</style>