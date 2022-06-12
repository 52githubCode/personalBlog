import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
import { titleController } from "@/utils"

Vue.use(VueRouter); // Vue.use(插件) 在Vue中安装插件

const router = new VueRouter({ // 路由配置
    routes, // 路由匹配规则
    mode: "history",
});

router.afterEach((to, from) => {
    if (to.meta.title) {
        titleController.setRouterTitle(to.meta.title);
    }
});

export default router;