<template>
  <div>
    <router-view/>
    <q-input v-model="barCode" autofocus @keyup.enter="barCodeFunc()" class="bar-code" ref="autoFocus"/>
  </div>
</template>

<script lang="js">
export default {
  name: 'LayoutDefault',

  components: {
  },

  data() {
    return {
      barCode: "",
      token: localStorage.getItem("access_token"),
    }
  },
  
  created() {
    this.isLogin()
  },

  methods: {
    inputFocus() {
      this.$refs.autoFocus.focus()
    },
    barCodeFunc() {
      let winPrint = window.open("", "ABC")
      
      winPrint.document.write("<p>KADIROV-FIRST-CHECK</p>")
      winPrint.print()
    },
    isLogin() {
      const token = localStorage.getItem("access_token")
      if(!token) {
        this.$router.push("/login")
      }
    }
  }
}
</script>
<style>
.bar-code {
    position: absolute;
    top: 0;
    width: 0px !important;
    z-index: -30;
}
</style>