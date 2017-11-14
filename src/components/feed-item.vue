<template>
  <a href="javascript:void(0)" class="feed-item">
    <div class="feed-content">
      <div class="img" :style="imgStyle" v-if="recommendFeed.target.cover_url"></div>
      <!-- <img class="img" :src="recommendFeed.target.cover_url" v-if="recommendFeed.target.cover_url"> -->
      <h3>{{recommendFeed.title}}</h3>
      <p>{{recommendFeed.target.desc}}</p>
    </div>
    <div class="footer">
      <div class="author">
        by <span class="name">{{recommendFeed.target.author.name}}</span>
      </div>
      <span class="feed-label">{{recommendFeed.source_cn}}</span>
    </div>
  </a>
</template>

<script>
export default {
  props: ['recommendFeed'],
  data() {
    return {
      imgStyle: {
        background: `url(data:image/png;base64,${this.recommendFeed.target.cover_url}) center center / cover no-repeat`
      }
    }
  },
  created() {
  }
}
</script>

<style lang="less" scoped>
@font-color-base: #494949;
@font-color-title: @font-color-base;
@font-color-body: #aaa;
@font-color-footer: #ccc;

.feed-item {
  & ~ & {
    border-top: 1px solid #e3e3e3;
  }
  display: block;
  padding: .666667rem .48rem;
  color: @font-color-base;
  text-decoration: none;
  .feed-content {
    margin-bottom: .266667rem;
    overflow: hidden;
    h3 {
      margin-bottom: .16rem;
      font-size: 17px;
      font-weight: normal;
    }
    p {
      line-height: 1.5;
      color: @font-color-body;
    }
    .img {
      float: right;
      width: 2.293333rem;
      height: 2.293333rem;
      margin-left: .666667rem;
    }
  }
  .footer {
    display: flex;
    justify-content: space-between;
    color: @font-color-footer;
  }
}
</style>
