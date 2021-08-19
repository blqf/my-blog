import reuqest from './request';

/**
 * 获取首页所需数据
 * @returns 业务数据
 */
export async function getBanners() {
    return await reuqest.get('/api/banner');
}
