<template>
  <div class="main">
      <el-table :data="tableData3" style="width: 100%">
          <el-table-column prop="date" label="地质年代">
          </el-table-column>
          <el-table-column prop="name" label="层位名称">
          </el-table-column>
          <el-table-column label="设计井深">
              <el-table-column prop="sjxs" label="斜深">
              </el-table-column>
              <el-table-column prop="sjcs" label="垂深">
              </el-table-column>
          </el-table-column>
          <el-table-column label="实钻井深">
              <el-table-column prop="szxs" label="斜深">
              </el-table-column>
              <el-table-column prop="szcs" label="垂深">
              </el-table-column>
          </el-table-column>
          <el-table-column label="层厚">
              <el-table-column prop="chxs" label="斜深">
              </el-table-column>
              <el-table-column prop="chcs" label="垂深">
              </el-table-column>
          </el-table-column>
          <el-table-column prop="describe" label="主要岩性描述">
          </el-table-column>
          <el-table-column prop="dcylxs" label="地层压力系数">
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
          date: '',
          name: '',
          sjxs: '',
          sjcs:'',
          szxs:'',
          szcs:'',
          chxs:'',
          chcs:'',
          describe:'',
          dcylxs:'',
          beizhu:''
        }, {
           date: '',
          name: '',
          sjxs: '',
          sjcs:'',
          szxs:'',
          szcs:'',
          chxs:'',
          chcs:'',
          describe:'',
          dcylxs:'',
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
