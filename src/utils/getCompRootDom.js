import Vue from 'vue';

/**
 * 获取某个组件渲染的Dom根元素
 * @param {*} comp 组件
 * @param {Object} props 属性
 */
export default function getCompRootDom(comp, props) {
    const vm = new Vue({
        render(h) {
            return h(comp, { props });
        }
    });
    vm.$mount();
    return vm.$el;
}
