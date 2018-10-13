<template>
  <div class="main">
      <el-table :data="tableData3" border style="width: 100%">
          <el-table-column prop="js" label="井深" width="180">
          </el-table-column>
          <el-table-column prop="cs" label="垂深" width="180">
          </el-table-column>
          <el-table-column prop="jxj" label="井斜角°">
          </el-table-column>
          <el-table-column prop="fwj" label="方位角°">
          </el-table-column>
          <el-table-column prop="bhfw" label="闭合方位°">
          </el-table-column>
          <el-table-column prop="bhj" label="闭合距m">
          </el-table-column>
          <el-table-column prop="nanbei" label="南北m">
          </el-table-column>
          <el-table-column prop="dongxi" label="东西m">
          </el-table-column>
          <el-table-column prop="gtd" label="狗腿度">
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
          js: '1',
          cs: '1234.56',
          jxj: '1234.56',
          fwj:'1234.56',
          bhfw:'1234.56	34.5644',
          bhj:'34.5446',
          nanbei:'1234.56',
          dongxi:'1234.56',
          gtd:''
        }, {
          js: '1',
          cs: '1234.56',
          jxj: '1234.56',
          fwj:'1234.56',
          bhfw:'1234.56	34.5644',
          bhj:'34.5446',
          nanbei:'1234.56',
          dongxi:'1234.56',
          gtd:''
        }, {
          js: '1',
          cs: '1234.56',
          jxj: '1234.56',
          fwj:'1234.56',
          bhfw:'1234.56	34.5644',
          bhj:'34.5446',
          nanbei:'1234.56',
          dongxi:'1234.56',
          gtd:''
        }, {
          js: '1',
          cs: '1234.56',
          jxj: '1234.56',
          fwj:'1234.56',
          bhfw:'1234.56	34.5644',
          bhj:'34.5446',
          nanbei:'1234.56',
          dongxi:'1234.56',
          gtd:''
        }
        ]
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
