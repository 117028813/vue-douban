const express = require('express')
const superagent = require('superagent')
// const async = require('async')
const app = express()
// app.use(express.static('./'))

app.get('/list', function (req, res) {
  // let recommend_feeds
  console.log(req.query.next_date)
  let next_date = req.query.next_date || ''
  res.set({
    'Access-Control-Allow-Origin': '*'
  })
  superagent.get(`https://m.douban.com/rexxar/api/v2/recommend_feed?alt=json&next_date=${next_date}&loc_id=108288&gender=&birthday=&udid=9fcefbf2acf1dfc991054ac40ca5114be7cd092f&for_mobile=1`)
    .end(function (err, response) {
      if (err) {
        console.log('获取数据出错')
      }
      
      res.send(response.body)

      // recommend_feeds = response.body.recommend_feeds
      // let cover_urls = []
      // for (let i = 0; i < recommend_feeds.length; i++) {
      //   cover_urls[i] = recommend_feeds[i].target.cover_url
      // }
      // console.log(cover_urls)
      // async.mapLimit(recommend_feeds, 3, function (item) {
      //   superagent.get(item.target.cover_url).end(function (err, response2) {
      //     // console.log(response2.body.toString('base64'))
      //     item.target.cover_url = response2.body.toString('base64')
      //   })
      // }, function (err, results) {
      //   res.send(response.body)
      // })
      
    })
  
  
})

app.listen(3000, function () {
  console.log('http://192.168.1.103:3000/')
})
