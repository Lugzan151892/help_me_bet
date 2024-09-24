<template>
  <div :class="$style[className]">
    tut main stranica
  </div>
</template>

<script lang="ts" setup>
const componentName = 'MainView';
const className = 'main-view';

</script>

<style lang="scss" module>
$component: 'main-view';
.#{$component} {
}
</style>
