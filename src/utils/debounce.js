/**
 * 函数防抖
 * @param {Function} func 需要防抖的函数
 * @param {Number} duration 停留时间
 * @returns 包装过后的函数
 */
export default function (func, duration = 100) {
    let timer = null;
    return (...rest) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func(...rest);
        }, duration);
    }
}