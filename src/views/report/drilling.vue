<template>
  <div class="main">
       <table> 
          <tr>
              <td rowspan="3" width='10%'>基础信息</td>
              <td class="xxtit">井号</td>
              <td class="none">&nbsp;</td>
              <td class="xxtit">施工队</td>
              <td class="none">&nbsp;</td>
              <td class="xxtit">当班进尺 (m)</td>
              <td class="none">&nbsp;</td>
              <td class="xxtit">累计进尺 (m)</td>
              <td class="none">&nbsp;</td>
              <td class="xxtit">机械钻速（m/h）</td>
              <td class="none">&nbsp;</td>
              <td class="xxtit">班报日期</td>
              <td class="none">&nbsp;</td>
          </tr>
          <tr>
              <td>设计井深（m）</td>
              <td>&nbsp;</td>
              <td>设计完钻地层（m）</td>
              <td>&nbsp;</td>
              <td>当前井深（m）</td>
              <td>&nbsp;</td>
              <td>当前地层</td>
              <td>&nbsp;</td>
              <td>开钻时间</td>
              <td>&nbsp;</td>
              <td>开钻天数</td>
              <td>&nbsp;</td>
          </tr>
          <tr>
              <td>井径(mm)</td>
              <td>&nbsp;</td>
              <td>上层套管下深（m）</td>
              <td>&nbsp;</td>
              <td>上次封井器测试时间</td>
              <td>&nbsp;</td>
              <td>FIT/LOT试验当量比重(g/cm3)</td>
              <td>入口</td>
              <td>FIT/LOT 试验井深 (m)</td>
              <td>&nbsp;</td>
              <td>平台经理</td>
              <td>&nbsp;</td>
          </tr>
          <tr>
              <td rowspan="4">工程简况</td>
              <td>起始时间</td>
              <td>结束时间</td>
              <td>时间(合计)</td>
              <td>工况（代码）</td>
              <td>性质</td>
              <td colspan="7">工作内容</td>
          </tr>
          <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td colspan="7">&nbsp;</td>
          </tr>
          <tr>
              <td colspan="4">当日重要事项</td>
              <td>&nbsp;</td>
              <td colspan="7">&nbsp;</td>
          </tr>
          <tr>
              <td colspan="4">存在问题</td>
              <td>&nbsp;</td>
              <td colspan="7">显示时效饼图</td>
          </tr>
          <tr>
              <td rowspan="3">钻具组合</td>
              <td>入井时间</td>
              <td>出井时间</td>
              <td>开次</td>
              <td>累计进尺（m）</td>
              <td colspan="6">钻具结构明细</td>
              <td>起钻原因</td>
              <td>更换钻具</td>
          </tr>
          <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td colspan="6">&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
          </tr>
          <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td colspan="6">&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
          </tr>
          <tr>
              <td rowspan="2">钻头</td>
              <td>钻头序号</td>
              <td>入井编号</td>
              <td>尺寸(mm)</td>
              <td>钻头厂家</td>
              <td>钻头型号</td>
              <td>下入井深（m）</td>
              <td>起出井深（m）</td>
              <td>日进尺（m）</td>
              <td>机械钻速(m/h)</td>
              <td>钻压(kN)</td>
              <td>转速(rpm)</td>
              <td>喷嘴组合(mm)</td>
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
          </tr>
          <tr>
              <td rowspan="2">螺杆</td>
              <td>螺杆序号</td>
              <td>入井编号</td>
              <td>尺寸(mm)</td>
              <td>下入深度(m)</td>
              <td>起出深度(m)</td>
              <td>累计进尺(m)</td>
              <td>纯钻时间(h)</td>
              <td>累计时间(h)</td>
              <td>泵压(MPa)</td>
              <td>排量(L/s)</td>
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
          </tr>
          <tr>
              <td rowspan="2">钻井液</td>
              <td>钻井液密度</td>
              <td>粘度</td>
              <td>含砂量</td>
              <td>泥饼厚度</td>
              <td>PH</td>
              <td>API失水</td>
              <td>HTHP失水</td>
              <td>静切力</td>
              <td>动切力</td>
              <td>n值</td>
              <td>k值</td>
              <td>摩阻系数</td>
          </tr>
          <tr>
              <td>(g/cm3)</td>
              <td>s</td>
              <td>%</td>
              <td>mm</td>
              <td>&nbsp;</td>
              <td>ml</td>
              <td>ml</td>
              <td>Pa</td>
              <td>Pa</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
          </tr>
          <tr>
              <td>井身结构</td>
              <td colspan="12">&nbsp;</td>
          </tr>
          <tr>
              <td>钻井液用量</td>
              <td colspan="12">&nbsp;</td>
          </tr>
          <tr>
              <td>应急材料储备</td>
              <td colspan="12">&nbsp;</td>
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
