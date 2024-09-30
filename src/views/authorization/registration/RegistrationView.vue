<template>
	<section :class="$style[className]">
		<h1>Регистрация</h1>
		<div class="o-flex o-flex-column" :class="$style[`${className}-wrapper`]">
			<OLabel caption="E-mail">
				<OInput />
			</OLabel>
			<OLabel caption="Password">
				<OInput type="password" />
			</OLabel>
			<OLabel caption="Repeat password">
				<OInput type="password" />
			</OLabel>
			<OButton class="o-p-8" text="Зарегистрироваться" />
			<span> Уже есть аккаунт? <span class="o-link" @click="goToLogin()">Войти</span> </span>
		</div>
	</section>
</template>

<script lang="ts" setup>
import { OButton, OInput, OLabel } from "orange-ui-kit";
import { useRouter } from "vue-router";

const componentName = "RegistrationView";
const className = "registration-view";

const router = useRouter();

const goToLogin = () => {
	router.push("/login");
};
</script>

<style lang="scss" module>
$component: "registration-view";
.#{$component} {
	&-wrapper {
		flex-direction: column;
	}
}
</style>
