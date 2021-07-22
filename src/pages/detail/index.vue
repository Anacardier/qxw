<template>
  <div class="detail container" ref="detailRef">
    <!-- <el-affix target="html" :offset="0"> -->
      <div class="detail-bars">
        <div class="bars-back" @click="goback">
          <font-awesome-icon icon="chevron-left" />
        </div>
      </div>
    <!-- </el-affix> -->
    <div class="detail-box">
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
              :class="
                1 == 1 ? 'collection barJump active' : 'collection barJump'
              "
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
            <span
              @click="onChangeNav(0)"
              :class="
                state.navActive == 0 ? 'info-nav-item active' : 'info-nav-item'
              "
              >游戏详情</span
            >
            <span
              @click="onChangeNav(1)"
              :class="
                state.navActive == 1 ? 'info-nav-item active' : 'info-nav-item'
              "
              >日志</span
            >
            <span class="info-nav-item">玩家社群</span>
          </div>
          <div class="info-content">
            <GameDesc v-if="state.navActive == 0" />
            <Log v-if="state.navActive == 1" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getCurrentInstance, reactive, ref, unref } from "vue";
import GameDesc from "./desc.vue";
import Log from "./log.vue";
const { proxy } = getCurrentInstance();
const { params } = proxy.$route;
const detailRef = ref(null);
const state = reactive({
  navActive: 0,
});
const onChangeNav = (idx) => {
  console.log(idx);
  state.navActive = idx;
};
const goback = () => {
  proxy.$router.go(-1);
}
const detail = unref(detailRef)
document.addEventListener('scroll', () => {
})

console.log(params);
</script>

<style lang="scss" scoped>
.detail {
  margin-top: 2.375rem;
  .detail-box {
    background: #fff;
    box-shadow: 0px 0px 1.875rem rgba(145, 145, 145, 0.32);
    border-radius: 0.375rem;
  }
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
        max-width: 22.5rem;
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
        overflow: auto;
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
        .info-nav-item {
          position: relative;
          font-size: 1.5rem;
          line-height: 1.88rem;
          color: $text-light;
          margin-right: 2.25rem;
          cursor: pointer;
          transition: all 0.3s;
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
      .info-content {
        padding: 2rem 0;
      }
    }
  }
}
@media screen and (max-width: 750px) {
  .detail {
    margin-top: 0.5rem;
    .detail-box {
      margin: 0 0.5rem;
      margin-bottom: 1rem;
    }
    .el-affix {
      .el-affix--fixed {
        width: 100%;
        .detail-bars {
          margin: 0;
          height: 2.75rem;
          border-radius: 0;
          box-shadow: 0px 0.5rem 1rem rgba(10, 10, 10, 0.1);
          backdrop-filter: saturate(180%) blur(1.25rem);
          .svg-inline--fa {
            margin-top: 0.75rem;
          }
        }
      }
    }
    .detail-bars {
      margin: 0 0.5rem;
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
          max-width: 100%;
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
          .game-excerpt {
            max-height: auto;
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
      .game-info {
        margin-top: 1rem;
        .info-nav {
          height: 1.438rem;
          .info-nav-item {
            font-size: 1.125rem;
            height: 1.438rem;
            margin-right: 1.5rem;
            cursor: auto;
          }
        }
      }
    }
  }
}
</style>
