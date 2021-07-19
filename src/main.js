import { createApp } from 'vue'
import App from './App.vue'
import "bulma/css/bulma.css"
import '@/assets/css/base.css';
import ElementPlus from "element-plus";
import 'element-plus/packages/theme-chalk/src/base.scss'
import 'element-plus/lib/theme-chalk/index.css';
import '@/assets/css/resets.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import fontawesome from "@/fontawesome";
import router from "./router";

// 加载使用的图标
library.add(...fontawesome)

console.log(library)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).use(ElementPlus, {size: 'small'}).mount('#app')
