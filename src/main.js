import { createApp } from 'vue'
import App from './App.vue'
// import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import './style/app.sass';
import router from './router'
import { regComponents } from "./components/reg";
import 'animate.css/animate.min.css';
import '../public/iconfont/iconfont.css'
import store from './store'
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

const app = createApp(App)

regComponents(app);

app.config.productionTip = false;
app.use(router);
app.use(store);
// app.use(Antd);
// app.use(BootstrapVue);
// app.use(IconsPlugin);
app.mount('#app')
