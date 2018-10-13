<template>
  <div class="box">
    <!-- 钻井液记录 -->
    <p class="title">钻井液记录</p>        
    <el-table border style="width: 95%; text-align: center;" :data="tableData3">
      <el-table-column prop="date" label="取样时间" align="center">
      </el-table-column>
      <el-table-column prop="name" label="取样井深m" align="center">
      </el-table-column>
      <el-table-column prop="address" label="常规钻井液性能" align="center">
        <el-table-column prop="date" label="密度g/cm3" align="center">
        </el-table-column>
        <el-table-column prop="date" label="漏斗粘度s" align="center">
        </el-table-column>
        <el-table-column prop="date" label="含砂量%" align="center">
        </el-table-column>
        <el-table-column prop="date" label="pH值" align="center">
        </el-table-column>
        <el-table-column prop="date" label="静切力" align="center">
          <el-table-column prop="date" label="10sPa" align="center">
          </el-table-column>
          <el-table-column prop="date" label="10minPa" align="center">
          </el-table-column>
        </el-table-column>
        <el-table-column prop="date" label="滤失量mL" align="center">
        </el-table-column>
        <el-table-column prop="date" label="滤饼厚度mm" align="center">
        </el-table-column>
        <el-table-column prop="date" label="摩擦系数" align="center">
        </el-table-column>
      </el-table-column>
      <el-table-column prop="date" label="高温高压滤失" align="center">
        <el-table-column prop="name" label="滤失量mL" align="center">
        </el-table-column>
        <el-table-column prop="name" label="滤饼厚度mm" align="center">
        </el-table-column>
      </el-table-column>
      <el-table-column prop="date" label="旋转粘度计读数转/分" align="center">
        <el-table-column prop="name" label="θ3" align="center">
        </el-table-column>
        <el-table-column prop="name" label="θ300" align="center">
        </el-table-column>
        <el-table-column prop="name" label="θ600" align="center">
        </el-table-column>
      </el-table-column>
      <el-table-column prop="name" label="流变参数" align="center">
        <el-table-column prop="address" label="塑性粘度mPa.s" align="center">
        </el-table-column>
        <el-table-column prop="address" label="动切力Pa" align="center">
        </el-table-column>
        <el-table-column prop="address" label="动塑比Pa/mPa.s" align="center">
        </el-table-column>
        <el-table-column prop="address" label="流性指数n值" align="center">
        </el-table-column>
        <el-table-column prop="address" label="稠度系数K值Pa.sn" align="center">
        </el-table-column>
      </el-table-column>
      <el-table-column prop="address" label="固相分析" align="center">
        <el-table-column prop="date" label="含油量%" align="center">
        </el-table-column>
        <el-table-column prop="date" label="含水量%" align="center">
        </el-table-column>
        <el-table-column prop="date" label="钻屑含量%" align="center">
        </el-table-column>
        <el-table-column prop="date" label="MBT含量g/L" align="center">
        </el-table-column>
        <el-table-column prop="date" label="固相含量%" align="center">
        </el-table-column>
      </el-table-column>
      <el-table-column prop="date" label="滤液分析" align="center">
        <el-table-column prop="name" label="Cl-离子mg/L" align="center">
        </el-table-column>
        <el-table-column prop="name" label="Ca2+离子mg/L" align="center">
        </el-table-column>
        <el-table-column prop="name" label="K+离子mg/L" align="center">
        </el-table-column>
        <el-table-column prop="name" label="Pm含量mL" align="center">
        </el-table-column>
        <el-table-column prop="name" label="Pf/Mf含量mL" align="center">
        </el-table-column>
        <el-table-column prop="name" label="总矿化度mg/L" align="center">
        </el-table-column>
      </el-table-column>
      <el-table-column prop="name" label="油/水比" align="center">
      </el-table-column>
      <el-table-column prop="name" label="破乳电压v" align="center">
      </el-table-column>
      <el-table-column prop="name" label="碱度（pom）ml" align="center">
      </el-table-column>
      <el-table-column prop="name" label="钻井液类型" align="center">
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
