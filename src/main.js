// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import VueFire from 'vuefire'
import firebase from 'firebase'
import push from './push'

Vue.use(VueFire)

// Initialize Firebase
let config = {
  apiKey: "AIzaSyCM0PO4MgrBrOunYRD0-xW2BxqCXJEsfv0",
  authDomain: "vue-pwa-33e80.firebaseapp.com",
  databaseURL: "https://vue-pwa-33e80.firebaseio.com",
  projectId: "vue-pwa-33e80",
  storageBucket: "vue-pwa-33e80.appspot.com",
  messagingSenderId: "844210058456"
};
firebase.initializeApp(config);

push()

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
