# Vue

## 组件事件

组件通信

## 组件练习

a 链接 -> 点击跳转 -> 刷新页面 -> 重新渲染 -> 重新运行组件

## 插槽

## 路由

## 获取远程数据

获取远程数据用ajax, 无刷新的用js访问远程数据

### 发送ajax请求的方式

1. XHR XMLHttpRequest
2. fetch H5的API
3. 封装好的第三方库，如axios

### 解决开发环境中的跨域问题

跨域问题只有浏览器会产生

代理解决跨域问题 -> 告诉开发服务器，将请求的路径代理 转到另外的服务器上，路径都一样，将主机名和端口号改一下

设置代理 -> 配置 -> vue.config.js (vue-cli的配置文件)
```js
// 例如
/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: "http://test.my-site.com",
            },
        },
    }
}
```

用后端测试服务器的域名请求数据，但后端测试服务器未开发好的时候 -> Mock -> 模拟数据

#### Mock

Mock的数据可以是假的，但格式要和接口文档的格式一摸一样
```js
/**
 * {string} url 拦截的地址
 * {string} type 请求的方式，如get
 * {any} template 模板/模拟数据 -> 格式要和接口文档的格式一模一样 
 */
Mock.mock(url, type, template) // 拦截规则
```

```js
import "mock/index.js" // 导入 -> 运行一遍 -> 就相当于定义了ajax拦截规则
```

当导入vue-router并使用插件VueRouter(即Vue.use(VueRouter))后，全局注册了RouterView(或router-view)组件(全局变量可以直接使用)

```
#/ --> 锚链接或location.hash

锚链接的切换不会刷新页面(即哈希值最容易做无刷新跳转)
```

### 路由模式

路由模式决定了：

1. 路由从哪里获取访问路径
2. 路由如何改变访问路径

mode: "hash"  默认值  -- 从location.hash 获取部分路径

mode: "history"  -- 从location.pathname 获取路径

**刷新与不刷新的区别**：

刷新页面 --> 请求index.html --> 请求各种.js --> 请求各种.css --> 执行js --> 创建vue应用 --> 渲染全部组件 --> 挂载到指定的div中

不刷新 --> 执行一段js代码: 切换某个区域的组件  ==》 a标签 替换为 导航（vue-router 提供了全局的组件 RouterLink ,它的渲染结果是一个 a 元素）

## 组件生命周期

```
获取当前时间 -> new Date().toLocaleTimeString()
```

## 自定义指令

自定义指令：如v-loading vue是不识别的 -> 实现vue能识别的指令

移除元素 -> ele.remove()

元素显示与否 -> v-if指令/v-show指令

指令的配置对象就是配置钩子函数

### 指令的钩子函数

bind

只调用一次，指令第一次绑定到元素时调用

inserted

被绑定元素插入父节点时调用

update

所在组件的 VNode 更新时调用

每个钩子函数在调用时，vue 都会向其传递一些参数，其中最重要的是前两个参数

### 全局注册与局部注册

全局注册：和组件全局注册一样 -> 会默认打包结果就有这东西
局部注册： 不是每一个组件都会用，且不希望打包结果有这东西，用到某一个组件且用到该自定义指令时才定义(即在组件里面配置，局部注册指令directives)

自定义指令实质上是一个配置对象（和组件一样，只不过它不是vue模板）

## 组件混入

提取不同组件的公共代码，再以组件的形式混入不同组件

Vue2 中使用混入是不得已而为之, Vue3 中有更好的办法

## 组件递归

在组件内部进行自我递归 -> 利用组件的name属性 -> 当组件名字缺失时作为组件名字

做组件 -> 组件有啥 -> 属性、事件

组件的事件能不能自己处理，自己处理不了就交给父组件处理

```
注意：组件中默认值是数组或者默认值是对象，得把它写成一个函数，函数的返回结果作为默认值
如default: () => []
```

## 开发文章列表页

querystring 第三方库 -> 专门处理地址栏参数

id: "@guid"(使用mock里面的函数@guid) -> 全局唯一id

title: "@ctitle" -> 生成一个中文标题

description: "@cparagraph(n, m)" -> 生成一段由n - m 句话组成的段落

createDate: `@date('T')` 生成随机时间

### 动态路由

vue-router 是vue的插件，给vue的原型上注入了对象 -> $route -> 提供路由信息
```
$route 是响应式的

$route 通过路由，可实现组件之间的间接通信
```

模板用的数据和方法是组件里的数据和方法

