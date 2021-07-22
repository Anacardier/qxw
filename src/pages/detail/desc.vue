<template>
  <div class="game-desc">
    <div class="game-desc-title">游戏设定</div>
    <div class="game-desc-p">
      超有趣的模拟经营养鱼游戏超有趣的模拟经营养鱼游戏超有趣的模拟经营养鱼超有趣的模拟经营养鱼游戏超有趣的
      模拟经营养鱼游戏超有趣的模拟经营养鱼超有趣的模拟经营养鱼游戏超有趣的模拟经营养鱼游戏超有趣的模拟经营
      养鱼超有趣的模拟经营养鱼游戏超有趣的模。
    </div>
    <div class="game-desc-img">
      <img
        src="https://cdn.indieclub.net/2021-06-22/1624375193-453165-2021527-155046.jpg"
      />
    </div>
  </div>
</template>

<script setup>
import { getCurrentInstance, reactive } from "vue";
const { proxy } = getCurrentInstance();
const state = reactive({
  navActive: 0,
});
</script>

<style lang="scss" scoped>
.game-desc {
  .game-desc-title {
    height: 1.875rem;
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 1.875rem;
    color: $text-bold;
    margin-bottom: 1.5rem;
  }
  .game-desc-p {
    color: $text-bold;
    font-size: 1.25rem;
    line-height: 1.875rem;
    margin-bottom: 1.5rem;
  }
  .game-desc-img {
    max-width: 60rem;
    margin: 0 auto;
    img {
      width: 100%;
      vertical-align: middle;
      box-shadow: 0px 0px 1.875rem rgba(0, 0, 0, 0.16);
      border-radius: 0.5rem;
    }
  }
}
@media screen and (max-width: 750px) {
  .game-desc {
    .game-desc-title {
      height: 1.438rem;
      font-size: 1.125rem;
      margin-bottom: 0.75rem;
    }
    .game-desc-p {
      font-size: 1rem;
      line-height: 1.438rem;
      margin-bottom: .75rem;
    }
  }
}
</style>
