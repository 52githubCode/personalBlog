export default function(fn, duration = 100) {
    let time = null;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn(...args);
        }, duration);
    };
}