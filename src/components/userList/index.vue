<template>
  <div class="user-list">
    <div v-for="(item, idx) in list" :key="idx" class="user-item">
      <div class="user-avatar">
        <img :src="item.avatar" />
      </div>
      <div class="user-info">
        <div class="user-name text-bold">
          {{ item.name }}
        </div>
        <div class="user-reg-time text-light">注册于{{ item.time }}</div>
        <div class="user-ident primary-dark">
          <font-awesome-icon icon="check-circle" />
          {{ item.ident }}
        </div>
        <div class="user-sign text-light">
          {{ item.sign }}
        </div>
        <div class="user-care">
          <span :class="item.care == 1 ? 'primary' : 'primary-light'">
            <font-awesome-icon icon="plus" />
            {{ item.care == 1 ? "关注" : "取消关注" }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, getCurrentInstance } from "vue";

const { proxy } = getCurrentInstance();

defineProps({
  list: Array,
});

const linkTo = (id) => {
  proxy.$router.push({
    path: "/detail/" + id,
  });
};
</script>

<style lang="scss" scoped>
.user-list {
  .user-item {
    display: flex;
    margin: 0 auto;
    width: 40rem;
    height: 11.625rem;
    padding: 1rem 2.25rem;
    background: #ffffff;
    box-shadow: 0 0 1.875rem rgba(145, 145, 145, 0.32);
    border-radius: 0.375rem;
    margin-bottom: 2.375rem;
    .user-avatar {
      width: 8rem;
      height: 8rem;
      background: rgba(0, 0, 0, 0);
      border: 4px solid #ffffff;
      box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.16);
      border-radius: 50%;
      margin-top: 0.813rem;
      margin-right: 2.25rem;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
    .user-info {
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
  }
}
@media screen and (max-width: 750px) {
  .user-list {
    .user-item {
      width: 18.813rem;
      flex-wrap: wrap;
      height: auto;
      text-align: center;
      padding: .5rem 1.938rem;
      .user-avatar {
        width: 5.313rem;
        height: 5.313rem;
        margin: 0 auto;
      }
      .user-info {
        margin-top: 0.875rem;
        .user-name {
          font-size: 1.25rem;
          line-height: 1.563rem;
        }
        .user-reg-time {
          font-size: .625rem;
          margin: 0.25rem 0;
          line-height: .813rem;
        }
        .user-ident {
          line-height: .87rem;
        }
        .user-sign {
          margin-top: 0.5rem;
          text-align: left;
        }
        .user-care {
          margin-top: .75rem;
          justify-content: center;
          font-size: 1rem;
          margin-bottom: .188rem;
          line-height: 1.5rem;
          .svg-inline--fa {
            margin-top: 0;
            margin-right: .75rem;
          }
        }
      }
    }
  }
}
</style>
