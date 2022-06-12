import eventBus from "@/eventBus";
import { debounce } from "@/utils";
import defaultGif from "@/assets/default.gif";

let imgs = [];

function setImage(img) {
    img.dom.src = defaultGif; // 先暂时使用着默认图片
    // 处理图片
    // 该图片是否在视口范围内
    const clientHeight = document.documentElement.clientHeight;
    const rect = img.dom.getBoundingClientRect();
    const height = rect.height || 150;
    if (rect.top >= -height && rect.top <= clientHeight) {
        // 在视口范围内
        const tempImage = new Image();
        tempImage.onload = function() {
            // 当真实图片加载完成之后替换预加载图
            img.dom.src = img.src;
        }
        tempImage.src = img.src;
        // img.dom.src = img.src; // 另一种图片初加载时的显示方式，即一开始没有预加载图(因为在视口处的预加载图片路径 一开始就被这处语句的路径覆盖)

        // 处理过的图片不再处理(处理过的是指加载过的或正在加载的)
        imgs = imgs.filter(i => i !== img);
    }
}

// 希望，调用该函数，就可以设置那些合适的图片
function setImages() {
    for (const img of imgs) {
        // 处理单张图片
        setImage(img);
    }
}

function handleScroll(dom) {
    setImages();
}

eventBus.$on("mainScroll", debounce(handleScroll, 50));

export default {
    inserted(el, bindings) {
        const img = {
            dom: el,
            src: bindings.value,
        };
        imgs.push(img);
        // 立即处理它
        setImage(img);
    },
    unbind(el) {
        imgs = imgs.filter(img => img.dom !== el);
    },
}