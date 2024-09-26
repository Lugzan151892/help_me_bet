import { createRouter, createWebHistory } from "vue-router";

const routes = [
	{
		path: "/",
		components: {
			default: () => import("@/views/main/MainView.vue"),
		},
	},
	{
		path: "/login",
		components: {
			default: () => import("@/views/authorization/login/LoginView.vue"),
		},
	},
  {
		path: "/registration",
		components: {
			default: () => import("@/views/authorization/registration/RegistrationView.vue"),
		},
	},
];

export default createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
});
