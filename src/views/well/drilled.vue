<template>
  <div class="main">
       <table> 
          <tr>
              <td width="10%">1</td>
              <td width="30%">开始搬迁日期</td>
              <td width="30%">&nbsp;</td>
              <td width="30%">&nbsp;</td>
          </tr>
          <tr>
              <td>&nbsp;</td>
              <td>开始安装日期</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
          </tr>
          <tr>
              <td>&nbsp;</td>
              <td>导眼开钻时间</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
          </tr>
          <tr>
              <td>2</td>
              <td>侧钻井开工日期</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
          </tr>
          <tr>
              <td rowspan="2">3</td>
              <td>第一次开钻日期</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
          </tr>
          <tr>
              <td>第一次完钻日期</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
          </tr>
          <tr>
              <td rowspan="2">4</td>
              <td>第二次开钻日期</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
          </tr>
          <tr>
              <td>第二次完钻日期</td>
              <td>开钻次数自动向下扩展</td>
              <td>&nbsp;</td>
          </tr>
          <tr>
              <td>11</td>
              <td>完钻日期</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
          </tr>
          <tr>
              <td>12</td>
              <td>完井日期</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
          </tr>
          <tr>
              <td>13</td>
              <td>搬安与准备时间</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
          </tr>
          <tr>
              <td>14</td>
              <td>钻井时间</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
          </tr>
          <tr>
              <td>15</td>
              <td>完井时间</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
          </tr>
          <tr>
              <td>16</td>
              <td>建井时间</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
          </tr>
          <tr>
              <td>17</td>
              <td>中途测试时间</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
          </tr>
          <tr>
              <td rowspan="2">18</td>
              <td>完钻井深(m)</td>
              <td colspan="2">&nbsp;</td>
          </tr>
          <tr>
              <td>完钻垂深(m)</td>
              <td colspan="2">&nbsp;</td>
          </tr>
          <tr>
              <td rowspan="2">20</td>
              <td>油气层顶部井深(m)</td>
              <td colspan="2">&nbsp;</td>
          </tr>
          <tr>
              <td>油气层底部井深(m)</td>
              <td colspan="2">&nbsp;</td>
          </tr>
          <tr>
              <td>21</td>
              <td>完井方法</td>
              <td colspan="2">&nbsp;</td>
          </tr>
          <tr>
              <td>22</td>
              <td>钻井台月(月)</td>
              <td colspan="2">&nbsp;</td>
          </tr>
          <tr>
              <td>23</td>
              <td>钻井月速(m/月)</td>
              <td colspan="2">&nbsp;</td>
          </tr>
          <tr>
              <td>24</td>
              <td>平均机械钻速(m/h)</td>
              <td colspan="2">&nbsp;</td>
          </tr>
          <tr>
              <td>25</td>
              <td>井身质量</td>
              <td colspan="2">&nbsp;</td>
          </tr>
          <tr>
              <td>26</td>
              <td>固井质量</td>
              <td colspan="2">&nbsp;</td>
          </tr>
          <tr>
              <td rowspan="2">27</td>
              <td>钻井取心进尺(m)</td>
              <td colspan="2">&nbsp;</td>
          </tr>
          <tr>
              <td>平均收获率(%)</td>
              <td colspan="2">&nbsp;</td>
          </tr>
          <tr>
              <td rowspan="3">28</td>
              <td>工程报废进尺(m)</td>
              <td colspan="2">&nbsp;</td>
          </tr>
          <tr>
              <td>返工进尺(m)</td>
              <td colspan="2">&nbsp;</td>
          </tr>
          <tr>
              <td>进尺损失率(%)</td>
              <td colspan="2">&nbsp;</td>
          </tr>
          <tr>
              <td>29</td>
              <td>完井总进尺(m)</td>
              <td colspan="2">&nbsp;</td>
          </tr>
          <tr>
              <td>30</td>
              <td>钻井事故故障次数(次)</td>
              <td colspan="2">&nbsp;</td>
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

</style>
<style lang='scss'>

</style>
