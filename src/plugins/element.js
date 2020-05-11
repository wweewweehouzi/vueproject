import Vue from 'vue'
import {
    Button,
    Form,
    FormItem,
    Input,
    Message,

} from 'element-ui'


// 相当于全局注册这些组件
Vue.use(Button);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.prototype.$message = Message;