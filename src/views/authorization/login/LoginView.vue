<template>
	<div :class="$style[className]">tut login page</div>
</template>

<script lang="ts" setup>
const componentName = "LoginView";
const className = "login-view";
</script>

<style lang="scss" module>
$component: "login-view";
.#{$component} {
}
</style>
