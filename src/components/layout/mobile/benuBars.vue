<template>
  <div class="menu-bars">
    <div class="list">
      <div class="nav-item" v-for="(item, index) in list" :key="index">
        <router-link :to="item.link">
          {{ item.name }}
        </router-link>
      </div>
    </div>
    <div class="nav-help">
      <router-link to="/home"> 如何参与抢先玩？ </router-link>
    </div>
    <div class="login">
      <el-button class="qxw-reg" type="primary">注册</el-button>
      <el-button class="qxw-login" type="text">登录</el-button>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
defineProps({
  list: Array,
});
</script>

<style lang="scss">
.menu-bars {
  .list {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1.5rem;
  }
  .nav-help {
    margin-bottom: 2rem;
    a {
      font-size: 1rem;
      color: $text-light;
    }
  }
  .search {
    .el-input {
      transition: all 0.3s;
      width: 19rem;
      height: 2.313rem;
      .el-input__inner {
        color: $primary;
        height: 2.313rem;
        line-height: 2.313rem;
        font-size: 0.88rem;
        border: 2px solid $primary;
        border-radius: 1.25rem;
        &::placeholder {
          color: $primary;
          font-size: 0.88rem;
        }
      }
      .el-input__suffix {
        color: $primary;
        font-size: 1.13rem;
        margin-right: 0.75rem;
        .el-input__suffix-inner {
          vertical-align: middle;
        }
      }
    }
  }
}
</style>
