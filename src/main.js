// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueCookies from 'vue-cookies'

Vue.use(VueCookies)

Vue.config.productionTip = false
Vue.prototype.$ELEMENT = {size: 'small'}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

router.beforeEach((to, from, next) => {
  if (this.$cookies.isKey('sjsite_token')) { // determine if there has token
    /* has token */
    console.log(this.$cookies.get('sjsite_token'))
    next()
  } else {
    /* has no token */
  }
})
