<template>
  <div class="box">
    <!-- 钻具组合 -->
    <p class="title">钻具组合</p>    
    <el-table border style="width: 95%; text-align: center;" :data="tableData3">
      <el-table-column prop="date" label="序号" align="center">
      </el-table-column>
      <el-table-column prop="name" label="开钻次序" align="center">
      </el-table-column>
      <el-table-column prop="address" label="施工内容" align="center">
      </el-table-column>
      <el-table-column prop="date" label="起始井段m" align="center">
      </el-table-column>
      <el-table-column prop="name" label="终止井段m" align="center">
      </el-table-column>
      <el-table-column prop="address" label="段长m" align="center">
      </el-table-column>
      <el-table-column prop="date" label="钻具组合" align="center">
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
