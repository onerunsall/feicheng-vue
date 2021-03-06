// import Vue from 'vue'            

// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(ElementUI);  
// document.cookie = "loginId =123123"

import App from './App'
import router from './router'
import axios from 'axios'
import store from './store'
// import jquery from 'jquery'
import Cookies from 'js-cookie' 
import qs from 'qs'; 
import h5p from '../build/h5p.js'
// import moment from 'moment'
import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'
Vue.use(Viewer);
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  preLoad: 1.3,
  attempt: 1,
}) 
Vue.prototype.$version = '20.0515.1119' 
Vue.prototype.$versionBrief = '修复了已知BUG, 优化了用户体验.'
import MetaInfo from 'vue-meta-info';
Vue.use(MetaInfo)
Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.prototype.$store = store
Vue.prototype.$h5p = h5p
Vue.prototype.qs = qs
Vue.prototype.$Cookies = Cookies
Vue.prototype.moment = moment;

Vue.prototype.cookieOn=function() {
  //debugger
  var result = false;
  if (navigator.cookiesEnabled)
    return true;
  Cookies.set('tc', 'yes', { path: "/"});
  if (Cookies.get('tc') && Cookies.get('tc').indexOf('yes') > -1)
    result = true;
  Cookies.set('tc', '', { expires: -1 });
  return result;
}

Vue.prototype.numberTry=function(number) {
		  var numberOut = ''
			if(10000<=number&&number<100000000){
				numberOut=(number/10000).toFixed(1)+'w'
			}else if(number>=100000000){
        numberOut=(number/100000000).toFixed(1)+'亿'
			}else if(number<10000){
        	numberOut=number
          }
		  return numberOut
   }
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
// //debugger