```
String.prototype.padStart()

padStart() 方法用另一个字符串填充当前字符串(如果需要的话，会重复多次)，以便产生的字符串达到给定的长度。从当前字符串的左侧开始填充。

语法
str.padStart(targetLength [, padString])

参数
targetLength
当前字符串需要填充到的目标长度。如果这个数值小于当前字符串的长度，则返回当前字符串本身。

padString 可选
填充字符串。如果字符串太长，使填充后的字符串长度超过了目标长度，则只保留最左侧的部分，其他部分会被截断。此参数的默认值为 " "（U+0020）。

返回值
在原字符串开头填充指定的填充字符串直到目标长度所形成的新字符串。
```

```
Object.prototype.toString()

toString() 方法返回一个表示该对象的字符串。

语法
obj.toString()

返回值
一个表示该对象的字符串。
```

vue-router 是vue的插件，给vue的原型上注入了对象 -> $router -> 用于控制页面跳转 -> 编程式导航

编程式导航：除了使用<RouterLink> 超链接导航外，**vue-router 还允许在代码中进行页面的跳转**

**watch: $route -> 监控路由信息的变化**

**aside标签**并不表示侧边栏，而是**表示附加信息**

vue里的模板(即template)里的大胡子语法({{ xxx }}) 读出的内容一定是作为纯文本，不能作为元素。如果内容有元素，为了安全，会进行html编码

将模板中的大胡子语法里的内容以innerHTML展示 -> 在父元素使用v-html指令，指令内容为先前在大胡子语法里的内容

父元素使用v-html指令后，父元素的innerHTML里的内容会覆盖子元素(如div.innerHTML = xxx)

对于文章中脚本部分的样式，可以使用第三方库 highlight.js中提供的样式
```js
import "highlight.js/styles/github.css"; 
```

## $listeners和v-model

### 子组件发生了一件事让父组件处理，且子组件要知道父组件的处理结果 之后继续处理

#### 方法

1.  组件通信中的event的$emit + 回调函数 参数
    子组件在触发事件通知父组件的时候可以传递多个参数，且参数的类型没有要求 -> 就可以传递函数 -> 回调模式 -> 回调函数执行的时间点由父组件决定，子组件只负责传递回调函数
    利用箭头函数绑定外层this的特点（即回调函数用箭头函数实现），实现函数中的this绑定子组件中的this -> 父组件在执行回调函数时this仍指向子组件
2.  拿到父组件的返回结果 + 组件实例成员$listeners
3.  父组件传递click属性给子组件，子组件执行props属性中的方法

### 表单绑定

一个 value 属性和一个 input 事件

语法糖：v-model
> 本质：绑定一个value 属性 同时注册一个input 事件 的组合
> 作用：双向绑定，专门用来处理表单元素，针对不同表单元素有不同的处理且针对不同的数据类型有不同的处理

### 事件修饰符

## 开发文章详情页

在form 表单里的input事件回车默认会发出请求

在form 里面普通的 button 按钮(即type="submit")就是提交按钮

form表单在提交时默认刷新页面 -> 阻止默认事件 -> 事件修饰符（即@submit.prevent）

v-on="{ submit: handleSubmit }"  写法等同于  v-on:submit="handleSubmit"(即@submit="handleSubmit")

但 v-on="{ submit: handleSubmit }" 这种写法就可以一次性传递多个函数

组件通信中 事件原封不动地一层一层往上抛 就可以用 $listeners

锚链接 -> id 的使用

Vue实例本质上和组件实例(即在组件中的 **this** )差不多，组件上有实例成员$emit(触发事件)、$on(监听某一个事件)、$off(取消监听) -> 所以事件总线也可以用Vue实例(即new Vue({}))来实现

事件总线极其灵活，js都可以触发事件

```
Element.getBoundingClientRect() 方法返回元素的大小及其相对于视口的位置。

如果是标准盒子模型，元素的尺寸等于width/height + padding + border-width的总和。如果box-sizing: border-box，元素的的尺寸等于 width/height。

语法
domRect = element.getBoundingClientRect();

值
返回值是一个 DOMRect 对象，这个对象是由该元素的 getClientRects() 方法返回的一组矩形的集合，就是该元素的 CSS 边框大小。返回的结果是包含完整元素的最小矩形，并且拥有left, top, right, bottom, x, y, width, 和 height这几个以像素为单位的只读属性用于描述整个边框。除了width 和 height 以外的属性是相对于视图窗口的左上角来计算的。
```

防抖 -> 事件触发太频繁会影响效率 -> 事件触发频繁，但可以处理得没有那么频繁

元素的总高度(包含内容)为 ele.scrollHeight, 元素可视区域的高度为 ele.clientHeight, 元素在视口滚动的高度为 ele.scrollTop

切换页面 滚动条会从当前位置回滚到起始位置

## 图片懒加载

指令的 **unbind** 函数**执行的时间点**是元素消失时的时间点(如，切换页面时)

