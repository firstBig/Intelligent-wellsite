<template>
  <div class="box">
    <!-- 新工艺新技术 -->
    <p class="title">新工艺新技术</p>
    <el-table border style="width: 95%; text-align: center;" :data="tableData3">
      <el-table-column prop="date" label="序号" align="center">
      </el-table-column>
      <el-table-column prop="name" label="施工单位" align="center">
      </el-table-column>
      <el-table-column prop="address" label="井眼尺寸（mm）" align="center">
      </el-table-column>
      <el-table-column prop="date" label="新工艺新技术" align="center">
      </el-table-column>
      <el-table-column prop="name" label="起始井深（m）" align="center">
      </el-table-column>
      <el-table-column prop="address" label="结束井深（m）" align="center">
      </el-table-column>
      <el-table-column prop="date" label="进尺（m）" align="center">
      </el-table-column>
      <el-table-column prop="name" label="地层" align="center">
      </el-table-column>
      <el-table-column prop="name" label="钻头入井时间" align="center">
      </el-table-column>
      <el-table-column prop="address" label="钻头出井时间" align="center">
      </el-table-column>
      <el-table-column label="入井趟数" align="center">
      </el-table-column>
      <el-table-column prop="date" label="钻头数量（只）" align="center">
      </el-table-column>
      <el-table-column prop="name" label="螺杆数量(根)" align="center">
      </el-table-column>
      <el-table-column prop="address" label="纯钻时间（h）" align="center">
      </el-table-column>
      <el-table-column label="入井工作时间（d）" align="center">
      </el-table-column>
      <el-table-column prop="date" label="机械钻速（m/h）" align="center">
      </el-table-column>
      <el-table-column prop="name" label="行程速度（m/d）" align="center">
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
