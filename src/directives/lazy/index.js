import eventBus from '@/eventBus';
import { debounce } from '@/utils';
import defaultGif from "@/assets/default.gif";

let imgs = [];

function setImage(img) {
    img.dom.src = defaultGif; // 先使用默认图片
    // 处理图片
    const clientHeight = document.documentElement.clientHeight;
    const rect = img.dom.getBoundingClientRect();
    const height = rect.height || 150;
    if (rect.top >= -height && rect.top <= clientHeight) {
        // 在视口范围内
        const tempImg = new Image();
        tempImg.onload = function () {
            // 真实图片加载完成
            img.dom.src = img.src;
        };
        tempImg.src = img.src;
        imgs = imgs.filter(i => i !== img);
    }
}

function setImages() {
    for (let i = 0; i < imgs.length; i++) {
        setImage(imgs[i]);
    }
}

eventBus.$on('mainScroll', debounce(setImages, 50));

export default {
    inserted(el, binding) {
        const img = {
            dom: el,
            src: binding.value
        }
        imgs.push(img);
        // 立即处理一次，首次加载
        setImage(img);
    },
    unbind(el) {
        imgs = imgs.filter(img => img.dom !== el);
    }
}