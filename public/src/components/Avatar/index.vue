<template>
  <img 
    class="avater-container"
    :src="url" 
    :style="{
      width: size + 'px',
      height: size + 'px'
    }"
  />
</template>

<script>
export default {
    props: {
        url: {
            type: String, // url属性必须是一个字符串
            required: true, // 属性必传
        },
        size: {
            type: Number,
            default: 150,
        },
    }
}
</script>

<style scoped>
/* scoped 带有作用域的样式 */
    .avater-container {
        border-radius: 50%;
        object-fit: cover;
        display: block;
    }
</style>