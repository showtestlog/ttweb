import Vue from 'vue'
import App from './App.vue'
import vuerouter from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueSimpleMarkdown from 'vue-simple-markdown'
import 'vue-simple-markdown/dist/vue-simple-markdown.css'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.use(VueSimpleMarkdown)

Vue.config.productionTip = false
Vue.use(ElementUI)

new Vue({
  router: vuerouter,
  render: h => h(App),
}).$mount('#app')
