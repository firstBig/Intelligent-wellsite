<template>
  <div class="main">
      <el-table :data="tableData3" border style="width: 100%">
          <el-table-column prop="xuhao" label="序号">
          </el-table-column>
          <el-table-column prop="jingjing" label="井径">
          </el-table-column>
          <el-table-column prop="xiangmu" label="分段作业项目">
          </el-table-column>
          <el-table-column prop="qsjs" label="起始井深">
          </el-table-column>
          <el-table-column prop="zzjs" label="终止井深">
          </el-table-column>
          <el-table-column prop="jdjc" label="井段进尺">
          </el-table-column>
          <el-table-column prop="jxzs" label="机械钻速">
          </el-table-column>
          <el-table-column prop="zyts" label="作业天数">
          </el-table-column>
          <el-table-column prop="ljts" label="累计天数">
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
          xuhao: '1',
          jingjing: '',
          xiangmu: '一开',
          qsjs:'0',
          zzjs:'500',
          jdjc:'500',
          jxzs:'10',
          zyts:'钻进',
          ljts:'3'
        }, {
          xuhao: '2',
          jingjing: '',
          xiangmu: '一开',
          qsjs:'500',
          zzjs:'500',
          jdjc:'0',
          jxzs:'0',
          zyts:'固井',
          ljts:'2'
        }, {
          xuhao: '3',
          jingjing: '',
          xiangmu: '二开',
          qsjs:'500',
          zzjs:'1000',
          jdjc:'500',
          jxzs:'10',
          zyts:'钻进',
          ljts:'3'
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