document.documentElement.clientHeight -> 视口高度

## 数据共享

向Vue实例中注入数据仓库后，会向Vue原型注入一个属性$store -> 之后，在 vue 组件中，可以通过实例的 $store 属性访问到仓库

vuex 主要用于大型项目里，大型项目组件特别多，组件的层次特别复杂，共享数据应用到多个不同的组件，有可能如何组件都可以改变数据 -> 数据的变化是可以监控到的（即为了能够更好的跟踪数据的变化） -> vuex 强烈建议使用 mutation 来更改数据

n次方表示 -> num ** index(即num的index次方)

vuex 监控数据变化 -> 触发mutations -> 提交mutations(即提交一次数据变化) -> store.commit("数据突变的类型", "负荷")

提交mutations 时会自动传当前状态state

提交 mutation的过程称为 commit

在 vuex 里面，提交 mutation 是数据改变的唯一原因

vuex 数据仓库里面处理异步操作 -> actions (即actions 是专门用来处理异步操作的，但它不能直接改变数据，必须要通过提交 mutation 来改变数据)

触发actions 的过程称为 dispatch分发

异步操作 -> setTimeout、setInterval、ajax等都是异步操作

actions 对象中的方法会自动传入context(简写为ctx), ctx 可以理解为数据仓库(实际上与数据仓库还是有一点区别的)

调试工具（如 Vue.js devtools）只会记录 mutation, 而不会记录 actions

store.dispatch() 返回 Promise

通过 Vuex.Store() 构造函数 new 一个数据仓库

Vuex 与 Vue 联系紧密，在使用 Vuex.Store() 构造函数之前需要应用插件 -> Vue.use(Vuex)

vuex 会将仓库中的数据变成**响应式数据**

向Vue 实例注入 store 数据仓库 -> 在整个Vue 组件树中都可以使用数据仓库 -> Vue 实例会向Vue.prototype(Vue 原型)注入一个 $store 属性 -> Vue 组件树中的所有组件实例 都可以通过访问 $store 属性来访问数据仓库

```
仓库配置对象中的属性: 
    state -> 数据仓库当前状态(即仓库中的初始数据)
```

## vuex 经典案例

vue 指令要作用到同级的多个元素 -> 使用<template></template> 包裹多个元素，指令作用在template 标签上，该标签不会额外生成其他东西

鉴权（即有些页面在没有登录的时候是不能访问的）

路由前置守卫

路由对象新属性 -> meta 源数据 -> 路由对象中的额外信息 -> 利用源数据 判断路由有什么特殊之处

数据仓库是任何模块都可以使用的

