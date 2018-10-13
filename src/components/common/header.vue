<template>
  <header>
     <div class="head flex">
        <div class="flex">
          <div class="logo"><img src="@/assets/logo.png" alt=""></div>
          <div class="nav">
            <router-link to="/">
              首页
            </router-link>
            <router-link to="/#">
             专家库
            </router-link>
            <router-link to="/#">
              多井统计
            </router-link>
            <router-link to="/#">
              知识库查询
            </router-link>
            <router-link to="/#">
              收藏
            </router-link>
            <router-link to="/#">
              下载
            </router-link>
          </div>
        </div>
        <div class="flex date">
           <div class="time">{{time}}</div>
           <div class="flex">
              <img src="@/assets/icon/address.png" alt="" class="address">
              <span>湖北 武汉</span>
              <b>|</b>
              <span v-if="info.code">{{info.temperature}}度 {{info.text}}</span>
              <img src="@/assets/icon/duoyun.png" alt="" class="weather">
           </div>
         </div>
     </div>
     
  </header>
</template>

<script>
import { weather } from '@/api/login'
export default {
  data () {
    return {
      date: new Date(),
      info: {}
    }
  },

  components: {},

  computed: {
    time: function() {
      let date = this.date
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let day = date.getDate();
      let hour = date.getHours();
      let minute = date.getMinutes();
      let second = date.getSeconds();
      return year + '年' + month + '月' + day + '日 ' + hour + ':' + minute + ':' + second;
    }
  },

  mounted: function() {
    this.timer = setInterval(() => {
      this.date = new Date();
    }, 1000);
    weather('39.93:116.40').then(res => {
      this.info = res;
    })

  },

  beforeDestroy () {
     if(this.timer) {
      clearInterval(this.timer);
     }
  },    

  methods: {}
}
</script>

<style lang='scss' scoped>
.flex {
  align-items: center;
}
header{
  width: 100%;
  height: 80px;
  background: #152c4c; 
  .head {
    width:90%;
    height: 80px;
    margin: auto;
    .logo {
      padding-top: 12px;
      img {
        display: block;
        width: 200px;
        height: 30px;
      }
    }
    .nav {
      height:55px;
      margin-left: 2rem;
        a{
          display: inline-block;
          height: 52px;
          line-height: 52px;
          padding: 0 16px;
          font-size: 20px;
          color: #fff;
          &.router-link-active{
            font-weight: bold;
            border-bottom: 3px solid #fff;
          }
        }
    }
    .date {
      color: #fff;
      .time {
        margin-right: 20px;
      }
      .address {
        margin-right: 10px;
      }
      b {
        margin: 0 10px;
      }
      .weather {
        width: 22px;
        height: 22px;
        margin-left: 10px;
      }
    }
  }
}



</style>
