<template>
  <div class="main">
      <el-table :data="tableData3" border style="width: 100%">
          <el-table-column prop="padian" label="靶点">
          </el-table-column>
          <el-table-column prop="pdxs" label="靶点斜深">
          </el-table-column>
          <el-table-column prop="pdcs" label="靶点垂深">
          </el-table-column>
          <el-table-column prop="pdhzb" label="靶点横坐标">
          </el-table-column>
          <el-table-column prop="pdzzb" label="靶点纵坐标">
          </el-table-column>
          <el-table-column prop="pdjx" label="靶点井斜">
          </el-table-column>
          <el-table-column prop="pdfw" label="靶点方位">
          </el-table-column>
          <el-table-column prop="pdbhfw" label="靶点闭合方位">
          </el-table-column>
          <el-table-column prop="pdspwy" label="靶点水平位移">
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
          padian: 'A',
          pdxs: '',
          pdcs: '',
          pdhzb:'',
          pdzzb:'',
          pdjx:'',
          pdfw:'',
          pdbhfw:'',
          pdspwy:''
        }, {
          padian: 'B多靶点可往下延续',
          pdxs: '',
          pdcs: '',
          pdhzb:'',
          pdzzb:'',
          pdjx:'',
          pdfw:'',
          pdbhfw:'',
          pdspwy:''
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
