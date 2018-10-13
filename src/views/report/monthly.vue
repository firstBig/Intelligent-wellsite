<template>
  <div class="main">
      <h6>按照井号统计</h6>
      <el-table :data="tableData3" border style="width: 100%">
          <el-table-column prop="jh" label="井号">
          </el-table-column>
          <el-table-column prop="jdh" label="井队号">
          </el-table-column>
          <el-table-column label="基础信息">
               <el-table-column prop="jb" label="井别">
               </el-table-column>
               <el-table-column prop="jx" label="井型">
               </el-table-column>
               <el-table-column prop="js" label="井深m">
               </el-table-column>
          </el-table-column>
          <el-table-column prop="wzcw" label="完钻层位">
          </el-table-column>
          <el-table-column label="时间">
               <el-table-column prop="kzday" label="开钻日期">
               </el-table-column>
               <el-table-column prop="wzday" label="完钻日期">
               </el-table-column>
               <el-table-column prop="wjday" label="完井日期">
               </el-table-column>
          </el-table-column>
          <el-table-column label="周期">
               <el-table-column prop="zjtime" label="钻井周期">
               </el-table-column>
               <el-table-column prop="wjtime" label="完井周期">
               </el-table-column>
          </el-table-column>
          <el-table-column prop="hxzs" label="机械钻速m/h">
          </el-table-column>
          <el-table-column prop="sgfzl" label="事故复杂率%">
          </el-table-column>
          <el-table-column prop="jszlpj" label="井身质量评价">
          </el-table-column>
          <el-table-column prop="gjzlpj" label="固井质量评价">
          </el-table-column>
          <el-table-column prop="qxshl" label="取芯收获率%">
          </el-table-column>
          <el-table-column prop="pds" label="靶点数">
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
      <h6>按照队伍统计</h6>
  </div>
</template>

<script>
export default {
  data () {
     return {
        currentPage: 1,
        tableData3: [{
          jh: '完井',
          jdh: 'YS108H20-2',
          jb: '2518',
          jx:'粉砂质泥岩',
          js:'灰色',
          wzcw:'',
          kzday:'',
          wzday:'',
          wjday:'',
          zjtime:'',
          wjtime:'',
          hxzs:'',
          sgfzl:'',
          jszlpj:'',
          gjzlpj:'',
          qxshl:'',
          pds:''
        }, {
          jh: '',
          jdh: '',
          jb: '',
          jx:'',
          js:'',
          wzcw:'',
          kzday:'',
          wzday:'',
          wjday:'',
          zjtime:'',
          wjtime:'',
          hxzs:'',
          sgfzl:'',
          jszlpj:'',
          gjzlpj:'',
          qxshl:'',
          pds:''
        }, {
          jh: '',
          jdh: '',
          jb: '',
          jx:'',
          js:'',
          wzcw:'',
          kzday:'',
          wzday:'',
          wjday:'',
          zjtime:'',
          wjtime:'',
          hxzs:'',
          sgfzl:'',
          jszlpj:'',
          gjzlpj:'',
          qxshl:'',
          pds:''
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
