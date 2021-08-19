// 导入图片地址
import loadingUrl from '@/assets/loading.svg';
// 导入样式
import styles from './index.module.less';

/**
 * 获取创建的img元素
 * @param {HTMLElement} el html元素
 * @returns 获取的img元素
 */
function getLoadingImg(el) {
    return el.querySelector('img[data-role=loading]');
}

/**
 * 创建loading img元素
 * @returns 创建的img元素
 */
function createLoadingImg() {
    // 创建img元素
    const img = document.createElement('img');
    img.dataset.role = 'loading';
    img.src = loadingUrl;
    img.className = styles.loading;
    return img;
}

export default function (el, binding) {
    // bind和update的时候调用此函数
    // 根据binding.value的值，决定是否创建或删除img元素
    const curImg = getLoadingImg(el);
    if (binding.value) {
        if (!curImg) {
            // 创建img元素
            const img = createLoadingImg();
            el.appendChild(img);
        }
    } else {
        if (curImg) {
            curImg.remove();
        }
    }
}
