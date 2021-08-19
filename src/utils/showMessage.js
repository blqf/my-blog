import getCompRootDom from "./getCompRootDom";
import Icon from '@/components/Icon';
import styles from './showMessage.module.less';

/**
 * 消息弹窗
 * @param {Object} options 配置对象
 * 1. content: 消息内容
 * 2. type: 消息类型，info error success warn，默认info
 * 3. container: 容器，一个dom元素，消息会显示在该容器的正中间，默认显示在页面正中间
 * 4. duration: 消息显示时长，默认1500ms
 * 5. callback: 回调函数，弹窗消失后执行
 */
export default function showMessage(options = {}) {
    const content = options.content;
    const type = options.type || 'info';
    const container = options.container || document.body;
    const duration = options.duration || 1500;
    const callback = options.callback;
    //创建消息元素
    const div = document.createElement('div');
    // 设置样式
    div.className = `${styles.message} ${styles['message-' + type]}`;
    const iconDom = getCompRootDom(Icon, { type });
    // 向div中添加内容
    div.innerHTML = `<span class="${styles.icon}">${iconDom.outerHTML}</span><div>${content}</div>`;

    // 若传递了conatiner，则判断postion属性是否改变过
    if (options.container && getComputedStyle(container, null).position === 'static') {
        container.style.position = 'relative';
    }

    container.appendChild(div);

    //读取dom属性强行渲染
    div.clientHeight;

    // 回归到正常位置
    div.style.opacity = 1;
    div.style.transform = 'translate(-50%, -50%)';

    // 等一段时间后消失
    setTimeout(() => {
        div.style.opacity = 0;
        div.style.transform = 'translate(-50%, -50%) translateY(-30px)';
        div.addEventListener('transitionend', () => {
            // 移除弹窗元素
            div.remove();
            // 消失后运行回调函数
            callback && callback();
        }, { once: true })
    }, duration);
}