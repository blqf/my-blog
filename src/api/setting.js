import request from './request';

/**
 * 获取全局设置
 */
export default function getSetting() {
    return request.get('./api/setting');
}