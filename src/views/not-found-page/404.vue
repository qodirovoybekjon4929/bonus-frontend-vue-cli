<template>
    <div>
        <h1 style="text-align: center;">{{ text }}</h1>
        <div style="width: 100%; display: flex; align-items: center; justify-content: center;">
            <div style="width: 600px;">
                <q-btn class="full-width" style="height: 70px; font-size: 23px; background: lightgreen; color: #fff;"
                    unelevated @click="$router.push('/')">
                    bosh sahifaga qaytish
                </q-btn>
            </div>
        </div>
    </div>
</template>

<script lang="js">
export default {
    name: "404-page",

    data() {
        return {
            text: "404 Not-found"
        }
    }
}
</script>