开启[严格模式](https://vuex.vuejs.org/zh/guide/strict.html)，仅需在创建 store 的时候传入 strict: true：
```js
const store = createStore({
  // ...
  strict: true
})
```
在严格模式下，无论何时发生了状态变更且不是由 mutation 函数引起的，将会抛出错误。这能保证所有的状态变更都能被调试工具跟踪到。

[Window.localStorage](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/localStorage)
```
Window.localStorage

只读的localStorage 属性允许你访问一个Document 源（origin）的对象 Storage；存储的数据将保存在浏览器会话中。localStorage 类似 sessionStorage，但其区别在于：存储在 localStorage 的数据可以长期保留；而当页面会话结束——也就是说，当页面被关闭时，存储在 sessionStorage 的数据会被清除 。

应注意，无论数据存储在 localStorage 还是 sessionStorage ，它们都特定于页面的协议。

另外，localStorage 中的键值对总是以字符串的形式存储。 (需要注意，和 js 对象相比，键值对总是以字符串的形式存储意味着数值类型会自动转化为字符串类型).

语法
myStorage = localStorage;

值
一个可被用于访问当前源（ origin ）的本地存储空间的 Storage 对象。
```

示例
下面的代码片段访问了当前域名下的本地 Storage 对象，并通过 Storage.setItem() 增加了一个数据项目。
```js
localStorage.setItem('myCat', 'Tom');
```

该语法用于读取 localStorage 项，如下：
```js
let cat = localStorage.getItem('myCat');
```

该语法用于移除 localStorage 项，如下：
```js
localStorage.removeItem('myCat');
```

该语法用于移除所有的 localStorage 项，如下：
```js
// 移除所有
localStorage.clear();
```

**[getter](https://vuex.vuejs.org/zh/guide/getters.html)**

在数据仓库中类似计算属性，从 store 中的 state 中派生出一些状态，可以认为是 store 的计算属性

登录成功 -> 页面跳转 -> 使用$router.push("路由中规定的路由路径")

**vuex 中的 [mapState](https://vuex.vuejs.org/zh/guide/state.html#%E5%9C%A8-vue-%E7%BB%84%E4%BB%B6%E4%B8%AD%E8%8E%B7%E5%BE%97-vuex-%E7%8A%B6%E6%80%81) 辅助函数**

当一个组件需要获取多个状态的时候，将这些状态都声明为计算属性会有些重复和冗余。为了解决这个问题，我们可以使用 mapState 辅助函数帮助我们生成计算属性，让你少按几次键

mapState 函数返回的是一个对象
```js
// 例子
import { mapState } from "vuex";

// 写法1
mapState({
  loading: state => state.loginUser.loading,
});

// 写法2
mapState("loginUser", ["loading"])

/**
 * mapState 函数返回的是一个对象，如下：
 * {
 *  loading() {
 *    return this.$store.state.loginUser.loading;
 *  }
 * }
 */
```

**对象展开运算符**

mapState 函数返回的是一个对象。我们如何**将它与局部计算属性混合使用**呢？通常，我们需要使用一个工具函数将多个对象合并为一个，以使我们可以将最终对象传给 computed 属性。但是自从有了对象展开运算符，我们可以极大地简化写法：
```js
computed: {
  localComputed () { /* ... */ },
  // 使用对象展开运算符将此对象混入到外部对象中
  ...mapState({
    // ...
  })
}
```

**[mapGetters](https://vuex.vuejs.org/zh/guide/getters.html#mapgetters-%E8%BE%85%E5%8A%A9%E5%87%BD%E6%95%B0) 辅助函数**

mapGetters 辅助函数仅仅是将 store 中的 getter 映射到局部计算属性

```js
// 例如
import { mapGetters } from 'vuex'

export default {
  // ...
  computed: {
  // 使用对象展开运算符将 getter 混入 computed 对象中
    ...mapGetters([
      'doneTodosCount',
      'anotherGetter',
      // ...
    ])
  }
}
```

如果你想将一个 getter 属性另取一个名字，使用对象形式：
```js
...mapGetters({
  // 把 `this.doneCount` 映射为 `this.$store.getters.doneTodosCount`
  doneCount: 'doneTodosCount'
})
```

数据仓库是任何模块都可以改变的

路由拦截器(即某些页面在没有登录的情况下是不能访问的) -> [全局前置守卫](https://router.vuejs.org/zh/guide/advanced/navigation-guards.html#%E5%85%A8%E5%B1%80%E5%89%8D%E7%BD%AE%E5%AE%88%E5%8D%AB)

```js
// 全局前置守卫
router.beforeEach((to, from, next) => {
    // 每当导航切换时(包含刷新页面的第一次)，该函数会运行
    // from: 之前的路由对象(this.$route)
    // to: 即将进入的路由对象 (this.$route)
    // next: 确认导航的一个函数  调用该函数 (无参)，就会直接进入to， 调用该函数（传入参数），根据传入参数进入新的导航
    console.log(to, from);
    // next();
    next("/news");
})
```

鉴权等待页 -> 监控数据仓库的变化 -> watch -> ["\$store.getters['loginUser/status']"] -> [watch](https://cn.vuejs.org/v2/api/#watch) 不支持 ["\$store.getters['loginUser/status']"] 写法 -> [Vue.prototype.\$watch](https://cn.vuejs.org/v2/api/#vm-watch)

```js
// Vue.prototype.$watch 用法示例
created() {
    this.unwatch = this.$watch(
        () => this.$store.getters['loginUser/status'], // 监控的对象，有没有变化
        (status) => { // 回调函数， 变化后的处理
            console.log("状态为：", status);
        }, 
        { immediate: true }, // $watch 的额外配置
    );
},
destroyed() {
    this.unwatch(); // 取消监控（$watch 的返回值为一个 unwatch 函数，执行该函数就取消监控）
},
```

vuex 中也有[watch](https://vuex.vuejs.org/zh/api/#watch) , 用法与 [Vue.prototype.\$watch](https://cn.vuejs.org/v2/api/#vm-watch) 一样

```js
// vuex 中的watch  --> Store 的watch实例方法 用法示例
created() {
    this.unwatch = this.$store.watch(
        () => this.$store.getters['loginUser/status'], // 监控的对象，有没有变化
        (status) => { // 回调函数， 变化后的处理
            console.log("状态为：", status);
        }, 
        { immediate: true }, // $watch 的额外配置
    );
},
destroyed() {
    this.unwatch(); // 取消监控（$watch 的返回值为一个 unwatch 函数，执行该函数就取消监控）
},
```

将加载中的**目标页路径**传入 鉴权等待页 --> 利用 query 传值  --> 鉴权等待页在登录状态明确后 依据 传入的目标页路径 再次尝试进入目标页

鉴权中涉及的重定向：/loading --> /news, 但/news 有导航守卫鉴权，导致未能进入/news，经导航守卫 --> /login 又跳转到/login，就导致了两次重定向的问题

两次重定向的问题并不影响我们页面的跳转 --> 只是给了个错误提示 --> 解决方法
```js
/*
解决方法一
在鉴权等待页等待完成后不再进入鉴权环节，
没有登录过的跳转到登录页；登录过的直接进入目标页
*/

created() {
    this.unwatch = this.$store.watch(
        () => this.$store.getters['loginUser/status'], // 监控的对象，有没有变化
        (status) => { // 回调函数， 变化后的处理
            if (status !== 'loading') {
                // this.$router.push(this.$route.query.returnurl || '/home');

                // 两次重定向
                /* 解决方法一
                   在鉴权等待页等待完成后不再进入鉴权环节，
                   没有登录过的跳转到登录页；登录过的直接进入目标页
                */
                // if (status === 'login') {
                //     this.$router.push(this.$route.query.returnurl || '/home');
                // } else if (status === 'unlogin') {
                //     this.$router.push('/login');
                // }

                /* 解决方法二
                    不显示两次重定向 的报错提示，因为功能是正常的
                    捕获 Promise 中的异常
                */
               this.$router
                .push(this.$route.query.returnurl || '/home')
                .catch(() => {});
            }
        }, 
        { immediate: true }, // $watch 的额外配置
    );
},
destroyed() {
    this.unwatch(); // 取消监控（$watch 的返回值为一个 unwatch 函数，执行该函数就取消监控）
},
```

router

[exact-path](https://router.vuejs.org/api/)

导航守卫

## 页面标题的统一处理

设置网页图标
```js
// 用link标签实现shortcut icon

<link rel="shortcut icon " type="images/x-icon" href="http://www.jd.com/favicon.ico">
```

设置网页标题 --> document.title(可读，可写)

## 完成 [关于我] 页面

网页已经加载 iframe 到 iframe 链接到iframe网址（即src）之间有一段空白期，页面无呈现 --> 解决方法 --> 利用load 事件，load事件完成后(即iframe 链接到iframe网址)才将 loading 标志置true, 否则页面处在loading...效果
```js
<div class="about-container" v-loading="loading || !srcLoaded">
    <iframe 
      v-if="src" 
      class="about-content" 
      :src="src" 
      frameborder="0"
      @load="srcLoaded = true"
    >
    </iframe>
  </div>
```

## 打包结果分析

+ 路由懒加载
    + 就是利用 webpack 的分包效果

+ 静态资源
    + static
        + 纯静态资源（在public 目录下的资源文件）
            + 会原封不动的到输出目录(即dist 目录)
    + assets
        + 嵌入式静态资源
            + 会参与到打包结果，最终的生成结果可能并没有该文件(文件较小 -> base64), 如果文件较大，可能生成到输出目录，但会进行一些改文件名、做一下哈希编码之类的

## 异步组件



## 随记

单组件测试 -> vue serve -> 默认找App.vue文件运行(即vue serve -> vue serve App.vue)

获取元素相对于视口的left, top等值 -> ele.getBoundingClientRect().left(或.top)

只有一个分支，v-if -> v-show

v-if 与 v-show 的区别

Vue的渲染效率取决于树的节点数和树的稳定性

状态变化频繁的时候使用v-show,保持树的稳定

状态变化较少的时候使用v-if,减少树的节点数和渲染量

Vue2.x 计算属性可以依赖于另一个计算属性

在**script**中导入的时候用@表示src目录

在**style**中导入的时候用~@表示src目录

组件化开发思想 - 开发某一组件时可以导入引用之前开发完毕的组件

工程化思想 - 将重复的样式代码放到公共样式中，后期开发直接导入引用

```
Image onload 事件

定义和用法
onload 事件在图片加载完成后立即执行。

语法
onload="JavaScriptCode"

参数	描述
JavaScriptCode	必须。在事件触发后执行的Javascript代码。
```

```
transition

transition CSS 属性是 transition-property，transition-duration，transition-timing-function 和 transition-delay 的一个简写属性。

过渡可以为一个元素在不同状态之间切换的时候定义不同的过渡效果。比如在不同的伪元素之间切换，像是 :hover，:active 或者通过 JavaScript 实现的状态变化。
```

```
Less Darken降低亮度

描述:
它降低了元素中颜色的亮度。 

语法：
background-color: darken(color, amount);

参数：

color ：它代表颜色对象。

amount ：它包含0 - 100%之间的百分比。

方法：它是可选参数，通过将其设置为相对，用于相对于当前值进行调整。

```

**查看所有版本号**：
npm view xxx versions

**查看当前@vue/cli-service版本**

npm view @vue/cli versions

**查看vue版本**

npm list vue -g

[vue常用的几个npm指令以及注解](https://blog.csdn.net/GongWei_/article/details/109984842)

[vue npm 常用指令大全](https://blog.csdn.net/weixin_43365995/article/details/120223470)

[vue常用的npm命令](https://www.jianshu.com/p/a610e2824837)

[npm常用命令和Vue安装依赖](https://blog.csdn.net/weixin_45144296/article/details/109224691)

[npm常用指令&&开发环境生产环境详解](https://blog.csdn.net/chengqige/article/details/119256012)

### 踩坑记录

1. 单组件测试中，vue serve 之后页面没有效果 --> vue cli版本降低到4.5.0
2. vue.config.js配置文件里的transpileDependencies属性报错 --> 注释掉该文件内容
3. vue.config.js配置文件注释之后报错"this.getOptions is not a function" --> less-loader版本过高，降低版本为5.0.0 --> [Vue/cli4.5版本升级采坑(2) - less-loader版本过高；引入less全局变量。](https://blog.csdn.net/sherleysong/article/details/115937452)
4. 安装 vuex 时报错"unable to resolve dependency tree" --> 版本问题，安装 npm i vuex@3

```
注意：在vscode 中的项目执行安装指令时报错 "operation not permitted"  --> 权限不够，以管理员身份运行cmd命令行窗口再执行安装指令
```

图片、字体文件、mp3文件、多媒体文件等静态资源，与服务器没有什么关系的可以直接放到assets文件夹

template模板中资源的路径一经打包完成过后 会变成打包过后的路径 -> 静态路径（相对于工程的路径）会自动处理变成最终的路径

部署的时候会将很小的资源变成Data base64(即base64数据)

将静态资源写成数据 -> 利用fireLoader, 导入静态资源并作为数据（该数据就已经是打包好的路径了）
```vue
<template>
  <div class="loading-container">
      <img :src="loadingUrl" alt="加载图">
  </div>
</template>

<script>
import loadingUrl from "@/assets/loading.svg";
export default {
    data() {
        return {
            loadingUrl,
        }
    }
}
</script>
```

凡是界面上有可能发生变化的动态数据，要么是组件属性，或者是组件数据，总归就是要有数据来源

vue 的开发一定是关注数据的


## Vue-个人博客项目总结

+ 抽离重复用到的 css 样式
    + 抽离到 less 文件，再引入到需要的组件 -> @import ""
    + 对有可能改变的 css 样式值 以 css 变量的形式进行赋值
    ```css
    .self-center(@pos: absolute) {
        position: @pos;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
    ```
+ 在组件通信中，为了更好的应用已开发的组件，基于 markdown 的基本语法编写组件说明文档，减少回顾组件的时间，提升开发效率

+ 给组件的样式命名统一规范，对组件应用到的子组件进行样式设置时 可以根据命名直接进行样式设置

+ 组件中加载大图片要经过很长时间才能加载出来，为了提升用户体验，在网页图片区域先放个占位图片(小图片)，先加载占位图片，等原图加载完毕之后替换占位图 --> 即渐进式图片 --> 为了通用性，可作为一个组件(Avatar)
    + 遇到的问题
        + 占位图加载完毕之后，由于展位图很小，呈现模糊，为了提升体验(视觉效果)，采用 CSS3样式 filter: blur(2vw) 进行虚化(边缘会超出用 overflow: hidden)，更好的视觉感官
        + 原图加载完毕后，就 v-if 掉占位图，但原图从opacity: 0 -> opacity: 1需要 duration 时间，导致去掉占位图到呈现原图之间的一段时间页面空白。为了衔接，等到原图opacity:1 之后再去掉占位图



+ 单组件测试文件的方式 -> npm run 测试文件 / vue serve App.vue(在组件 vue serve 测试时默认找 App.vue文件)

+ 获取当前网页路径
  1. location, 如 location.href / location.port
  2. 组件内获取 -> this.$route.

+ 文章下的模糊匹配
    + 在标志属性成立下，判断 当前浏览器的访问路径 curPathName 是否以 菜单的链接地址 link 开头 --> curPathName.startsWith(link)

+ 子组件的模板区域未确定，可以是一个文本，也可能是一段html, 具体是什么不知道，需要父组件指定，采用 插槽 slot , 灵活传递
    + slot Vue 内置组件、插槽、占位
        ```js
        <!-- message组件：一个弹窗消息 -->
        <div class="message-container">
          <div class="content">
            <!-- slot是vue的内置组件 -->
            <slot></slot>
          </div>
          <button>确定</button>
          <button>关闭</button>
        </div>

        <!-- 父组件App -->
        <Message>
            <!-- 简化写法 -->
        	<div class="app-message">
                <p>App Message</p>
                <a href="">detail</a>
            </div>
            <!-- 完整写法 -->
            <!-- <tempalate v-slot:default>
                <div class="app-message">
                    <p>App Message</p>
                    <a href="">detail</a>
                </div>
            </template> -->
        </Message>

        <!-- 最终的结果 -->
        <div class="message-container">
          <div class="content">
            <div class="app-message">
              <p>App Message</p>
              <a href="">detail</a>
            </div>
          </div>
          <button>确定</button>
          <button>关闭</button>
        </div>
        ```
    + 如果某个zu'jain中需要父元素传递多个区域的内容，也就意味着需要提供多个插槽。为了避免冲突，就需要给不同的插槽赋予不同的名字  --> 具名插槽
        ```js
        <!-- Layout 组件 -->
        <div class="layout-container">
          <header>
            <!-- 我们希望把页头放这里，提供插槽，名为header -->
            <slot name="header"></slot>
          </header>
          <main>
            <!-- 我们希望把主要内容放这里，提供插槽，名为default -->
            <slot></slot>
          </main>
          <footer>
            <!-- 我们希望把页脚放这里，提供插槽，名为footer -->
            <slot name="footer"></slot>
          </footer>
        </div>

        <!-- 父组件App -->
        <BaseLayout>
          <template v-slot:header>
            <h1>Here might be a page title</h1>
          </template>

          <template v-slot:default>
            <p>A paragraph for the main content.</p>
            <p>And another one.</p>
          <template v-slot:default>

          <template v-slot:footer>
            <p>Here's some contact info</p>
          </template>
        </BaseLayout>
        ```
    + v-slot:footer 可以简写为 #slot

+ 在单页面应用下，根据不同路径渲染不同页面(组件)
  + 问题1
    + 如何根据地址中的路径选择不同的组件？
      + Vue 插件 -> 路由插件 **vue-router**
        + 路由：根据不同的地址，不同的路径来得到不同的东西(组件)
        + 使用 vue-router
        ```js
        import Vue from 'vue';
        import VueRouter from 'vue-router'
        Vue.use(VueRouter); // Vue.use(插件) 在 Vue 中安装插件

        const router = new VueRouter({
          // 路由配置
        });
        new Vue({
          ...,
          router,
        });
        ```
    + 把选择的组件放到哪个位置？
    ```js
    // 路由配置
    const router = new VueRouter({
      routes: [ // 匹配规则
        // 当匹配到路径 /foo 时，渲染 Foo 组件
        { path: '/foo', components: Foo },
        // 当匹配到路径 /bar 时，渲染 Bar 组件
        { path: '/bar', components: Bar },
      ],
    });


    <!-- App.vue -->
    <div>
      <div>
        <!-- 公共区域 -->
      </div>
      <div>
        <!-- 页面区域 -->
        <RouterView>
          <!-- vue-router 匹配到的组件会渲染到这里 -->
        </RouterView>
      </div>
    </div>
    ```
      + <RouterView /> 占位，类似于 插槽，内部就是用插槽实现的
        + <RouterView /> 组件在 Vue.use(VueRouter) 之后会全局注册 RouterView 组件
    + 如何无刷新的切换组件？(只切换部分区域，而不是整个单页面应用都重新渲染一遍，提高效率)
      + #/ 路径的读取在 # 后进行读取 --> # 锚链接/哈希
      + 改变哈希可以改变页面且 哈希值的切换/锚链接的切换 不会刷新页面  --> 实现无刷新跳转
      + 路由默认从哈希获取路径，也默认修改哈希值来修改路径
      
  + 补充：
    + 路由根据不同路径渲染不同组件，而路由模式决定了路由从哪里获取访问路径、路由如何改变访问路径
      + vue-router 提供了三种路由模式：
        1. hash: 默认值。路由从浏览器地址栏中的 hash 部分获取路径，改变路径也是改变的hash部分。该模式兼容性最好。
          ```
          http://localhost:8081/#/blog  -->  /blog
          http://localhost:8081/about#/blog  --> blog
          ```
        2. history:路由从浏览器地址栏的 location.pathname 中获取路径，改变路径使用的 H5 的 history api。该模式可以让地址栏最友好，但是需要浏览器支持 hitory api
          ```
          http://localhost:8081/#/blog  -->  /blog
          http://localhost:8081/about#/ blog  -->  /about
          http://localhost:8081/blog    -->  /blog
          ```
        + 用 location.href 改变地址 页面会刷新，而 history api --> history.pushState(null, null, "路径") 可以实现页面无刷新跳转，但是地址栏没改变 --> 之后涉及
        + 兼容性没有哈希好，但现在大部分浏览器都支持
        3. abstract: 路由从内存中获取路径，改变路径也只是改动内存内存中的值。这种模式通常应用到非浏览器环境中。
          + 了解即可，除非应用到手机上面并且还不是网页应用，而是原生应用或混合应用
          + 有的环境里面根本没有浏览器的，没有浏览器哪来的地址栏，哪来的哈希，哪来的pathname，哪来的 location
        
    + 更改路由模式为 history 后，页面跳转会刷新
      + 一次刷新会做很多工作
        1. 请求 index.html
        2. 请求 各种 .js
        3. 请求 各种 .css
        4. 执行js
        5. 创建 vue 应用
        6. 渲染全部组件树
        6. 挂载到指定的 div 中
      + 而不刷新则会省去很多工作。不刷新的工作：执行一段 js 代码：切换某个区域的组件  --> 不刷新效率会高很多

+ 路由模式为 history 下，为实现无刷新，用 router-link 替代 a 元素
  + vue-router 提供了全局的组件 RouterLink , 它的渲染结果是一个 a 元素
  ```html
    <RouterLink to="/blog">文章</RouterLink>
    <!-- mode:hash 生成 -->
    <a href="#/blog">文章</a>
    <!-- mode:history 生成 -->
    <!-- 为了避免刷新页面，vue-router实际上为它添加了点击事件，并阻止了默认行为，在事件内部使用hitory api更改路径 -->
    <a href="/blog">文章</a>
    ```
  + 使用 RouterLink 之后，如果路由模式切换， a 标签的链接自动适配为相应模式下的链接形式(如mode: 'hash' --> <a href='#/blog'></a>；mode: 'history' --> <a href='/blog'></a>) , 解除系统与模式之间的耦合

  + 切换不同组件时，路由 根据路由模式 切换览器地址栏中的路径部分 ，无刷新切换，改了路径之后 vue-router 监控到路径变化 --> 读取路径 -> 根据路由匹配规则 匹配组件 -> 将匹配到的相应组件渲染到 RouterView 占位区域

+ 使用 RouterLink 之后切换的当前页面没有选中效果  --> 激活状态

+ 使用 通过`exact-active-class`精确匹配 激活状态后，当路由为 文章模块下的文章详情页的地址时，文章模块的激活状态失效了，希望访问文章详情页时，文章模块的激活状态仍生效
  + 解决方法：
    + 可以为组件`RouterLink` 和 文章等模块 添加bool属性`exact`，将匹配规则改为：必须要精确匹配（即 当前路径完全等于导航路径）才能添加匹配类名`router-link-active`。
      + 即 将 `exact` 属性作为精确匹配的开关，当 `exact` 为true时，开启精确匹配（就可以过滤非文章模块）；当`exact` 为false时（就是筛选到文章模块了），关闭精确匹配， 进行模糊匹配，添加匹配类名`router-link-active`。就可以做到 当访问地址为文章模块下的文章详情页时，文章模块仍选中。
        > 注意： bool属性`exact` 是 组件`RouterLink` 的属性
  + 补充：
    + 激活状态

    默认情况下，`vue-router`会用 **当前路径** 匹配 **导航路径** ：

    - 如果当前路径是以导航路径开头，则算作匹配，会为导航的a元素添加类名`router-link-active`
    - 如果当前路径完全等于导航路径，则算作精确匹配，会为导航的a元素添加类名`router-link-exact-active`

    可以为组件`RouterLink`添加bool属性`exact`，将匹配规则改为：必须要精确匹配才能添加匹配类名`router-link-active`

    另外，可以通过`active-class`属性更改匹配的类名，通过`exact-active-class`更改精确匹配的类名

+ 更改某个模块对应的路径名字，如 localhost:8080/blog --> localhost:8080/article，需要到路由配置、组件中修改路径名字，比较麻烦（当多个路径都要该名字时就很繁琐），采用 命名路由 ，只需要在路由配置修改目的路径名字就可以达到根据名字找到对应的路径生成的，解除系统与路径之间的耦合的目的
  + 补充：
    + 命名路由
      使用命名路由可以解除系统与路径之间的耦合
      ```js
      // 路由配置
      const router = new VueRouter({
        routes: [ // 路由规则
          // 当匹配到路径 /foo 时，渲染 Foo 组件
          { name:"foo", path: '/foo', component: Foo },
          // 当匹配到路径 /bar 时，渲染 Bar 组件
        	{ name:"bar", path: '/bar', component: Bar }
        ]
      })

      <!-- 向to属性传递路由信息对象 RouterLink会根据你传递的信息以及路由配置生成对应的路径 -->
      <RouterLink :to="{ name:'foo' }">go to foo</RouterLink>
      ```