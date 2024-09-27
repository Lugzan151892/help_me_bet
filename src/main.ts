import { createApp } from "vue";
import "@/style.css";
import App from "@/App.vue";
import router from "@/router";
import "@/styles/variables.scss";
import "@/styles/styles.scss";
import styles from "orange-ui-kit";

const app = createApp(App);
app.use(router);
app.mount("#app");
