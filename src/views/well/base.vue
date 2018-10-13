<template>
  <div class="main">
      <table>
          <!-- <tr>
              <th colspan="3">井基础数据</th>
          </tr>   -->
          <tr>
              <td width="10%">1</td>
              <td width="20%">井号</td>
              <td>&nbsp;</td>
          </tr>
          <tr>
              <td>2</td>
              <td>井眼</td>
              <td>&nbsp;</td>
          </tr>
          <tr>
              <td>3</td>
              <td>区域</td>
              <td>&nbsp;</td>
          </tr>
          <tr>
              <td>4</td>
              <td>所属油添</td>
              <td>&nbsp;</td>
          </tr>
          <tr>
              <td>5</td>
              <td>井控类别</td>
              <td>&nbsp;</td>
          </tr>
          <tr>
              <td>6</td>
              <td>构造名称</td>
              <td>&nbsp;</td>
          </tr>
          <tr>
              <td>7</td>
              <td>构造位置</td>
              <td>&nbsp;</td>
          </tr>
          <tr>
              <td>8</td>
              <td>井型</td>
              <td>&nbsp;</td>
          </tr>
          <tr>
              <td>9</td>
              <td>井别</td>
              <td>&nbsp;</td>
          </tr>
          <tr>
              <td>10</td>
              <td>设计单位</td>
              <td>&nbsp;</td>
          </tr>
           <tr>
              <td>11</td>
              <td>施工单位</td>
              <td>&nbsp;</td>
          </tr>
           <tr>
              <td>12</td>
              <td>钻机类型</td>
              <td>&nbsp;</td>
          </tr>
          <tr>
              <td>13</td>
              <td>钻机编号</td>
              <td>&nbsp;</td>
          </tr>
          <tr>
              <td>14</td>
              <td colspan="2">
                  <tr>
                      <td rowspan="4" style="border-bottom:none; width:100px;">井位</td>
                      <td style="width:181px;">井口横坐标</td>
                      <td style="width:1000px;border-right:none;">&nbsp;</td>
                  </tr>
                  <tr>
                      <td>井口纵坐标</td>
                      <td>&nbsp;</td>
                  </tr>
                  <tr>
                      <td>地理位置</td>
                      <td>&nbsp;</td>
                  </tr>
                  <tr>
                      <td style="border-bottom:none;">测线位置</td>
                      <td style="border-bottom:none;">&nbsp;</td>
                  </tr>
              </td>
              <!-- <td>&nbsp;</td> -->
          </tr>
          <tr>
              <td>15</td>
              <td>地面海拔高度</td>
              <td>&nbsp;</td>
          </tr>
          <tr>
              <td>16</td>
              <td>转盘面海拔（补心）高度（m）</td>
              <td>&nbsp;</td>
          </tr>
          <tr>
              <td>17</td>
              <td>磁偏角（°）</td>
              <td>&nbsp;</td>
          </tr>
          <tr>
              <td>18</td>
              <td>钻探目的</td>
              <td>&nbsp;</td>
          </tr>
          <tr>
              <td>19</td>
              <td>完钻层位</td>
              <td>&nbsp;</td>
          </tr>
          <tr>
              <td>20</td>
              <td>完钻方式</td>
              <td>&nbsp;</td>
          </tr>
          <tr>
              <td>21</td>
              <td>完钻原则</td>
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

  methods: {}
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
    height: calc(100% - 80px);
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
.main table th{
    width: 100%;
    height: 58px;
    line-height: 58px;
    text-align:center;
    font-size: 18px;
    color: #fff;
    border-bottom: 1px solid #fff;
    border-right: 1px solid #fff;
}
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




</style>
