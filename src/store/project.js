import {getProjects} from '@/api/project'

// 项目&效果数据仓库
export default {
    namespaced: true,
    state: {
        loading: false,
        data: [],
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
        async fetchProjects(ctx) {
            if (ctx.state.data.length) {
                return;
            }
            ctx.commit('setLoading', true);
            const resp = await getProjects();
            ctx.commit('setData', resp);
            ctx.commit('setLoading', false);
        }
    }
}