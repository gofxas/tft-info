import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
const app = createApp(App)

app.config.globalProperties.baseimg = "//game.gtimg.cn/images/lol/tftstore/s10/624x318/";
app.config.globalProperties.baseimgs11 = "//game.gtimg.cn/images/lol/tftstore/s11/624x318/";
// game.gtimg.cn/images/lol/act/img/tft/champions/10005.png
app.config.globalProperties.headimg = "//game.gtimg.cn/images/lol/act/img/tft/champions/";

app.use(ElementPlus)
app.use(router);
app.mount("#app");
