<template>
  <div class="main">
      <el-table :data="tableData3" border style="width: 100%">
          <el-table-column prop="jm" label="井名" width="180">
          </el-table-column>
          <el-table-column prop="dings" label="顶深（m）" width="180">
          </el-table-column>
          <el-table-column prop="dis" label="底深（m）">
          </el-table-column>
          <el-table-column prop="yanxing" label="岩性">
          </el-table-column>
          <el-table-column prop="color" label="颜色">
          </el-table-column>
          <el-table-column prop="hyl" label="含油性">
          </el-table-column>
          <el-table-column prop="hyw" label="含有物">
          </el-table-column>
          <el-table-column prop="cjgz" label="沉积构造">
          </el-table-column>
          <el-table-column prop="beizhu" label="备注">
          </el-table-column>
      </el-table>
      <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[5, 10, 15, 20]"
            :page-size="10"
            layout="total, sizes, prev, pager, next, jumper"
            :total="100">
      </el-pagination>
  </div>
</template>

<script>
export default {
  data () {
     return {
        currentPage: 1,
        tableData3: [{
          jm: '焦页195-2HF井',
          dings: '2515',
          dis: '2518',
          yanxing:'粉砂质泥岩',
          color:'灰色',
          hyl:'',
          hyw:'',
          cjgz:'',
          beizhu:''
        }, {
          jm: '焦页195-2HF井',
          dings: '2515',
          dis: '2518',
          yanxing:'粉砂质泥岩',
          color:'灰色',
          hyl:'',
          hyw:'',
          cjgz:'',
          beizhu:''
        }]
      }
  },

  components: {},

  computed: {},

  mounted: function() {},

  methods: {
    handleSizeChange() {

    },
    handleCurrentChange() {

    }
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
    border: 1px solid #30b8e2;
    border-radius: 3px;
    overflow:auto;
}

</style>
<style lang='scss'>

</style>
