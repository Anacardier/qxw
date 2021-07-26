<template>
  <div class="qxw-dialog">
    <el-dialog
      v-model="dialogVisible"
      :width="width || '30%'"
      :show-close="false"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
    >
      <template #title>
        <div class="qxw-dialog-title">
          <div class="dialog-title">{{title || '提示'}}</div>
          <div class="dialog-close animation-rotate">
            <font-awesome-icon @click="handleClose" icon="times" />
          </div>
        </div>
      </template>
      <slot></slot>
    </el-dialog>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
defineProps({
  width: String,
  title: String,
  handleClose: Function,
  dialogVisible: Boolean,
})

</script>

<style lang="scss" scoped>
.qxw-dialog {
  ::v-deep(.el-dialog) {
    box-shadow: 0 0 1.875rem rgba(0, 0, 0, 0.16);
    border-radius: .25rem;
    .el-dialog__header {
      padding: 0 16px;
      height: 3.813rem;
      line-height: 3.813rem;
      background: $primary-xs;
      border-radius: .25rem .25rem 0 0;
    }
    .el-dialog__body {
      padding: 1.5rem 1rem;
      font-size: 1.5rem;
    }
    .qxw-dialog-title {
      position: relative;
      .dialog-title {
        font-size: 1.75rem;
        font-weight: bold;
        color: $primary;
      }
      .dialog-close {
        position: absolute;
        top: 0;
        right: 0;
        font-size: 1.75rem;
        font-weight: 400;
        color: $primary;
        .svg-inline--fa {
          cursor: pointer;
        }
      }
    }
  }
}
@media screen and (max-width: 750px) {
  .qxw-dialog {
    ::v-deep(.el-dialog) {
      width: 95% !important;
    }
  }
}
</style>