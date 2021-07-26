import { createApp } from 'vue'
import App from './App.vue'
import { ElMessage, ElMessageBox } from "element-plus";
import element from "@/utils/element";
import "bulma/css/bulma.css"
import '@/assets/css/base.css';
import '@/assets/css/themes/index.scss';
import 'element-plus/packages/theme-chalk/src/base.scss'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import fontawesome from "@/utils/fontawesome";
import QxwDialog from '@/components/qxwDialog';
import router from "@/router";

const app = createApp(App);
// 加载使用的图标
library.add(...fontawesome)

// 全局组件
app.component('QxwDialog', QxwDialog);
// element ui
app.config.globalProperties.$ELEMENT = { size: 'small' }
app.config.globalProperties.$message = ElMessage;
app.config.globalProperties.$messageBox = ElMessageBox;
app.config.globalProperties.$alert = ElMessageBox.alert;
app.config.globalProperties.$confirm = ElMessageBox.confirm;
element.forEach(element => {
  app.component(element.name, element)
})

app.component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app')
