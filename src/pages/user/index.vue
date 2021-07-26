<template>
  <div class="user container">
    <div class="common-bars">
      <div class="bars-back" @click="goback">
        <font-awesome-icon icon="chevron-left" />
      </div>
    </div>
    <div class="user-content">
      <div class="user-info">
        <div class="user-msg">
          <div class="user-avatar">
            <img :src="state.userInfo.avatar" />
          </div>
          <div class="user-msg-box">
            <div class="user-name text-bold">
              {{ state.userInfo.name }}
            </div>
            <div class="user-reg-time text-light">
              注册于{{ state.userInfo.time }}
            </div>
            <div class="user-ident primary-dark">
              <font-awesome-icon icon="check-circle" />
              {{ state.userInfo.ident }}
            </div>
            <div class="user-sign text-light">
              {{ state.userInfo.sign }}
            </div>
          </div>
        </div>
        <div class="user-care">
          <span :class="state.userInfo.care == 1 ? 'primary' : 'primary-light'">
            <font-awesome-icon icon="plus" />
            {{ state.userInfo.care == 1 ? "关注" : "取消关注" }}
          </span>
        </div>
      </div>
      <div class="common-nav">
        <span
          @click="onChangeNav(0)"
          :class="state.navActive == 0 ? 'nav-item nav-active' : 'nav-item'"
          >游戏</span
        >
        <span class="nav-item">玩家社群</span>
        <span
          @click="onChangeNav(2)"
          :class="state.navActive == 2 ? 'nav-item nav-active' : 'nav-item'"
          >设置</span
        >
      </div>
      <game-card v-if="state.navActive == 0" :list="state.gameList" />
      <div v-if="state.navActive == 2" class="user-setting">
        <div class="user-setting-ident user-setting-item">
          <div class="user-setting-title text-bold">玩家身份认证</div>
          <div class="user-ident-content">
            <el-button v-if="!state.userInfo.ident" type="primary">身份认证</el-button>
            <span class="text-light" v-else>已认证</span>
          </div>
        </div>
        <div class="user-setting-other user-setting-item">
          <div class="user-setting-title text-bold">其他账户设置</div>
          <el-button @click="openUrl('https://account.indieclub.net/home')" type="primary">设置</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getCurrentInstance, reactive } from "vue";
import GameCard from "@/components/gameCard";
const { proxy } = getCurrentInstance();
const { params } = proxy.$route;
const state = reactive({
  navActive: "0",
  gameList: [
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
  userInfo: {
    name: "fancer",
    time: "2017年5月24日",
    sign: "创乐坊知名话痨，画饼达人-“不可爱的fancer”",
    care: 1,
    ident: "创乐坊站长",
    avatar:
      "https://cdn.indieclub.net/2021-06-22/1624375193-453165-2021527-155046.jpg",
  },
});

const onChangeNav = (idx) => {
  state.navActive = idx;
};

const openUrl = (url) => {
  window.open(url)
}
</script>

<style lang="scss" scoped>
.user {
  margin-top: 2.375rem;
  padding-bottom: 1.5rem;
  .user-content {
    background: #fff;
    box-shadow: 0px 0px 1.875rem rgba(145, 145, 145, 0.32);
    border-radius: 0.375rem;
    padding: 0 3rem;
    padding-bottom: 1rem;
  }
  .user-info {
    padding-top: 2.375rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .user-msg {
      display: flex;
      align-items: center;
      .user-avatar {
        width: 8rem;
        height: 8rem;
        background: rgba(0, 0, 0, 0);
        border: 4px solid #ffffff;
        box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.16);
        border-radius: 50%;
        margin-right: 2.25rem;
        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }
      .user-msg-box {
        .user-name {
          font-size: 1.5rem;
          line-height: 1.875rem;
        }
        .user-reg-time {
          font-size: 0.75rem;
          line-height: 0.938rem;
          margin: 0.375rem 0;
        }
        .user-ident {
          font-size: 0.875rem;
          line-height: 1.125rem;
        }
        .user-sign {
          font-size: 1rem;
          line-height: 1.25rem;
          margin-top: 0.75rem;
        }
      }
    }
    .user-care {
      display: flex;
      font-size: 1rem;
      font-weight: bold;
      line-height: 1.938rem;
      margin-top: 1.25rem;
      span {
        display: flex;
        cursor: pointer;
      }
      .svg-inline--fa {
        font-size: 1.5rem;
        margin-right: 0.75rem;
        margin-top: 0.25rem;
      }
    }
  }
  .user-setting {
    .user-setting-item {
      margin-bottom: 2.25rem;
    }
    .user-setting-title {
      font-size: 1.5rem;
      margin-bottom: 1.5rem;
    }
  }
}
@media screen and (max-width: 750px) {
  .user {
    margin-top: 0.5rem;
    padding-bottom: 1rem;
    .user-content {
      margin: 0 0.5rem;
      padding: 0 1.813rem;
      padding-bottom: 2.125rem;
    }
    .user-info {
      padding-top: 1.5rem;
      flex-wrap: wrap;
      .user-msg {
        flex-wrap: wrap;
        text-align: center;
        .user-avatar {
          width: 5.313rem;
          height: 5.313rem;
          margin: 0 auto;
        }
        .user-msg-box {
          margin-top: 0.875rem;
          .user-name {
            font-size: 1.25rem;
            line-height: 1.563rem;
          }
          .user-reg-time {
            font-size: 0.625rem;
            margin: 0.25rem 0;
            line-height: 0.813rem;
          }
          .user-ident {
            line-height: 0.87rem;
          }
          .user-sign {
            margin: 0 1.938rem;
            margin-top: 0.5rem;
            text-align: left;
          }
        }
      }
      .user-care {
        margin: 0 auto;
        margin-top: 0.75rem;
        justify-content: center;
        font-size: 1rem;
        margin-bottom: 0.188rem;
        line-height: 1.5rem;
        .svg-inline--fa {
          margin-top: 0;
          margin-right: 0.75rem;
        }
      }
    }
    .user-setting {
      .user-setting-item {
        margin-bottom: 1.5rem;
      }
      .user-setting-title {
        font-size: 1.125rem;
        margin-bottom: .75rem;
      }
    }
  }
}
</style>