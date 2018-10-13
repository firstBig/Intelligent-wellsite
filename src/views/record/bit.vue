<template>
  <div class="box">
    <!-- 钻头数据 -->
    <p class="title">钻头</p>
    <el-table border style="width: 95%; text-align: center;" :data="tableData3">
      <el-table-column prop="date" label="序号" align="center">
      </el-table-column>
      <el-table-column prop="name" label="入井编号" align="center">
      </el-table-column>
      <el-table-column prop="address" label="直径mm" align="center">
      </el-table-column>
      <el-table-column prop="date" label="IADC编码" align="center">
      </el-table-column>
      <el-table-column prop="name" label="类型" align="center">
      </el-table-column>
      <el-table-column prop="address" label="型号" align="center">
      </el-table-column>
      <el-table-column prop="date" label="出厂编号" align="center">
      </el-table-column>
      <el-table-column prop="name" label="新度%" align="center">
        <el-table-column prop="date" label="入井" align="center">
        </el-table-column>
        <el-table-column prop="date" label="出井" align="center">
        </el-table-column>
      </el-table-column>
      <el-table-column prop="name" label="喷嘴直径mm" align="center">
        <el-table-column prop="date" label="1号" align="center">
        </el-table-column>
        <el-table-column prop="date" label="2号" align="center">
        </el-table-column>
        <el-table-column prop="date" label="3号" align="center">
        </el-table-column>
      </el-table-column>
      <el-table-column prop="name" label="入井时间 h" align="center">
        <el-table-column prop="date" label="其中" align="center">
          <el-table-column prop="date" label="纯钻进" align="center">
          </el-table-column>
          <el-table-column prop="date" label="起下钻" align="center">
          </el-table-column>
          <el-table-column prop="date" label="扩划眼" align="center">
          </el-table-column>
          <el-table-column prop="date" label="其它" align="center">
          </el-table-column>
        </el-table-column>
        <el-table-column prop="date" label="合计" align="center">
        </el-table-column>
      </el-table-column>
      <el-table-column prop="name" label="钻进井段m" align="center">
        <el-table-column prop="name" label="下入井深" align="center">
        </el-table-column>
        <el-table-column prop="name" label="起出井深" align="center">
        </el-table-column>
      </el-table-column>
      <el-table-column prop="name" label="进尺m" align="center">
      </el-table-column>
      <el-table-column prop="name" label="平均机械钻速m/h" align="center">
      </el-table-column>
      <el-table-column prop="name" label="钻井方式" align="center">
      </el-table-column>
      <el-table-column prop="name" label="地层及主要岩性" align="center">
      </el-table-column>
      <el-table-column prop="name" label="钻进参数" align="center">
        <el-table-column prop="address" label="钻压KN" align="center">
        </el-table-column>
        <el-table-column prop="address" label="转速r/min" align="center">
        </el-table-column>
        <el-table-column prop="address" label="排量L/s" align="center">
        </el-table-column>
        <el-table-column prop="address" label="立管压力" align="center">
        </el-table-column>
      </el-table-column>
      <el-table-column prop="address" label="钻井液" align="center">
        <el-table-column prop="address" label="密度g/cm3" align="center">
        </el-table-column>
        <el-table-column prop="address" label="漏斗粘度s" align="center">
        </el-table-column>
      </el-table-column>
      <el-table-column prop="name" label="起钻原因" align="center">
      </el-table-column>
      <el-table-column prop="name" label="磨损评价" align="center">
      </el-table-column>
    </el-table>
    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
      :page-sizes="[5, 10, 15, 20]" :page-size="10" layout="total, sizes, prev, pager, next, jumper" :total="100">
    </el-pagination>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        tableData3: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }]
      }
    }
  }

</script>

<style lang='scss' scoped>
  .box {
    .title {
      text-align: center;
    }
    width: 100%;
    height: 100%;

    .el-table--border {
      margin: 20px auto;
    }

  }
</style>
