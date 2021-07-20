<template>
  <div class="home container">
    <div class="nav">
      <span
        v-for="(item, idx) in state.navList"
        :key="idx"
        @click="onChangeNav(idx)"
        :class="state.navActive == idx ? 'nav-item nav-active' : 'nav-item'"
      >
        {{ item }}
      </span>
    </div>
    <div v-if="state.navActive == 4" class="user-auth">
      <div v-if="!state.userInfo" class="user-content">
        <div class="user-nav">
          <span @click="onChangeUserNav(0)" :class="state.userNavActive == 0? 'active':''">已参与</span>
          <span @click="onChangeUserNav(1)" :class="state.userNavActive == 1? 'active':''">收藏</span>
        </div>
        <List :list="state.gameList" />
      </div>
      <div v-else class="user-tips">
        <div class="user-text">
          <p>看样子，</p>
          <p>您还没有准备好</p>
          <p>开始这美妙的快乐之旅，</p>
          <p>注册或登录账户以查看本页面。</p>
        </div>
        <div class="login">
          <el-button class="qxw-login" style="margin-right: 0" type="primary"
            >注册</el-button
          >
          <br />
          <el-button class="qxw-reg" type="text">登录</el-button>
        </div>
      </div>
    </div>
    <List v-else :list="state.gameList" />
  </div>
</template>

<script setup>
import { reactive } from "vue";
import List from "./list.vue";
const state = reactive({
  navList: ["发现", "热门", "最新", "即将上线", "我的"],
  navActive: "0",
  userNavActive: '0',
  gameList: [
    {
      name: "喵喵水族箱",
      desc: "超有趣的模拟经营养鱼游戏超有趣的模拟经营养鱼游戏超有趣的模拟经营养鱼超有趣的模拟经营养鱼游戏超有趣的模拟经营养鱼游戏超有趣的模拟经营养鱼",
      collection: 0,
      test: 1,
      tags: ["超受欢迎"],
      imgUrl:
        "https://cdn.indieclub.net/2021-06-22/1624375193-453165-2021527-155046.jpg",
      type: "1",
    },
    {
      name: "喵喵水族箱2",
      desc: "超有趣的模拟经营养鱼游戏超有趣的模拟经营养鱼游戏超有趣的模拟经营养鱼超有趣的模拟经营养鱼游戏超有趣的模拟经营养鱼游戏超有趣的模拟经营养鱼",
      collection: 1,
      test: 1,
      tags: ["超受欢迎"],
      imgUrl:
        "https://cdn.indieclub.net/2021-06-22/1624375193-453165-2021527-155046.jpg",
    },
    {
      name: "喵喵水族箱3",
      desc: "超有趣的模拟经营养鱼游戏超有趣的模拟经营养鱼游戏超有趣的模拟经营养鱼超有趣的模拟经营养鱼游戏超有趣的模拟经营养鱼游戏超有趣的模拟经营养鱼",
      collection: 1,
      test: 1,
      tags: ["超受欢迎"],
      imgUrl:
        "https://cdn.indieclub.net/2021-06-22/1624375193-453165-2021527-155046.jpg",
    },
    {
      name: "喵喵水族箱4",
      desc: "超有趣的模拟经营养鱼游戏超有趣的模拟经营养鱼游戏超有趣的模拟经营养鱼超有趣的模拟经营养鱼游戏超有趣的模拟经营养鱼游戏超有趣的模拟经营养鱼",
      collection: 0,
      test: 1,
      tags: ["超受欢迎"],
      imgUrl:
        "https://cdn.indieclub.net/2021-06-22/1624375193-453165-2021527-155046.jpg",
    },
    {
      name: "喵喵水族箱5",
      desc: "超有趣的模拟经营养鱼游戏超有趣的模拟经营养鱼游戏超有趣的模拟经营养鱼超有趣的模拟经营养鱼游戏超有趣的模拟经营养鱼游戏超有趣的模拟经营养鱼",
      collection: 1,
      test: 0,
      tags: ["超受欢迎"],
      imgUrl:
        "https://cdn.indieclub.net/2021-06-22/1624375193-453165-2021527-155046.jpg",
    },
    {
      name: "喵喵水族箱6",
      desc: "超有趣的模拟经营养鱼游戏超有趣的模拟经营养鱼游戏超有趣的模拟经营养鱼超有趣的模拟经营养鱼游戏超有趣的模拟经营养鱼游戏超有趣的模拟经营养鱼",
      collection: 0,
      test: 0,
      tags: ["超受欢迎"],
      imgUrl:
        "https://cdn.indieclub.net/2021-06-22/1624375193-453165-2021527-155046.jpg",
    },
    {
      name: "喵喵水族箱7",
      desc: "超有趣的模拟经营养鱼游戏超有趣的模拟经营养鱼游戏超有趣的模拟经营养鱼超有趣的模拟经营养鱼游戏超有趣的模拟经营养鱼游戏超有趣的模拟经营养鱼",
      collection: 0,
      test: 1,
      tags: ["超受欢迎"],
      imgUrl:
        "https://cdn.indieclub.net/2021-06-22/1624375193-453165-2021527-155046.jpg",
    },
    {
      name: "喵喵水族箱8",
      desc: "超有趣的模拟经营养鱼游戏超有趣的模拟经营养鱼游戏超有趣的模拟经营养鱼超有趣的模拟经营养鱼游戏超有趣的模拟经营养鱼游戏超有趣的模拟经营养鱼",
      collection: 1,
      test: 0,
      tags: ["超受欢迎"],
      imgUrl:
        "https://cdn.indieclub.net/2021-06-22/1624375193-453165-2021527-155046.jpg",
    },
    {
      name: "喵喵水族箱9",
      desc: "超有趣的模拟经营养鱼游戏超有趣的模拟经营养鱼游戏超有趣的模拟经营养鱼超有趣的模拟经营养鱼游戏超有趣的模拟经营养鱼游戏超有趣的模拟经营养鱼",
      collection: 1,
      test: 1,
      tags: ["超受欢迎"],
      imgUrl:
        "https://cdn.indieclub.net/2021-06-22/1624375193-453165-2021527-155046.jpg",
    },
    {
      name: "喵喵水族箱10",
      desc: "超有趣的模拟经营养鱼游戏超有趣的模拟经营养鱼游戏超有趣的模拟经营养鱼超有趣的模拟经营养鱼游戏超有趣的模拟经营养鱼游戏超有趣的模拟经营养鱼",
      collection: 0,
      test: 0,
      tags: ["超受欢迎"],
      imgUrl:
        "https://cdn.indieclub.net/2021-06-22/1624375193-453165-2021527-155046.jpg",
    },
    {
      name: "喵喵水族箱11",
      desc: "超有趣的模拟经营养鱼游戏超有趣的模拟经营养鱼游戏超有趣的模拟经营养鱼超有趣的模拟经营养鱼游戏超有趣的模拟经营养鱼游戏超有趣的模拟经营养鱼",
      collection: 1,
      test: 0,
      tags: ["超受欢迎"],
      imgUrl:
        "https://cdn.indieclub.net/2021-06-22/1624375193-453165-2021527-155046.jpg",
    },
  ],
});

