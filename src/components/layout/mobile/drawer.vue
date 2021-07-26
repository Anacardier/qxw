<template>
  <el-drawer
    custom-class="mobile-drawer"
    direction="ltr"
    v-model="drawer"
    :modal="false"
    :close-on-press-escape="false"
    size="100%"
    :with-header="false"
  >
    <div class="close">
      <font-awesome-icon @click="cancel()" icon="times" />
    </div>
    <div class="content">
      <slot></slot>
    </div>
  </el-drawer>
</template>

<script setup>
import { defineProps } from "vue";
defineProps({
  drawer: Boolean,
  cancel: Function,
});
</script>

<style lang="scss">
.mobile-drawer {
  padding: 0 2.25rem;
  .close {
    color: $primary;
    font-size: 1.75rem;
    margin-top: 0.81rem;
    margin-bottom: 2rem;
  }
}
</style>