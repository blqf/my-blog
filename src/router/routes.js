import 'nprogress/nprogress.css';
import { start, done, configure } from 'nprogress';
import NotFount from '@/views/NotFound'
configure({
    trickleSpeed: 40,
    showSpinner: false
})

/**
 * 作用：延迟一段时间
 * @param {number} duration 等待时长；单位：毫秒；默认：2000
 * @returns 
 */
function delay(duration = 2000) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, duration);
    })
}

function getAsyncComp(pageCompResolver) {
    return async () => {
        start();
        if (process.env.NODE_ENV === 'development') {
            // await delay();
        }
        const comp = await pageCompResolver();
        done();
        return comp;
    }
}

export default [
    {
        name: 'home',
        path: '/',
        component: getAsyncComp(() => import(/* webpackChunkName: 'home' */'@/views/Home')),
        meta: {
            title: '首页'
        }
    },
    {
        name: 'about',
        path: '/about',
        component: getAsyncComp(() => import(/* webpackChunkName: 'about' */'@/views/About')),
        meta: {
            title: '关于'
        }
    },
    {
        name: 'blog',
        path: '/article',
        component: getAsyncComp(() => import(/* webpackChunkName: 'blog' */'@/views/Blog')),
        meta: {
            title: '文章'
        }
    },
    {
        name: 'categoryBlog',
        path: '/article/cate/:categoryId',
        component: getAsyncComp(() => import(/* webpackChunkName: 'blog' */'@/views/Blog')),
        meta: {
            title: '文章'
        }
    },
    {
        name: 'blogDetail',
        path: '/article/:id',
        component: getAsyncComp(() => import(/* webpackChunkName: 'detail' */'@/views/Blog/Detail')),
        meta: {
            title: '文章详情'
        }
    },
    {
        name: 'project',
        path: '/project',
        component: getAsyncComp(() => import(/* webpackChunkName: 'project' */'@/views/Project')),
        meta: {
            title: '项目&效果'
        }
    },
    {
        name: 'message',
        path: '/message',
        component: getAsyncComp(() => import(/* webpackChunkName: 'message' */'@/views/Message')),
        meta: {
            title: '留言板'
        }
    },
    {
        name: 'notFound',
        path: '*',
        component: NotFount
    }
];