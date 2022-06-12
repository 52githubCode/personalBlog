import Home from "@/views/Home";
import Blog from "@/views/Blog";
import About from "@/views/About";
import Message from "@/views/Message";
import Project from "@/views/Project";
import BlogDetail from "@/views/Blog/Detail";

export default [ // 路由规则
    {
        name: "Home",
        path: "/",
        component: Home,
        meta: {
            title: "首页",
        }
    }, // 当匹配到路径 / 时，渲染 Home 组件
    {
        name: "Blog",
        path: "/article",
        component: Blog,
        meta: {
            title: "文章",
        }
    },
    {
        name: "CategoryBlog",
        path: "/article/cate/:categoryId",
        component: Blog,
        meta: {
            title: "文章",
        }
    },
    {
        name: "BlogDetail",
        path: "/article/:id",
        component: BlogDetail,
        meta: {
            title: "文章详情",
        }
    },
    {
        name: "About",
        path: "/about",
        component: About,
        meta: {
            title: "关于我",
        }
    },
    {
        name: "Message",
        path: "/message",
        component: Message,
        meta: {
            title: "留言板",
        }
    },
    {
        name: "Project",
        path: "/project",
        component: Project,
        meta: {
            title: "项目&效果",
        }
    },
];