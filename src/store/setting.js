import getSetting from '@/api/setting';
import { titleController } from '@/utils';

// 全局设置的数据仓库
export default {
    namespaced: true,
    state: {
        loading: false,
        data: null
    },
    mutations: {
        setLoading(state, payload) {
            state.loading = payload;
        },
        setData(state, payload) {
            state.data = payload;
        }
    },
    actions: {
        async fetchSetting(ctx) {
            if (ctx.state.data) {
                return;
            }
            ctx.commit('setLoading', true);
            const resp = await getSetting();
            ctx.commit('setData', resp);
            ctx.commit('setLoading', false);
            if (resp.favicon) {
                // <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
                let link = document.querySelector('link[ref="shortcut icon"]');
                if (link) {
                    return;
                }
                link = document.createElement('link');
                link.rel = "shortcut icon";
                link.type = "image/x-icon";
                link.href = resp.favicon;
                document.querySelector('head').appendChild(link);
            }
            if (resp.siteTitle) {
                titleController.setSiteTitle(resp.siteTitle);
            }
        }
    }
}