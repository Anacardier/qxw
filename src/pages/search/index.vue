<template>
  <div class="search container">
    <div class="common-nav">
      <span
        v-for="(item, idx) in state.navList"
        :key="idx"
        @click="onChangeNav(idx)"
        :class="state.navActive == idx ? 'nav-item nav-active' : 'nav-item'"
      >
        {{ item }}
      </span>
    </div>
    <game-card v-if="state.navActive == 0" :list="state.gameList" />
    <user-list v-if="state.navActive == 2" :list="state.userList" />
  </div>
</template>

<script setup>
import { getCurrentInstance, reactive, watch } from "vue";
import GameCard from "@/components/gameCard/index.vue";
import UserList from "@/components/userList/index.vue";
const { proxy } = getCurrentInstance();
const state = reactive({
  navList: ["游戏", "讨论", "用户"],
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
  userList: [
    {
      name: 'fancer',
      time: '2017年5月24日',
      sign: '创乐坊知名话痨，画饼达人-“不可爱的fancer”',
      care: 1,
      ident: '创乐坊站长',
      avatar: 'https://cdn.indieclub.net/2021-06-22/1624375193-453165-2021527-155046.jpg',
    },
    {
      name: 'fancer',
      time: '2017年5月24日',
      sign: '创乐坊知名话痨，画饼达人-“不可爱的fancer”',
      care: 0,
      ident: '创乐坊站长',
      avatar: 'https://cdn.indieclub.net/2021-06-22/1624375193-453165-2021527-155046.jpg',
    }
  ]
});
const onChangeNav = (idx) => {
  state.navActive = idx;
};

watch(() => proxy.$route, (val) => {
  state.navActive = val.query.navIdx || 0
})
</script>

<style lang="scss" scoped>
.search {
  position: relative;
}
</style>