const onChangeNav = (idx) => {
  console.log(idx);
  state.navActive = idx;
};
const onChangeUserNav = (idx) => {
  console.log(idx);
  state.userNavActive = idx;
};
</script>

<style lang="scss" scoped>
.home {
  margin-top: 2.38rem;
  position: relative;
  .nav {
    text-align: center;
    height: 1.88rem;
    margin-bottom: 2rem;
    .nav-item {
      position: relative;
      font-size: 1.5rem;
      line-height: 1.88rem;
      color: $text-light;
      margin-right: 2.25rem;
      cursor: pointer;
      &::after {
        content: "";
        position: absolute;
        left: -0.5rem;
        bottom: 0;
        width: 0;
        height: 0.5rem;
        background: $primary-s;
        z-index: -1;
      }
      &.nav-active {
        font-weight: bold;
        color: $text-bold;
      }
      &.nav-active::after {
        transition: width 0.3s;
        width: 100%;
      }
      &:last-child {
        margin-right: 0;
      }
    }
  }
  .user-auth {
    .user-content {
      .user-nav {
        text-align: center;
        margin-bottom: 2rem;
        span {
          color: $text-light;
          font-size: 1.25rem;
          margin: 0 1.13rem;
          cursor: pointer;
          &.active {
            font-weight: bold;
            color: $primary-dark;
          }
        }
      }
    }
    .user-tips {
      font-weight: bold;
      font-size: 2.06rem;
      text-align: center;
      color: $primary;
      margin-top: 10.5rem;
      .user-text {
        margin-bottom: .5rem;
        p {
          line-height: 2.63rem;
        }
      }
    }
  }
}
@media screen and (max-width: 750px) {
  .home {
    margin-top: 1.13rem;
    .nav {
      margin-bottom: 1.25rem;
      .nav-item {
        font-size: 1.13rem;
        margin-right: 1.5rem;
      }
    }
    .user-auth {
      .user-content {
        .user-nav {
            margin-bottom: 1.25rem;
          span {
            font-size: 1rem;
            margin: 0 1rem;
          }
        }
      }
      .user-tips {
        font-size: 1.13rem;
        text-align: center;
        color: $primary;
        margin-top: 5.25rem;
        .user-text {
          margin-bottom: 1rem;
          p {
            line-height: 2rem;
          }
        }
      }
    }
  }
}
</style>
