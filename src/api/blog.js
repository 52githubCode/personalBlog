import request from "@/api/request";

/**
 * 获取博客列表数据
 * @param {Number} page 当前页码
 * @param {Number} limit 页容量
 * @param {Number} categoryid 所属分类，-1表示全部
 * @returns 
 */
export async function getBlogs(page = 1, limit = 10, categoryid = -1) {
    return await request.get("/api/blog", {
        params: {
            page,
            limit,
            categoryid,
        },
    });
}

/**
 * 获取博客分类
 * @returns 
 */
export async function getBlogCategories() {
    return await request.get("/api/blogtype");
}

/**
 * 获取单个博客
 * @param {*} id 博客的id 
 * @returns 
 */
export async function getBlog(id) {
    return await request.get(`/api/blog/${id}`);
}

/**
 * 提交评论
 * @param {*} comment 评论对象
 * @returns 
 */
export async function postComment(commentInfo) {
    return await request.post("/api/comment", commentInfo);
}

/**
 * 分页获取评论
 */
export async function getComments(blogid, page = 1, limit = 10) {
    return await request.get("/api/comment", {
        params: {
            page,
            limit,
            blogid
        }
    });
}