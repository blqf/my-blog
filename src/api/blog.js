import request from './request';

/**
 * 获取博客列表数据
 */
export async function getBlogs(page = 1, limit = 10, categoryId = -1) {
    return await request.get('/api/blog', {
        params: {
            page,
            limit,
            categoryId
        }
    })
}



/**
 * 获取博客分类
 */
export async function getBlogCategories() {
    return await request.get('/api/blogCategory');
}



/**
 * 获取一篇博客
 * @param {*} id 博客id
 */
export async function getOneBlog(id) {
    return await request.get(`/api/blog/${id}`);
}



/**
 * 提交评论
 * @param {Object} commentInfo 评论信息 { nickname: 昵称,content: 评论内容，纯文本,blogId: 评论的博客id}
 */
export async function postComment(commentInfo) {
    return await request.post('/api/comment', commentInfo);
}



/**
 * 分页获取评论
 * @param {Number} blogid 博客id
 * @param {Number} page 第几页
 * @param {Number} limit 每页多少条
 */
export async function getCommentByPage(blogid, page = 1, limit = 10) {
    return await request.get('/api/comment', {
        params: {
            blogid,
            page,
            limit
        }
    })
}
