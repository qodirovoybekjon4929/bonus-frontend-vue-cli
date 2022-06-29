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
                    SUMMA
                </span>
            </div>
        </div>

        <!-- page -->
        <div style="width: 100%; height: 100vh; padding: 10px;">
            <q-table style="box-shadow: 0px 0px 15px -12px black;" title="Tovar"
                no-data-label="Ma'lumotlar mavjud emas!" :columns="columns" />
        </div>
        <!-- page -->
    </div>
    <div class="bottom-app-bar">
        <div style="width: 50%; height: 100%; display: flex; align-items: center; justify-content: left;">
            <div style="width: 100px; height: 65px; border-radius: 5px; display: flex; align-items: center; justify-content: center; font-size: 40px; background: lightskyblue; color: #fff; transition: all 0.3s; margin-right: 10px"
                class="n-button">
                <q-icon name="store" />
            </div>

            <div style="width: 100px; height: 65px; border-radius: 5px; display: flex; align-items: center; justify-content: center; font-size: 40px; background: red; color: #fff; transition: all 0.3s; margin-right: 10px"
                class="n-button">
                <q-icon name="delete_sweep" />
            </div>

            <div style="width: 100px; height: 65px; border-radius: 5px; display: flex; align-items: center; justify-content: center; font-size: 40px; background: lightseagreen; color: #fff; transition: all 0.3s"
                class="n-button">
                <q-icon name="done" />
            </div>
        </div>

        <div style="width: 50%; height: 100%; display: flex; align-items: center; justify-content: right;">
            <div style="width: 100px; height: 65px; border-radius: 5px; display: flex; align-items: center; justify-content: center; font-size: 40px; background: lightcoral; color: #fff; transition: all 0.3s"
                class="n-button" @click="logOut()">
                <q-icon name="logout" />
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: "get-item-page",

    computed: {
        ...mapGetters({ userData: "getItemsPage/userData" })
    },

    data() {
        return {
            name: "get-item-page",
            columns: [
                {
                    name: 'name',
                    required: true,
                    label: 'Tovar kodi',
                    align: 'center',
                    field: row => row.name,
                    format: val => `${val}`,
                    sortable: true
                },
                {
                    name: 'name',
                    required: true,
                    label: 'Tovar nomi',
                    align: 'center',
                    field: row => row.name,
                    format: val => `${val}`,
                    sortable: true
                },
                {
                    name: 'name',
                    required: true,
                    label: 'Tovar miqdori',
                    align: 'center',
                    field: row => row.name,
                    format: val => `${val}`,
                    sortable: true
                },
                {
                    name: 'name',
                    required: true,
                    label: 'Tovar summasi',
                    align: 'center',
                    field: row => row.name,
                    format: val => `${val}`,
                    sortable: true
                },
            ]
        }
    },

    methods: {
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
    box-shadow: 0px 0px 20px -5px lightgreen;
    position: -webkit-sticky;
    position: sticky;
    bottom: 0;
}

.n-button:active {
    background: rgba(255, 255, 255, 0.267) !important;
}
</style>