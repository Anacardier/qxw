<template>
  <router-view />
</template>

<style lang="scss">
.login {
  .el-button--primary {
    margin-right: 1rem;
    width: 58px;
    height: 38px;
    background: $primary;
    border-color: $primary;
    border-radius: 6px;
    transition: all 0.3s;
    &:hover {
      background: rgba($primary, 0.85);
    }
    &:focus {
      box-shadow: 0 0 0 0.2rem rgba(174, 152, 190, 0.25);
    }
  }
  .el-button--text {
    font-size: 0.88rem;
    font-weight: bold;
    margin-left: 0;
    color: $primary;
    &:hover {
      color: rgba($primary, 0.75);
      transition: color 0.3s;
    }
  }
}
</style>
