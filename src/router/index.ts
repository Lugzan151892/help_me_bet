import { createMemoryHistory, createRouter } from "vue-router";
import MainView from "@/views/main/MainView.vue";
import LoginView from "@/views/authorization/login/LoginView.vue";

const routes = [
  { path: '/', component: MainView },
  { path: '/login', component: LoginView },
]

export default createRouter({
  history: createMemoryHistory(),
  routes,
});