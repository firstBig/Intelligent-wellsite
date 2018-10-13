<template>
  <div class="box">
    <!-- 扶正器 -->
    <p class="title">扶正器</p>    
    <el-table border style="width: 95%; text-align: center;" :data="tableData3">
      <el-table-column prop="date" label="序号" align="center">
      </el-table-column>
      <el-table-column prop="name" label="稳定器编号" align="center">
      </el-table-column>
      <el-table-column prop="address" label="类型" align="center">
      </el-table-column>
      <el-table-column prop="date" label="标准外径mm" align="center">
      </el-table-column>
      <el-table-column prop="name" label="棱长" align="center">
        <el-table-column prop="address" label="m" align="center">
        </el-table-column>
      </el-table-column>
      <el-table-column prop="name" label="总长" align="center">
        <el-table-column prop="address" label="m" align="center">
        </el-table-column>
      </el-table-column>
      <el-table-column prop="address" label="生产厂家" align="center">
      </el-table-column>
      <el-table-column prop="date" label="入井时间 年/月/日" align="center">
      </el-table-column>
      <el-table-column prop="name" label="出井时间 年/月/日" align="center">
      </el-table-column>
      <el-table-column prop="name" label="井段m" align="center">
        <el-table-column prop="name" label="起" align="center">
        </el-table-column>
        <el-table-column prop="name" label="止" align="center">
        </el-table-column>
      </el-table-column>
      <el-table-column prop="name" label="使用时间(h)" align="center">
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
