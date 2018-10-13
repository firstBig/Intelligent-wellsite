<template>
  <div class="main">
      <el-table :data="tableData3" style="width: 100%">
          <el-table-column prop="xuhao" label="序号">
          </el-table-column>
          <el-table-column prop="kaici" label="开次">
          </el-table-column>
          <el-table-column prop="zhijing" label="钻头直径mm">
          </el-table-column>
          <el-table-column prop="jingshen" label="井深m">
          </el-table-column>
          <el-table-column label="套管">
              <el-table-column prop="waijing" label="外径mm">
              </el-table-column>
              <el-table-column prop="xrjd" label="下入井段m">
              </el-table-column>
          </el-table-column>
          <el-table-column prop="tgxsd" label="套管鞋深度m">
          </el-table-column>
          <el-table-column prop="snfs" label="水泥返深m">
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
          xuhao: '',
          kaici: '',
          zhijing: '',
          jingshen:'',
          waijing:'',
          xrjd:'',
          tgxsd:'',
          snfs:''
        }, {
          xuhao: '',
          kaici: '',
          zhijing: '',
          jingshen:'',
          waijing:'',
          xrjd:'',
          tgxsd:'',
          snfs:''
        },{
          xuhao: '',
          kaici: '',
          zhijing: '',
          jingshen:'',
          waijing:'',
          xrjd:'',
          tgxsd:'',
          snfs:''
        },{
          xuhao: '',
          kaici: '',
          zhijing: '',
          jingshen:'',
          waijing:'',
          xrjd:'',
          tgxsd:'',
          snfs:''
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
