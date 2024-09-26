<template>
  <section :class="$style[className]">
    <h1>Регистрация</h1>
    <div>
      <OLabel caption="E-mail">
        <OInput />
      </OLabel>
      <OLabel caption="Password">
        <OInput />
      </OLabel>
      <OLabel caption="Repeat password">
        <OInput />
      </OLabel>
      <OButton text="Зарегистрироваться"/>
      <span>
        Уже есть аккаунт? <span class="r-pointer" @click="goToLogin()">Войти</span>
      </span>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { OButton, OInput, OLabel } from 'orange-ui-kit';
import { useRouter } from 'vue-router';

const componentName = 'RegistrationView';
const className = 'registration-view';

const router = useRouter();

const goToLogin = () => {
  router.push('/login')
}

</script>

<style lang="scss" module>
$component: 'registration-view';
.#{$component} {
}
</style>
