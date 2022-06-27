import axios from "axios"
const baseURL = process.env.VUE_APP_BASE_URL
const api = axios.create({
    baseURL,
    headers: {
        Accept: "application/json"
    }
})


api.interceptors.request.use((request) => {
    const accessToken = localStorage.getItem("access_token")

    if(accessToken) {
        request.headers.common["Authorization"] = `Bearer ${accessToken}`
    }

    return request
})

api.interceptors.response.use(
    (response) => response,
    async (error) => {
      if (error.response.status === 401) {
        localStorage.clear()
        this.$router.push("/login")
      } else {
        return Promise.reject(error);
      }
    }
 );

 export default api