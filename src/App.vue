<template>
  <div id="app" ref="app">
    <feed-section :recommendFeeds='recommendFeeds'></feed-section>
  </div>
</template>

<script>
import './assets/css/normallize.css'
import axios from 'axios'
import feedSection from './components/recommend-feeds.vue'

function getDate(date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const dateDay = date.getDate()
  return `${year}-${month}-${dateDay}`
} 

export default {
  components: {
    feedSection
  },
  data () {
    return {
      recommendFeeds: '',
      next_date: ''
    }
  },
  created() {
    const that = this;
    axios.get('http://192.168.1.103:3000/list')
      .then(function (response) {
        // 在这里用this指向的不是vue instance
        that.recommendFeeds = response.data.recommend_feeds
        console.log(that.recommendFeeds.length)
      })
  },
  updated() {
    const that = this
    let appHeight = that.$refs.app.getBoundingClientRect().height
    
    if (!that.next_date) {
      this.next_date = getDate(new Date())
    }
    
    window.onscroll = function () {
      if (this.scrollY + window.innerHeight + 60 >= appHeight) {
        appHeight += 500
        axios.get(`http://192.168.1.103:3000/list?next_date=${that.next_date}`)
          .then(function (response) {
            that.recommendFeeds = that.recommendFeeds.concat(response.data.recommend_feeds)
            console.log(getDate(new Date(new Date(that.next_date).getTime() - 24*60*60*1000)))
            that.next_date = getDate(new Date(new Date(that.next_date).getTime() - 24*60*60*1000))
          })
      }
    }
  }
}
</script>

<style lang="less">
@base-font-size: 12px;
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  font-size: 10vw;
  body {
    font-size: @base-font-size;
  }
}
</style>

