<template>
  <div class="main">
    <div class="flex top">
      <ul class="tab">
        <li :class="{active:tab == 1}" @click="tab = 1">地图查看</li>
        <li :class="{active:tab == 2}" @click="tab = 2">列表查看</li>
      </ul>
      <div class="flex user">
        <div class="flex">
          <img src="@/assets/icon/me.png" alt="">
          <span>{{info.name}}</span>
        </div>
        <div class="info">
          <span>{{info.position}}</span>
          <b>|</b>
          <span>{{info.company}}</span>
        </div>
      </div>
    </div>
    <div class="flex contain">
      <section>
        <div id="map" v-show="tab == 1"></div>
        <template v-if="tab == 2">
          <el-table :data="tabledata" style="width: 100%">
            <el-table-column prop="status" label="状态" ></el-table-column>
            <el-table-column prop="well_no" label="井号" ></el-table-column>
            <el-table-column prop="area" label="区块" ></el-table-column>
            <el-table-column prop="oilfield" label="公司" ></el-table-column>
            <el-table-column prop="operate_unit" label="施工单位"></el-table-column>
            <el-table-column prop="operate_team" label="井队"></el-table-column>
            <el-table-column prop="design_start_at" label="开钻时间" width="160"></el-table-column>
            <el-table-column prop="design_depth" label="设计井深"></el-table-column>
            <el-table-column prop="current_depth" label="当前井深"></el-table-column>
            <el-table-column prop="footage" label="日进尺"></el-table-column>
            <el-table-column prop="current_layer" label="钻达层次"></el-table-column>
            <el-table-column prop="description" label="施工简况"></el-table-column>
            <el-table-column prop="density" label="密度(g/cm3)" width="100"></el-table-column>
            <el-table-column prop="viscosity" label="粘度"></el-table-column>
            <el-table-column prop="drilling_monitor" label="监督"></el-table-column>
            <el-table-column prop="well_control" label="井控类别"></el-table-column>
          </el-table>
        
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page=current
            :page-sizes="[5, 10, 15, 20]"
            :page-size=size
            layout="total, sizes, prev, pager, next, jumper"
            :total=total>
          </el-pagination>
        </template>
      </section>
      <aside>
        <ul class="bean">
          <li>井号：威202H33-1</li>
          <li>井眼：威202H33-1</li>
          <li>区域：威202H33-1</li>
          <li>所属油田：威202H33-1</li>
          <li>设计单位：威202H33-1</li>
          <li>施工单位：威202H33-1</li>
          <li>构造名称：威202H33-1</li>
          <li>构造位置：威202H33-1</li>
          <li>井型：威202H33-1</li>
          <li>井别：威202H33-1</li>
        </ul>
        <div class="flex icon">
          <router-link :to="item.url" v-for="(item, index) in icon" :key="index">
            <img :src="item.img" alt="">
            <div>{{item.txt}}</div>
          </router-link>
        </div>
      </aside>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import {getList} from '@/api/home'
export default {
  data() {
    return {
      current: 1,
      size: 10,
      tab: 1,
      icon: [
        {
          txt: "井基础信息",
          img: require("@/assets/icon/1.png"),
          url: "/well"
        },
        {
          txt: "井眼轨迹",
          img: require("@/assets/icon/2.png"),
          url: "/trail"
        },
        {
          txt: "生产数据记录",
          img: require("@/assets/icon/3.png"),
          url: "/record"
        },
        {
          txt: "报表管理",
          img: require("@/assets/icon/4.png"),
          url: "/report"
        },
        {
          txt: "技术支持",
          img: require("@/assets/icon/5.png"),
          url: "/technical"
        },
        {
          txt: "随钻跟踪",
          img: require("@/assets/icon/6.png"),
          url: "/"
        },
        {
          txt: "单井统计",
          img: require("@/assets/icon/7.png"),
          url: "/"
        },
        {
          txt: "完井数据",
          img: require("@/assets/icon/8.png"),
          url: "/"
        },
        {
          txt: "复杂及故障",
          img: require("@/assets/icon/9.png"),
          url: "/"
        }
      ],
      list: [],
      total: 1
    };
  },

  components: {},

  computed: {
    ...mapGetters({
      info: 'info'
    }),
    tabledata: function() {
      let start = (this.current - 1) * this.size;
      let end = start + this.size;
      return this.list.slice(start,end);
    }
  },

  mounted: function() {
    getList({page_num: -1,page_size: 2}).then(res => {
      this.list = res.well_data;
      this.total = res.well_data.length;
      this.map(res.well_data)
    })
    
  },

  methods: {
    handleSizeChange(val) {
      this.size = val;
    },
    handleCurrentChange(val) {
      // this.current = val;
    },
    map(data) {
      let map =new BMap.Map('map');//lng: 114.3162001, lat: 30.58108413 116.404, 39.915
      let point = new BMap.Point(114.3162001, 30.58108413)
      map.centerAndZoom(point, 11);
      map.addControl(new BMap.NavigationControl());    
      map.addControl(new BMap.ScaleControl());    
      map.addControl(new BMap.MapTypeControl());    
      map.enableScrollWheelZoom(true);
      var geolocation = new BMap.Geolocation();
      geolocation.getCurrentPosition(function(r){
        if(this.getStatus() == BMAP_STATUS_SUCCESS){
          var mk = new BMap.Marker(r.point);
          map.addOverlay(mk);
          map.panTo(r.point);
          mk.enableDragging();
          mk.setAnimation(BMAP_ANIMATION_BOUNCE);
          data.map(item => {
            let marker = new BMap.Marker({
              lng: item.x_axis,
              lat: item.y_axis
            })
            map.addOverlay(marker);
            // marker.addEventListener("click", function(e){
            //   var now =  marker.getPosition();
            //   var lng = now.lng;
            //   var lat = now.lat;
            //   console.log(now)
            // })
          })
        }else {
          this.$message.error('浏览器地位失败');
        }        
      });
    }
  }
};
</script>

<style lang='scss' scoped>
.main {
  background: #2b4b6b;
  min-width: 1080px;
  width: 90%;
  height: calc(100% - 40px);
  padding: 20px;
  margin: 20px auto;
  box-sizing: border-box;
}
.top {
  height: 50px;
  margin-bottom: 10px;
  align-items: center;
  .tab {
    li {
      width: 80px;
      line-height: 40px;
      text-align: center;
      float: left;
      margin-right: 20px;
      color: #fff;
      font-size: 18px;
      cursor: pointer;
      &.active {
        border-bottom: 3px solid #fff;
      }
    }
  }
  .user {
    color: #fff;
    img {
      width: 22px;
      height: 22px;
      margin-right: 10px;
    }
    .info {
      margin-left: 20px;
    }
  }
}
.contain {
  height: calc(100% - 60px);
  color: white;
  section {
    background: rgba(44, 118, 154, 0.4);
    width: calc(100% - 410px);
  }
  aside {
    background: rgba(44, 118, 154, 0.4);
    width: 400px;
    padding: 20px 50px;
    box-sizing: border-box;
    .bean {
      font-size: 12px;
      li {
        margin-bottom: 10px;
      }
    }
    .icon {
      flex-wrap: wrap;
      a {
        width: 30%;
        margin-top: 30px;
        color: #fff;
        font-size: 12px;
        text-align: center;
        img {
          display: block;
          margin: 0 auto 12px;
        }
      }
    }
  }
}
#map {
  height: 100%;
}
</style>
