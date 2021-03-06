import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import {postKeyValueRequest} from "./utils/api";
import {getRequest} from "./utils/api";
import{putRequest} from "./utils/api";
import {deleteRequest} from "./utils/api";
import {postRequest} from "./utils/api";

Vue.prototype.postKeyValueRequest=postKeyValueRequest
Vue.prototype.getRequest=getRequest
Vue.prototype.putRequest=putRequest
Vue.prototype.deleteRequest=deleteRequest
Vue.prototype.postRequest=postRequest

Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
