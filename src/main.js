import { createApp } from 'vue'
import App from './App.vue'
import element from "@/utils/element";
import "bulma/css/bulma.css"
import '@/assets/css/base.css';
import '@/assets/css/themes/index.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import fontawesome from "@/utils/fontawesome";
import router from "@/router";

const app = createApp(App);
// 加载使用的图标
library.add(...fontawesome)

// element ui
app.config.globalProperties.$ELEMENT = { size: 'small' }
element.forEach(element => {
  app.component(element.name, element)
})

app.component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app')
