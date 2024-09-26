<template>
	<section :class="$style[className]">
    <h1>Login</h1>
    <div>
      <OLabel caption="E-mail">
        <OInput />
      </OLabel>
      <OLabel caption="Password">
        <OInput />
      </OLabel>
      <OButton text="Войти"/>
      <span>
        Нет аккаунта? <span class="r-pointer" @click="goToRegistration()">Зарегистрироваться</span>
      </span>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { OButton, OInput, OLabel } from 'orange-ui-kit';
import { useRouter } from 'vue-router';

const componentName = "LoginView";
const className = "login-view";

const router = useRouter();

const goToRegistration = () => {
  router.push('/registration')
}
</script>

<style lang="scss" module>
$component: "login-view";
.#{$component} {
}
</style>
