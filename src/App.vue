<template>
  <div>
    <router-view/>
  </div>
</template>

<script lang="js">

export default {
  name: 'LayoutDefault',

  components: {
  },

  data() {
    return {
      token: localStorage.getItem("access_token"),
    }
  },
  
  created() {
    this.isLogin()
  },

  methods: {
    isLogin() {
      const token = localStorage.getItem("access_token")
      if(!token) {
        this.$router.push("/login")
      }
    }
  }
}
</script>