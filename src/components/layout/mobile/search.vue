<template>
  <div class="qxw-search">
    <el-input
      v-model="keywords"
      placeholder="搜索"
    >
      <template #prefix>
        <font-awesome-icon icon="search" />
      </template>
    </el-input>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
defineProps({
  keywords: String,
  inputStyle: Object,
});
</script>

<style lang="scss" scoped>
.qxw-search {
  display: flex;
  justify-content: space-between;
  ::v-deep(.el-input) {
    transition: all 0.3s;
    width: 18.938rem;
    height: 2.313rem;
    .el-input__inner {
      color: $primary;
      width: 18.938rem;
      height: 2.313rem;
      line-height: 2.313rem;
      font-size: 0.88rem;
      border: 2px solid $primary;
      border-radius: 1.25rem;
      padding-left: 2.5rem;
      &::placeholder {
        color: $primary;
        font-size: 1rem;
      }
    }
    .el-input__prefix {
      color: $primary;
      font-size: 1.13rem;
      margin-left: .75rem;
      .svg-inline--fa {
        vertical-align: middle;
      }
    }
  }
}
</style>