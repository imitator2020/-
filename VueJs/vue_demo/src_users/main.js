import Vue from 'vue';
import App from './App.vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)  //声明使用，会在每个组件添加$http属性，包含了get、post方法
new Vue({
    el:'#app',
    components: {
        App
    },
    template:'<App/>'
})