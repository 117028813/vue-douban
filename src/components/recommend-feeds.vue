<template>
  <div class="feed-section">
    <feed-item v-for="recommendFeed in recommendFeeds" :key="recommendFeed.id" :recommendFeed="recommendFeed"></feed-item>
  </div>
</template>

<script>
import feedItem from './feed-item.vue'
export default {
  props: ['recommendFeeds'],
  components: {
    feedItem
  },
  data() {
    return {
      scrollTopVal: ''
    }
  },
  methods: {
  },
  mounted() {
    
  }
}
</script>
