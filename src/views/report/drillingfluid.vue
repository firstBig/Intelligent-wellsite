<template>
  <div class="main">
       <table> 
          <tr>
              <td rowspan="2">交班时间</td>
              <td rowspan="2">钻井液类型</td>
              <td rowspan="2">密度g/cm3</td>
              <td rowspan="2">漏斗粘度s</td>
              <td rowspan="2">含砂量%</td>
              <td rowspan="2">固含%</td>
              <td rowspan="2">pH值</td>
              <td rowspan="2">滤饼厚度mm</td>
              <td class="none">常温</td>
              <td class="xxtit">高温</td>
              <td rowspan="2">塑性粘度mPa.s</td>
              <td rowspan="2">动切力Pa</td>
              <td rowspan="2">流性指数n值</td>
              <td rowspan="2">稠度系数K值Pa.sn</td>
              <td rowspan="2">油/水比</td>
              <td rowspan="2">破乳电压v</td>
              <td rowspan="2">碱度（pom）ml</td>
          </tr>
          <tr>
              <td colspan="2">滤失量mL</td>
          </tr>
          <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
          </tr>
           <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
          </tr>
          <tr>
              <td colspan="6">泥浆泵</td>
              <td colspan="7">固控设备</td>
              <td colspan="4">钻完井液材料用量统计</td>
          </tr>
          <tr>
              <td>泥浆泵号</td>
              <td>泥浆泵型号</td>
              <td>冲程(in/ mm)</td>
              <td>缸套尺寸(in/ mm)</td>
              <td colspan="2">每冲排量(L/S)</td>
              <td>设备名称</td>
              <td>入口密度(g/cm3)</td>
              <td>出口密度(g/cm3)</td>
              <td>排量(L/S)</td>
              <td>使用时间(h)</td>
              <td>筛布张数</td>
              <td>筛布目数</td>
              <td>材料名称  </td>
              <td>当日用量</td>
              <td>当日补充量</td>
              <td>剩余量</td>
          </tr>
          <tr>
              <td>1#</td>
              <td>ZYF-1600</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>1号筛</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>HV-CMC</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>1.9</td>
          </tr>
          <tr>
              <td>2#</td>
              <td>ZYF-1600</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>2号筛</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>烧碱</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>1.8</td>
          </tr>
          <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>3号筛</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>纯碱</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>1</td>
          </tr>
          <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>除砂器</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>HP</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>0.2</td>
          </tr>
          <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>除泥器</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>PL</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>2</td>
          </tr>
          <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>离心机</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
          </tr>
          <tr>
              <td colspan="4">应急材料储备量</td>
              <td>&nbsp;</td>
              <td rowspan="2" colspan="12">钻井液处理记录</td>
          </tr>
          <tr>
              <td>水泥(T)</td>
              <td>重浆(m3)</td>
              <td>堵漏材料(T)</td>
              <td>柴油(m3)</td>
              <td>&nbsp;</td>
          </tr>
          <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
          </tr>
           <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
          </tr>
      </table>
  </div>
</template>

<script>
export default {
  data () {
     return {
        
      }
  },

  components: {},

  computed: {},

  mounted: function() {},

  methods: {
  
  }
}
</script>

<style lang='scss' scoped>
.main{
    background: #27496a;
    opacity: 0.7;
    min-width: 1080px;
    width: 90%;
    height: calc(100% - 40px);
    padding: 30px;
    margin: 20px auto;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border: 1px solid #fff;
    border-radius: 3px;
    overflow:auto;
}
.main table{
    width: 90%;
    max-height: calc(100% - 80px);
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    margin: 0 auto;
    // background:rgba($color: #2a5c7d, $alpha:0.7);
    border-top: 1px solid #fff;
    border-left: 1px solid #fff;
    border-radius: 3px;
    border-collapse: collapse;
    border-spacing: 0;
}
// .main table th{
//     width: 100%;
//     height: 58px;
//     line-height: 58px;
//     text-align:center;
//     font-size: 18px;
//     color: #fff;
//     border-bottom: 1px solid #fff;
//     border-right: 1px solid #fff;
// }
.main table tr{
    width: 100%;
    height: 30px;
    line-height: 30px;
}
.main table tr td{
    text-align:center;
    font-size: 14px;
    color: #fff;
    padding: 0;
    border-right: 1px solid #fff;
    border-bottom: 1px solid #fff;
}
.main table tr td.xxtit{
    width: 7%;
}
.main table tr td.none{
    width: 8%;
}

</style>
<style lang='scss'>

</style>
