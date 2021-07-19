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
    <div class="list">
      <div v-for="(item, idx) in state.gameList" :key="idx" class="item-card">
        <img :src="item.imgUrl" />
        <div class="content">
          <div class="game-title">
            {{ item.name }}
          </div>
          <div class="game-desc ellipsis_3">
            {{ item.desc }}
          </div>
          <div class="game-footer">
            <div
              :class="item.collection == 1 ? 'collection active' : 'collection'"
            >
              <font-awesome-icon
                :icon="[item.collection == 1 ? 'fas' : 'far', 'heart']"
              />
              {{ item.collection == 1 ? "已收藏" : "收藏" }}
            </div>
            <div :class="item.test == 1 ? 'game-test active' : 'game-test'">
              <font-awesome-icon icon="play" />
              {{ item.test == 1 ? "已参与测试" : "参与测试" }}
            </div>
          </div>
        </div>
        <div v-for="(v, k) in item.tags" :key="k" class="game-tags">
          <span class="tag-item">{{ v }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
const state = reactive({
  navList: ["发现", "热门", "最新", "即将上线", "我的"],
  navActive: "0",
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
</script>

<style lang="scss" scoped>
.home {
  margin-top: 2.38rem;
  .nav {
    text-align: center;
    margin-bottom: 2.38rem;
    .nav-item {
      position: relative;
      height: 1.88rem;
      font-size: 1.5rem;
      font-weight: bold;
      line-height: 1.88rem;
      color: $text-bold;
      margin-right: 2.25rem;
      cursor: pointer;
      &.nav-active::after {
        content: "";
        position: absolute;
        left: -0.5rem;
        bottom: 0;
        width: 100%;
        height: 0.5rem;
        background: $primary-s;
        z-index: -1;
      }
      &:last-child {
        margin-right: 0;
      }
    }
  }
  .list {
    .item-card {
      display: flex;
      margin: 0 auto;
      width: 40rem;
      height: 11.63rem;
      background: #ffffff;
      box-shadow: 0 0 1.88rem rgba(145, 145, 145, 0.32);
      border-radius: 0.38rem;
      margin-bottom: 1.5rem;
      position: relative;
      img {
        flex: 0 0 22.5rem;
        height: 11.63rem;
        border-radius: 0.38rem;
      }
      .content {
        flex: 0 0 17.5rem;
        padding: 1rem 2rem;
        .game-title {
          height: 1.88rem;
          font-size: 1.5rem;
          font-weight: bold;
          line-height: 1.88rem;
          color: $text-bold;
          text-align: center;
        }
        .game-desc {
          font-size: 1.13rem;
          font-weight: 400;
          line-height: 1.44rem;
          color: $text-light;
          margin-top: 0.63rem;
          margin-bottom: 1.25rem;
        }
        .game-footer {
          display: flex;
          justify-content: space-between;
          & > div {
            height: 1.25rem;
            line-height: 1.25rem;
            font-size: 1rem;
            font-weight: bold;
            cursor: pointer;
            transition: color 0.3s;
          }
          .collection {
            color: $red;
            &:hover,
            &.active {
              color: $red-light;
            }
          }
          .game-test {
            color: $primary-dark;
            &:hover,
            &.active {
              color: $primary;
            }
          }
        }
      }
      .game-tags {
        position: absolute;
        top: 0.38rem;
        left: 0.38rem;
        .tag-item {
          display: block;
          width: 4.5rem;
          height: 2.38rem;
          line-height: 2.38rem;
          color: $text-light;
          font-weight: bold;
          font-size: 0.81rem;
          text-align: center;
          background: #ffffff;
          box-shadow: 0 0 1.88rem rgba(145, 145, 145, 0.32);
          border-radius: 0.38rem;
        }
      }
    }
  }
}
</style>
