<template>
    <div>
        <span>{{text}}</span>
    </div>
</template>

<script lang="js">
import { mapGetters } from 'vuex'
export default {
    name: "home-page",

    computed: {
        ...mapGetters({storeMessage: "homePage/storeMessage"})
    },

    created() {
        this.goToStore()
    },

    data() {
        return {
            text: "home-page"
        }
    },

    methods: {
        goToStore() {
            this.$store.dispatch("homePage/getData")
        }
    }
}
</script>