<template>
  <a href="javascript:void(0)" class="feed-item">
    <div v-if="recommendFeed.layout === 5" class="feed-content">
      <div class="photos">
        <div class="main">
          <img :src="coverUrl">
        </div>
        <div class="aside">
          <div class="aside-pic">
            <img :src="morePicUrl1">
          </div>
          <div class="aside-pic">
            <img :src="morePicUrl2">
            <div class="more-pic">
              <span class="count">{{recommendFeed.target.photos_count - 3}}+</span>
            </div>
          </div>
        </div>
      </div>
      <h3>{{recommendFeed.title}}</h3>
    </div>
    <div v-else class="feed-content">
      <img class="img" :src="coverUrl" v-if="recommendFeed.target.cover_url">
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
      coverUrl: `data:image/png;base64,${this.recommendFeed.target.cover_url}`,
      morePicUrl1: `data:image/png;base64,${this.recommendFeed.target.more_pic_urls[0]}`,
      morePicUrl2: `data:image/png;base64,${this.recommendFeed.target.more_pic_urls[1]}`,
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
    .photos {
      height: 4.373333rem;
      margin-bottom: .266667rem;
      display: flex;
      justify-content: space-between;
      .main {
        width: 6.8rem;
        margin-right: .106667rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .aside {
        width: 2.133333rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .aside-pic {
          position: relative;
          width: 2.133333rem;
          height: 2.133333rem;
          img {
            width: 100%;
            height: 100%;
          }
          .more-pic {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background-color: rgba(0, 0, 0, 0.4);
            color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
      }
    }
  }
  .footer {
    display: flex;
    justify-content: space-between;
    color: @font-color-footer;
  }
}
</style>
