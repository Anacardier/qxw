import Http from '@/axios/index';
import {
  ElMessage,
  ElMessageBox
} from "element-plus";

const extend = (app) => {
  app.config.globalProperties.$Http = Http;
  app.config.globalProperties.$ELEMENT = {
    size: 'small'
  };
  app.config.globalProperties.$message = ElMessage;
  app.config.globalProperties.$messageBox = ElMessageBox;
  app.config.globalProperties.$alert = ElMessageBox.alert;
  app.config.globalProperties.$confirm = ElMessageBox.confirm;
}


export default extend;