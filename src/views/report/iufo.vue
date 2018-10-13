<template>
  <div class="main">
      <el-table :data="tableData3" border style="width: 100%">
          <el-table-column prop="zt" label="状态">
          </el-table-column>
          <el-table-column prop="jh" label="井号">
          </el-table-column>
          <el-table-column prop="qk" label="区块">
          </el-table-column>
          <el-table-column prop="company" label="公司">
          </el-table-column>
          <el-table-column prop="danwei" label="施工单位">
          </el-table-column>
          <el-table-column prop="jingdui" label="井队">
          </el-table-column>
          <el-table-column prop="time" label="开钻时间">
          </el-table-column>
          <el-table-column prop="sjjs" label="设计井深(m)">
          </el-table-column>
          <el-table-column prop="dqjs" label="当前井深(m)">
          </el-table-column>
          <el-table-column prop="rjc" label="日进尺(m)">
          </el-table-column>
          <el-table-column prop="cengci" label="钻达层位">
          </el-table-column>
          <el-table-column prop="sgjk" label="施工简况">
          </el-table-column>
          <el-table-column prop="midu" label="密度(g/cm³)">
          </el-table-column>
          <el-table-column prop="niandu" label="粘度(s)">
          </el-table-column>
          <el-table-column prop="jiandu" label="监督">
          </el-table-column>
          <el-table-column prop="jklb" label="井控类别">
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
          zt: '完井',
          jh: 'YS108H20-2',
          qk: '2518',
          company:'粉砂质泥岩',
          danwei:'灰色',
          jingdui:'',
          time:'',
          sjjs:'',
          dqjs:'',
          rjc:'',
          cengci:'',
          sgjk:'',
          midu:'',
          niandu:'',
          jiandu:'',
          jklb:''
        }, {
          zt: '完井',
          jh: 'YS108H20-2',
          qk: '2518',
          company:'粉砂质泥岩',
          danwei:'灰色',
          jingdui:'',
          time:'',
          sjjs:'',
          dqjs:'',
          rjc:'',
          cengci:'',
          sgjk:'',
          midu:'',
          niandu:'',
          jiandu:'',
          jklb:''
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
