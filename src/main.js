import Vue from 'vue';
import App from './App.vue';
import './styles/global.less';
import router from './router';
import { showMessage } from './utils/index';// 导入弹窗函数
import './mock';// 拦截请求并返回模拟数据
import vLoading from './directives/loading';
import vLazy from "./directives/lazy";
import './eventBus';// 添加事件总线
import store from './store'

// 注册全局指令
Vue.directive('loading', vLoading);
Vue.directive('lazy', vLazy);

// 为每个实例添加弹窗函数
Vue.prototype.$showMessage = showMessage;

store.dispatch('setting/fetchSetting');

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app');
