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
                class="nav-item active"
                v-for="(item, index) in state.list"
                :key="index"
              >
                <router-link :to="item.link">
                  {{ item.name }}
                </router-link>
              </li>
            </ul>
            <div class="nav-help">
              <router-link to="/home"> 如何参与抢先玩？ </router-link>
            </div>
          </div>
          <div class="nav-bar-auth">
            <el-input
              :class="state.isFocus ? 'focus' : ''"
              v-model="state.keywords"
              @focus="onFocusChange"
              @blur="onBlurChange"
              placeholder="搜索"
              @keyup.enter="search"
            >
              <template #suffix>
                <font-awesome-icon icon="search" />
              </template>
            </el-input>
            <div
              @click.stop="(e) => e.preventDefault()"
              :class="[
                'search-history',
                state.searchHistory && !state.keywords ? 'show' : 'hide',
              ]"
            >
              <div class="search-history-title text-bold">
                <span>推荐</span>
                <font-awesome-icon class="animation-rotate" icon="sync" />
              </div>
              <div class="search-content-list">
                <div
                  class="search-content-item ellipsis"
                  v-for="(item, idx) in state.recommendList"
                  :key="idx"
                  @click="() => searchHistoryLink(item)"
                >
                  {{ item }}
                </div>
              </div>
              <template v-if="state.historyList && state.historyList.length > 0">
                <div class="search-history-title text-bold">
                  <span>搜索历史</span>
                  <font-awesome-icon @click="cancelHistoryLog" icon="trash-alt" />
                </div>
                <div class="search-content-list">
                  <div
                    class="search-content-item ellipsis"
                    v-for="(item, idx) in state.historyList"
                    :key="idx"
                    @click="() => searchHistoryLink(item)"
                  >
                    {{ item }}
                  </div>
                </div>
              </template>
            </div>
            <div class="login">
              <el-button class="qxw-login" type="primary">登录</el-button>
              <el-button class="qxw-reg" type="text">注册</el-button>
            </div>
          </div>
        </div>
      </div>
      <div class="nav-m-container container">
        <div @click="openDrawer('bars')" class="nav-bars">
          <font-awesome-icon icon="bars" />
        </div>
        <div class="nav-search">
          <font-awesome-icon icon="search" @click="openDrawer('search')" />
        </div>
      </div>
    </div>
    <Drawer :cancel="cancelDrawer" :drawer="state.drawer">
      <Search v-if="state.isSearch" :keywords="state.keywords" />
      <MenuBars v-if="state.isBars" :list="state.list" />
    </Drawer>
  </div>
</template>

<script setup>
import { getCurrentInstance, reactive } from "vue";
import Drawer from "./mobile/drawer.vue";
import MenuBars from "./mobile/benuBars.vue";
import Search from "./mobile/search.vue";

const { proxy } = getCurrentInstance();
let qxwSearchKeyWords = JSON.parse(localStorage.getItem("qxwSearchKeyWords")) || []
const state = reactive({
  list: [
    {
      name: "首页",
      link: "/home",
    },
  ],
  recommendList: [
    "江湖十一江湖十一江湖十一江湖十一",
    "喵喵水族箱喵喵水",
    "超世界绿洲",
    "喵喵水族箱",
    "江湖十一",
    "超世界绿洲",
  ],
  historyList: qxwSearchKeyWords ? qxwSearchKeyWords.slice(0, 6) : qxwSearchKeyWords,
  navIdx: "0",
  auth: false,
  isFocus: false,
  searchHistory: false,
  keywords: "",
  drawer: false,
  isBars: false,
  isSearch: false,
});

const onFocusChange = () => {
  state.isFocus = true;
  state.searchHistory = true;
};
const onBlurChange = () => {
  state.isFocus = false;
};

// 清除历史记录
const cancelHistoryLog = () => {
  proxy.$confirm("确定清除全部历史记录吗？", "提示", {
      confirmButtonText: "确定",
      cancelButtonText: "取消",
      type: "warning",
      closeOnClickModal: false,
    })
    .then(() => {
      localStorage.setItem("qxwSearchKeyWords", null);
      state.historyList = [];
      proxy.$message({
        type: "success",
        message: "删除成功!",
      });
    })
    .catch(() => {
      proxy.$message({
        type: "info",
        message: "已取消删除",
      });
    });
};

