import formatDate from './formatDate';

/**
 * 将时间搓转换成“日期+时间”的格式
 * @param {Number} timestamp 事件搓
 * @returns 日期+时间
 */
export default function (timestamp) {
    const date = new Date(+timestamp);
    const ymd = formatDate(timestamp);
    const h = date.getHours().toString().padStart(2, '0');
    const m = date.getMinutes().toString().padStart(2, '0');
    const s = date.getSeconds().toString().padStart(2, '0');
    return `${ymd} ${h} : ${m} : ${s}`;
}
