// 网页标题控制

let routerTitle = "";
let siteTitle = "";

function setTitle() {
    if (!routerTitle && !siteTitle) {
        document.title = "loading...";
    } else if (!siteTitle && routerTitle) {
        document.title = routerTitle;
    } else if (!routerTitle && siteTitle) {
        document.title = siteTitle;
    } else { // 路由标题、网页标题都存在
        document.title = routerTitle + '-' + siteTitle;
    }
}

export default {
    // 仅设置路由标题
    setRouterTitle(title) {
        routerTitle = title;
        setTitle();
    },
    // 仅设置网页标题
    setSiteTitle(title) {
        siteTitle = title;
        setTitle();
    }
}