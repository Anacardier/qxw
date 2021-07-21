<template>
  <div class="qxw-header">
    <div class="qxw-nav">
      <div class="nav-container container">
        <a href="/" class="logo">
          <img src="~@/assets/images/logo.svg" alt="抢先玩" />
        </a>
        <div class="nav-bar">
          <div class="nav-list">
            <ul>
              <li
                class="nav-item"
                v-for="(item, index) in state.list"
                :key="index"
              >
                <router-link :to="item.link">
                  {{ item.name }}
                </router-link>
              </li>
            </ul>
            <div class="nav-help">
              <router-link to="/home"> 如何参与抢鲜玩？ </router-link>
            </div>
          </div>
          <div class="nav-bar-auth">
            <el-input
              :class="state.isFocus ? 'focus' : ''"
              v-model="state.keywords"
              @focus="onFocusChange"
              @blur="onBlurChange"
              suffix-icon="el-icon-search"
              placeholder="请输入内容"
            ></el-input>
            <div class="login">
              <el-button class="qxw-login" type="primary">登录</el-button>
              <el-button class="qxw-reg" type="text">注册</el-button>
            </div>
          </div>
        </div>
      </div>
      <div class="nav-m-container container">
        <div @click="openDrawer()" class="nav-bars">
          <font-awesome-icon icon="bars" />
        </div>
        <div class="nav-search">
          <font-awesome-icon icon="search" />
        </div>
      </div>
    </div>
    <Drawer :cancel="cancelDrawer" :drawer="state.drawer" />
    <!-- <MobileMenu
      :keywords="state.keywords"
      :list="state.list"
      :cancel="cancelDrawer"
      :drawer="state.mobile.drawerMenu"
    /> -->
  </div>
</template>

<script setup>
import { reactive } from "vue";
import Drawer from "./mobile/drawer.vue";
// import MobileMenu from "./mobile/menu.vue";
const state = reactive({
  list: [
    {
      name: "首页",
      link: "/home",
    },
  ],
  auth: false,
  isFocus: false,
  keywords: "",
  drawer: false,
});

const onFocusChange = () => {
  state.isFocus = true;
};
const onBlurChange = () => {
  state.isFocus = false;
};

const openDrawer = () => {
  state.drawer = true;
};

const cancelDrawer = () => {
  state.drawer = false;
};
</script>

<style lang="scss" scoped>
.qxw-header {
  height: 3.38rem;
  .qxw-nav {
    position: fixed;
    top: 0;
    width: 100%;
    height: 3.38rem;
    padding: 0.44rem 0;
    border-top: 2px solid $primary;
    box-shadow: 0px 0.5rem 1rem rgba(10, 10, 10, 0.1);
    backdrop-filter: saturate(180%) blur(1.25rem);
    z-index: 999;
    .nav-m-container {
      display: none;
    }
    .nav-container {
      display: flex;
      margin: 0 auto;
    }
    .logo {
      width: 3.25rem;
      height: 2.38rem;
      margin-right: 2rem;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .nav-bar {
      display: flex;
      width: 100%;
      height: 100%;
      line-height: 2.38rem;
      font-size: 0.88rem;
      justify-content: space-between;
      .nav-list {
        display: flex;
        .nav-item {
          color: #4a4a4a;
          font-weight: bold;
          margin-right: 0.75rem;
          transition: all 0.3s;
          &:last-child {
            margin-right: 0;
          }
          a {
            display: block;
            padding: 0 0.63rem;
          }
        }
        .nav-help {
          font-size: 0.75rem;
          margin-left: 2.25rem;
        }
      }
      .nav-bar-auth {
        display: flex;
        ::v-deep(.el-input) {
          transition: all 0.3s;
          width: 13.75rem;
          height: 2.38rem;
          margin-right: 1.38rem;
          transition: width 0.3s;
          .el-input__inner {
            color: $primary;
            height: 2.38rem;
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
            .el-input__suffix-inner {
              vertical-align: middle;
            }
          }
          &.focus {
            width: 22.5rem;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 750px) {
  .qxw-header {
    height: 2.75rem;
    .qxw-nav {
      height: 2.75rem;
      .nav-container {
        display: none;
      }
      .nav-m-container {
        display: flex;
        padding: 0 2.13rem;
        justify-content: space-between;
        .nav-bars,
        .nav-search {
          color: $primary;
          font-size: 1.25rem;
        }
      }
    }
  }
}
</style>
