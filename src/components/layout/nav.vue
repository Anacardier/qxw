<template>
  <div class="qxw-nav">
    <div class="nav-container">
      <a href="/" class="logo">
        <img
          src="~@/assets/images/logo.png"
          width="120"
          height="30"
          alt="创乐坊"
        />
      </a>
      <div class="nav-bar">
        <ul class="nav-list">
          <li class="nav-item" v-for="(item, index) in state.list" :key="index">
            <router-link :to="item.link">
              {{ item.name }}
            </router-link>
          </li>
        </ul>
        <div class="nav-bar-auth">
          <el-input
            :class="state.isFocus ? 'focus' : ''"
            v-model="state.keywords"
            @focus="onFocusChange"
            @blur="onBlurChange"
            suffix-icon="el-icon-search"
            placeholder="请输入内容"
          ></el-input>
          <div class="login">注册/登录</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const state = reactive({
  list: [
    {
      name: "抢先玩",
      link: "/home",
    },
  ],
  auth: false,
  isFocus: false,
  keywords: "",
});

const onFocusChange = () => {
  state.isFocus = true;
};
const onBlurChange = () => {
  state.isFocus = false;
};
</script>

<style lang="scss" scoped>
.qxw-nav {
  position: fixed;
  top: 0;
  width: 100%;
  height: 54px;
  border-top: 2px solid #ff6c5f;
//   border-bottom: 1px solid #f1f1f1;
  background: rgba(54, 57, 63, 0.4);
//   backdrop-filter: saturate(180%) blur(20px);
  z-index: 999;
  .nav-container {
    display: flex;
    max-width: 1200px;
    min-width: 780px;
    margin: 0 auto;
  }
  .logo {
    margin-top: 12px;
    margin-right: 15px;
    img {
      vertical-align: middle;
    }
  }
  .nav-bar {
    display: flex;
    width: 100%;
    height: 100%;
    line-height: 54px;
    justify-content: space-between;
    .nav-list {
      display: flex;
      .nav-item {
        margin-right: 12px;
        transition: all 0.3s;
        &:last-child {
          margin-right: 0;
        }
        a {
          display: block;
          padding: 0 10px;
        }
      }
    }
  }
  .nav-bar-auth {
    display: flex;
    .el-input {
      transition: all 0.3s;
      width: 160px;
      height: 32px;
      margin-top: 11px;
      margin-right: 12px;
      transition: width 0.3s;
      &.focus {
        width: 260px;
      }
    }
    .login {
      cursor: pointer;
      &:hover {
        color: #ff6c5f;
        transition: color 0.3s;
      }
    }
  }
}
</style>
