// 导出指令的配置对象
// export default {
//     bind(el, binding) {
//         console.log("bind", el, binding);
//     },
//     inserted(el, binding) {
//         console.log("inserted", el, binding);
//     },
//     update(el, binding) {
//         console.log("update", el, binding);
//     }
// }


import loadingUrl from "@/assets/loading.svg";
import styles from "@/directives/loading.module.less";

/**
 * 查找被绑定的元素中有没有LoadingImg元素
 * @param {elemnet} el 
 * @returns {boolean} 布尔值
 */
function getLoadingImg(el) {
    return el.querySelector("img[data-role=loading]");
}

/**
 * 创建一个LoadingImg元素
 */
function craeteLoadingImg() {
    const img = document.createElement("img");
    img.dataset.role = "loading";
    img.src = loadingUrl;
    img.className = styles.loading;
    return img;
}

// 导出指令的配置对象
export default function(el, binding) {
    // 根据 binding.value 的值，决定创建或删除img元素
    const curImg = getLoadingImg(el);
    if (binding.value) {
        if (!curImg) {
            const img = craeteLoadingImg();
            el.appendChild(img);
        }
    } else {
        if (curImg) {
            curImg.remove();
        }
    }
}