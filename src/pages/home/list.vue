<template>
  <div class="list">
    <div
      v-for="(item, idx) in list"
      @click="linkTo(idx)"
      :key="idx"
      class="item-card"
    >
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
          <div
            :class="item.test == 1 ? 'game-test active' : 'game-test'"
          >
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
</template>

<script setup>
import { defineProps, getCurrentInstance } from "vue";

const { proxy } = getCurrentInstance();

defineProps({
  list: Array,
});

const linkTo = (id) => {
  proxy.$router.push({
    path: "/home?" + id,
  });
};
</script>

<style lang="scss" scoped>
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
    cursor: pointer;
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
@media screen and (max-width: 750px) {
  .list {
    .item-card {
      flex-wrap: wrap;
      width: 18.81rem;
      height: auto;
      margin-bottom: 1.13rem;
      img {
        flex: 0 0 100%;
        height: 9.75rem;
      }
      .content {
        flex: 0 0 100%;
        padding: 0.75rem 1.88rem;
        margin-bottom: 0;
        .game-title {
          height: 1.56rem;
          font-size: 1.25rem;
          line-height: 1.56rem;
        }
        .game-desc {
          font-size: 1rem;
          line-height: 1.25rem;
          margin: 0.5rem 0;
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
    }
  }
}
</style>
