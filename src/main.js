import Vue from 'vue'
import ElementUI from 'element-ui';
import moment from 'moment'
import App from './App.vue'
import router from './router'
import './index.css'
import 'element-ui/lib/theme-chalk/index.css';
// 注册icon
import Out from '@/icon/out.vue'
import Help from '@/icon/help.vue'
import Remind from '@/icon/remind.vue'
import Setting from '@/icon/setting.vue'
// 富文本组件样式导入
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
Vue.component('i-out', Out)
Vue.component('i-help', Help)
Vue.component('i-remind', Remind)
Vue.component('i-setting', Setting)
Vue.config.productionTip = false
Vue.prototype.$moment = moment

Vue.use(ElementUI);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
