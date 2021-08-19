import Vue from 'vue'
import VueRouter from 'vue-router';
import routes from './routes';
import { titleController } from '@/utils'

if (!window.VueRouter) {
  Vue.use(VueRouter);
}

const router = new VueRouter({
  routes,
  mode: 'history'
});

router.afterEach((to, from, next) => {
  if (to.meta.title) {
    titleController.setRotuerTitle(to.meta.title)
  }
})

export default router;