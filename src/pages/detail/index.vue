<template>
  <div class="detail container">
    <div class="detail-bars">
      <div class="bars-back">
        <font-awesome-icon icon="chevron-left" />
      </div>
    </div>
    <div class="game-bg">
      <img
        src="https://cdn.indieclub.net/2021-06-22/1624375193-453165-2021527-155046.jpg"
      />
    </div>
    <div class="content">
      <div class="game-box">
        <div class="game-imgs">
          <img
            src="https://cdn.indieclub.net/2021-06-22/1624375193-453165-2021527-155046.jpg"
          />
          <div class="game-tags">
            <span class="tag-item">超受欢迎</span>
          </div>
        </div>
        <div class="game-content">
          <div class="game-name">喵喵水族箱</div>
          <div class="game-author">
            <span class="game-author-label"> 开发者： </span>
            <span class="game-author-name">王芒果</span>
          </div>
          <div class="game-excerpt">
            超有趣的模拟经营养鱼游戏超有趣的模拟经营养鱼游戏超有趣的模拟经营养鱼超
            有趣的模拟经营养鱼游戏超有趣的模拟经营养鱼游戏超有趣的模拟经营养鱼超有
            趣的模拟经营养鱼游戏超有趣的模拟经营养鱼游戏超有趣的模拟经营养鱼超有趣
            的模拟经营养鱼游戏超有趣的模。
          </div>
        </div>
        <div class="game-bars">
          <div
            :class="1 == 1 ? 'collection barJump active' : 'collection barJump'"
          >
            <font-awesome-icon :icon="[1 == 1 ? 'fas' : 'far', 'heart']" />
            {{ 1 == 1 ? "已收藏" : "收藏" }}
          </div>
          <div
            :class="1 == 1 ? 'game-test barJump active' : 'game-test barJump'"
          >
            <font-awesome-icon icon="play" />
            {{ 1 == 1 ? "已参与测试" : "参与测试" }}
          </div>
        </div>
      </div>
      <div class="game-info">
        <div class="info-nav">
          <span @click="onChangeNav(0)" :class="state.navActive == 0 ? 'info-nav-item active' : 'info-nav-item'">游戏详情</span>
          <span @click="onChangeNav(1)" :class="state.navActive == 1 ? 'info-nav-item active' : 'info-nav-item'">日志</span>
          <span class="info-nav-item">玩家社群</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getCurrentInstance, reactive } from "vue";
const { proxy } = getCurrentInstance();
const { params } = proxy.$route;
const state = reactive({
  navActive: 0,
});

const onChangeNav = (idx) => {
  console.log(idx);
  state.navActive = idx;
};
console.log(params);
</script>

<style lang="scss" scoped>
.detail {
  margin-top: 2.375rem;
  .detail-bars {
    display: flex;
    justify-content: space-between;
    height: 3rem;
    line-height: 3rem;
    background: $primary-xs;
    border-radius: 0.375rem 0.375rem 0 0;
    padding: 0 1rem;
    .bars-back {
      width: 1.875rem;
      font-size: 1rem;
      color: $primary;
      cursor: pointer;
    }
  }
  .game-bg {
    height: 12.25rem;
    box-shadow: 0px 8px 16px rgba(145, 145, 145, 0.32);
    img {
      width: 100%;
      height: 100%;
    }
  }
  .content {
    padding: 0 2.25rem;
    .game-box {
      display: flex;
      height: 11.625rem;
      margin-top: 1.5rem;
      .game-imgs {
        position: relative;
        flex: 0 0 22.5rem;
        box-shadow: 0 0 1.875rem rgba(145, 145, 145, 0.32);
        img {
          width: 100%;
          height: 100%;
          border-radius: 0.375rem;
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
      .game-content {
        max-width: 45rem;
        margin: 0 2.25rem;
        .game-name {
          font-size: 2rem;
          font-weight: bold;
          color: $text-bold;
        }
        .game-author {
          margin: 0.5rem 0;
          color: $text-bold;
          font-size: 1.125rem;
          .game-author-name {
            font-weight: bold;
          }
        }
        .game-excerpt {
          font-size: 1.125rem;
          color: $text-light;
          line-height: 1.438rem;
          max-height: 11.625rem;
          overflow: auto;
        }
      }
      .game-bars {
        text-align: center;
        margin-top: 3.75rem;
        min-width: 6.25rem;
        & > div {
          height: 1.25rem;
          line-height: 1.25rem;
          font-size: 1rem;
          font-weight: bold;
          cursor: pointer;
          transition: color 0.3s;
          margin-bottom: 18px;
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
    .game-info {
      margin-top: 2.25rem;
      .info-nav {
        text-align: center;
        height: 1.88rem;
        margin-bottom: 2rem;
        .info-nav-item {
          position: relative;
          font-size: 1.5rem;
          line-height: 1.88rem;
          color: $text-light;
          margin-right: 2.25rem;
          cursor: pointer;
          transition: all .3s;
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
          &:hover,
          &.active {
            font-weight: bold;
            color: $text-bold;
          }
          &.active::after {
            transition: width 0.3s;
            width: 100%;
          }
          &:last-child {
            margin-right: 0;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 750px) {
  .detail {
    margin-top: 0.5rem;
    padding: 0 0.5rem;
    min-width: 23.438rem;
    .detail-bars {
      height: 2.25rem;
      line-height: 2.25rem;
      padding: 0 1.75rem;
      .bars-back {
        width: 1.25rem;
        font-size: 1.313rem;
        cursor: auto;
      }
    }
    .content {
      padding: 0 2.125rem;
      .game-bg {
        height: 8rem;
      }
      .game-box {
        flex-wrap: wrap;
        height: auto;
        .game-imgs {
          flex: 0 0 100%;
          height: 9.438rem;
        }
        .game-content {
          flex: 0 0 100%;
          margin: 0;
          margin-top: 1.75rem;
          .game-name {
            text-align: center;
          }
          .game-author {
            text-align: center;
          }
        }
        .game-bars {
          display: flex;
          width: 100%;
          margin-top: 1rem;
          justify-content: space-evenly;
          & > div {
            margin: 0;
          }
        }
      }
    }
  }
}
</style>