// 搜索历史进行搜索
const searchHistoryLink = (item) => {
  state.keywords = item;
  state.searchHistory = false;
  state.navIdx = 0;
  search();
};
// 搜索
const search = () => {
  // 搜索时保存历史记录
  if (qxwSearchKeyWords && qxwSearchKeyWords.length > 0) {
    let idx = qxwSearchKeyWords.indexOf(state.keywords);
    if (idx != "-1") {
      qxwSearchKeyWords.splice(idx, 1);
      qxwSearchKeyWords.unshift(state.keywords);
    } else {
      qxwSearchKeyWords.unshift(state.keywords);
    }
  } else {
    qxwSearchKeyWords.unshift(state.keywords);
  }
  localStorage.setItem("qxwSearchKeyWords", JSON.stringify(qxwSearchKeyWords));
  state.historyList = qxwSearchKeyWords.slice(0, 6);
  proxy.$router.push({
    path: "/search",
    query: {
      keywords: state.keywords,
      navIdx: state.navIdx,
    },
  });
};

const openDrawer = (type) => {
  state.drawer = true;
  if (type == "bars") {
    state.isBars = true;
    state.isSearch = false;
    return;
  }
  if (type == "search") {
    state.isSearch = true;
    state.isBars = false;
    return;
  }
};
const cancelDrawer = () => {
  state.drawer = false;
};

document.addEventListener("click", () => {
  if (!state.isFocus) {
    state.searchHistory = false;
  }
});
</script>

<style lang="scss" scoped>
.qxw-header {
  height: 3.375rem;
  .qxw-nav {
    position: fixed;
    top: 0;
    width: 100%;
    height: 3.375rem;
    padding: 0.44rem 0;
    border-top: 2px solid $primary;
    box-shadow: 0px 0.5rem 1rem rgba(10, 10, 10, 0.1);
    backdrop-filter: saturate(180%) blur(1.25rem);
    z-index: 99;
    .nav-m-container {
      display: none;
    }
    .nav-container {
      display: flex;
      margin: 0 auto;
    }
    .logo {
      width: 2.375rem;
      height: 2.375rem;
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
      line-height: 2.375rem;
      font-size: 0.75rem;
      justify-content: space-between;
      .nav-list {
        display: flex;
        .nav-item {
          font-size: 0.75rem;
          &.active {
            a {
              font-weight: bold;
              color: $text-bold;
            }
          }
          &:last-child {
            margin-right: 0;
          }
          a {
            display: block;
            padding: 0 0.63rem;
            &:hover {
              font-weight: bold;
              color: $text-bold;
            }
          }
        }
        .nav-help {
          font-size: 0.75rem;
          margin-left: 2.25rem;
        }
      }
      .nav-bar-auth {
        display: flex;
        position: relative;
        ::v-deep(.el-input) {
          transition: all 0.3s;
          width: 18rem;
          height: 2.375rem;
          margin-right: 1.375rem;
          transition: width 0.3s;
          .el-input__inner {
            color: $primary;
            height: 2.375rem;
            font-size: 0.88rem;
            border: 2px solid $primary;
            border-radius: 1.25rem;
            padding-right: 2.5rem;
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
              position: relative;
              top: 1px;
            }
          }
        }
        .search-history {
          position: absolute;
          top: 3.8rem;
          left: 0;
          width: 21.25rem;
          padding: 1rem 1.125rem;
          background: #ffffff;
          box-shadow: 0 0 1.875rem rgba(0, 0, 0, 0.16);
          border-radius: 0.25rem;
          transition: all 0.3s;
          visibility: hidden;
          opacity: 0;
          &.show {
            top: 3.25rem;
            opacity: 1;
            visibility: visible;
          }
          .search-history-title {
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: 1.125rem;
            .svg-inline--fa {
              cursor: pointer;
            }
          }
          .search-content-list {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            .search-content-item {
              flex: 0 0 46%;
              height: 1.875rem;
              line-height: 1.875rem;
              font-size: 0.875rem;
              margin-right: 4%;
              cursor: pointer;
              &:nth-child(2n) {
                margin-right: 0;
              }
            }
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
