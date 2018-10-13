<template>
  <div class="box">
    <!-- 油气层保护 -->
    <p class="title">保护油气层钻井液性能</p>
    <el-table border style="width: 95%; text-align: center;" :data="tableData3">
      <el-table-column prop="date" label="井深m" align="center">
      </el-table-column>
      <el-table-column prop="name" label="钻井液体系" align="center">
      </el-table-column>
      <el-table-column prop="address" label="密度g/cm3" align="center">
      </el-table-column>
      <el-table-column prop="date" label="滤失量ml" align="center">
      </el-table-column>
      <el-table-column prop="name" label="HTHP滤失量ml" align="center">
      </el-table-column>
      <el-table-column prop="address" label="MBT含量%" align="center">
      </el-table-column>
      <el-table-column prop="date" label="固含%" align="center">
      </el-table-column>
      <el-table-column prop="name" label="PH值" align="center">
      </el-table-column>
      <el-table-column prop="name" label="措施" align="center">
      </el-table-column>
    </el-table>
    <p class="title">油气层保护材料及相匹配的其他处理剂</p>
    <el-table border style="width: 95%; text-align: center;" :data="tableData3">
      <el-table-column prop="date" label="油气层保护材料" align="center">
        <el-table-column prop="name" label="序号" align="center">
        </el-table-column>
        <el-table-column prop="address" label="名称" align="center">
        </el-table-column>
        <el-table-column prop="date" label="代号" align="center">
        </el-table-column>
        <el-table-column prop="name" label="加量t" align="center">
        </el-table-column>
      </el-table-column>
      <el-table-column prop="address" label="与其相匹配的处理剂" align="center">
        <el-table-column prop="address" label="序号" align="center">
        </el-table-column>
        <el-table-column prop="date" label="其他处理剂" align="center">
        </el-table-column>
        <el-table-column prop="name" label="代号" align="center">
        </el-table-column>
        <el-table-column prop="name" label="加量t" align="center">
        </el-table-column>
      </el-table-column>
    </el-table>
    <p class="title">油气层浸泡时间及保护措施</p>
    <el-table border style="width: 95%; text-align: center;" :data="tableData3">
      <el-table-column prop="date" label="序号" align="center">
      </el-table-column>
      <el-table-column prop="date" label="油气层井段m" align="center">
        <el-table-column prop="name" label="起" align="center">
        </el-table-column>
        <el-table-column prop="address" label="至" align="center">
        </el-table-column>
      </el-table-column>
      <el-table-column prop="address" label="浸泡时间h" align="center">
      </el-table-column>
      <el-table-column prop="name" label="保护措施" align="center">
      </el-table-column>
    </el-table>
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
