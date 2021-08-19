/**
 * 1. 获取远程数据的公共代码
 * 2. 需要使用此组件的组件提供一个fetchData函数并返回获取的数据
 * @param {*} initData 数据初始默认值
 * @returns 配置对象
 */
export default function (initData = null) {
    return {
        data() {
            return {
                isLoading: true,
                data: initData
            }
        },
        async created() {
            this.data = await this.fetchData();
            this.isLoading = false;
        }
    }
}