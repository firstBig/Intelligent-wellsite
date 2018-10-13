<template>
  <div class="box">
    <!-- 钻具损坏记录 -->
    <p class="title">钻具损坏记录</p>        
    <el-table border style="width: 95%; text-align: center;" :data="tableData3">
      <el-table-column prop="date" label="编号" align="center">
      </el-table-column>
      <el-table-column prop="name" label="名称" align="center">
      </el-table-column>
      <el-table-column prop="address" label="类型" align="center">
      </el-table-column>
      <el-table-column prop="date" label="尺寸" align="center">
      </el-table-column>
      <el-table-column prop="name" label="钢级" align="center">
      </el-table-column>
      <el-table-column prop="address" label="厂家" align="center">
      </el-table-column>
      <el-table-column prop="date" label="检查时间" align="center">
      </el-table-column>
      <el-table-column prop="name" label="检查方式" align="center">
      </el-table-column>
      <el-table-column prop="name" label="使用时间" align="center">
      </el-table-column>
      <el-table-column prop="address" label="数量" align="center">
      </el-table-column>
      <el-table-column prop="date" label="损坏描述" align="center">
      </el-table-column>
      <el-table-column prop="name" label="备注" align="center">
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