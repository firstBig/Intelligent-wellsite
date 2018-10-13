<template>
  <div class="box">
    <!-- 地破及承压试验 -->
    <p class="title">地破及承压试验</p>        
    <el-table border style="width: 95%; text-align: center;" :data="tableData3">
      <el-table-column prop="date" label="开钻次数" align="center">
      </el-table-column>
      <el-table-column prop="name" label="试验日期" align="center">
      </el-table-column>
      <el-table-column prop="address" label="试验编号" align="center">
      </el-table-column>
      <el-table-column prop="date" label="试验井深m" align="center">
      </el-table-column>
      <el-table-column prop="name" label="地层及岩性" align="center">
      </el-table-column>
      <el-table-column prop="address" label="套管鞋井深m" align="center">
      </el-table-column>
      <el-table-column prop="date" label="钻井液密度g/cm3" align="center">
      </el-table-column>
      <el-table-column prop="name" label="泵入时间min" align="center">
      </el-table-column>
      <el-table-column prop="name" label="泵入量L" align="center">
      </el-table-column>
      <el-table-column prop="address" label="漏失压力MPa" align="center">
      </el-table-column>
      <el-table-column prop="date" label="漏失时当量密度" align="center">
      </el-table-column>
      <el-table-column prop="name" label="破裂压力MPa" align="center">
      </el-table-column>
      <el-table-column prop="name" label="破裂时当量密度" align="center">
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
