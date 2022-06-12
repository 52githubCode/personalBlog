<template>
    <div class="image-loader-container">
        <img v-if="!evetythingDone" class="placeholder" :src="placeholder" alt="占位图">
        <img 
            @load="handleLoad" 
            :src="src" 
            :style="{ opacity: originOpacity, transition: `${ duration }ms` }" 
            alt="原图">
    </div>
</template>

<script>
export default {
    props: {
        src: {
            type: String,
            required: true,
        },
        placeholder: {
            type: String,
            required: true,
        },
        duration: {
            type: Number,
            default: 500,
        },
    },
    data() {
        return {
            originLoadedStatus: false, // 原图是否加载完毕
            evetythingDone: false // 是否一切都尘埃落定了，等落定了去掉占位图
        }
    },
    computed: {
        originOpacity() {
            return this.originLoadedStatus ? 1 : 0;
        }
    },
    methods: {
        handleLoad() {
            this.originLoadedStatus = true;
            setTimeout(() => {
                this.evetythingDone = true;
                this.$emit("load");
            }, this.duration);
        }
    },
}
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";

    .image-loader-container {
        position: relative;
        width: 100%;
        height: 100%;
        overflow: hidden;
        img {
            .self-fill();
            object-fit: cover;
        }

        .placeholder {
            filter: blur(2vw);
        }
    }
</style>