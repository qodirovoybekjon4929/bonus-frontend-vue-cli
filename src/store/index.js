import { createStore } from 'vuex'
import homePage from "./home-page/home"
import getItemsPage from "./get-items-page/get-items-page"

export default createStore({
  modules: {
    homePage,
    getItemsPage
  }
})
