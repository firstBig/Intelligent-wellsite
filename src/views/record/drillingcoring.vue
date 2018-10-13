<template>
  <div class="box">
    <!-- 钻井取心 -->
    <p class="title">钻井取心</p>        
    <el-table border style="width: 95%; text-align: center;" :data="tableData3">
      <el-table-column prop="date" label="序号" align="center">
      </el-table-column>
      <el-table-column prop="name" label="日期" align="center">
      </el-table-column>
      <el-table-column prop="address" label="取心钻头" align="center">
        <el-table-column prop="date" label="型号" align="center">
        </el-table-column>
        <el-table-column prop="name" label="直径" align="center">
        </el-table-column>
      </el-table-column>
      <el-table-column prop="date" label="取心工具型号" align="center">
      </el-table-column>
      <el-table-column prop="name" label="取心类型" align="center">
      </el-table-column>
      <el-table-column prop="address" label="起始井深" align="center">
      </el-table-column>
      <el-table-column prop="date" label="终止井深" align="center">
      </el-table-column>
      <el-table-column prop="name" label="取心进尺m" align="center">
      </el-table-column>
      <el-table-column prop="name" label="纯钻进时间h" align="center">
      </el-table-column>
      <el-table-column prop="name" label="机械钻速m/h" align="center">
      </el-table-column>
      <el-table-column prop="name" label="岩心" align="center">
        <el-table-column prop="name" label="第几筒" align="center">
        </el-table-column>
        <el-table-column prop="name" label="层位" align="center">
        </el-table-column>
        <el-table-column prop="name" label="收获率%" align="center">
        </el-table-column>
      </el-table-column>
      <el-table-column prop="name" label="取心方法" align="center">
      </el-table-column>
      <el-table-column prop="name" label="服务单位" align="center">
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
