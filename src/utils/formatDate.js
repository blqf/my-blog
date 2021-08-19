/**
 * 将时间搓转换成正常的时间格式
 * @param {*} timestamp 一个时间搓
 * @returns 正常的时间格式 yyyy-mm-dd
 */
export default function getDate(timestamp) {
    const date = new Date(+timestamp);
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = (date.getDate()).toString().padStart(2, '0');
    return `${date.getFullYear()}-${month}-${day}`;
}
