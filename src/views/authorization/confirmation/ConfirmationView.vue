<template>
  <div :class="$style[className]">
    content
  </div>
</template>

<script lang="ts" setup>
const componentName = 'ConfirmationView';
const className = 'confirmation-view';

</script>

<style lang="scss" module>
$component: 'confirmation-view';
.#{$component} {
}
</style>
