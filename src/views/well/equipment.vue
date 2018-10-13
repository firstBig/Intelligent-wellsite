<template>
  <div class="main">
      <el-table :data="tableData3" style="width: 100%">
          <el-table-column prop="xuhao" label="序号">
          </el-table-column>
          <el-table-column prop="type" label="类别">
          </el-table-column>
          <el-table-column prop="name" label="名称">
          </el-table-column>
          <el-table-column prop="produce" label="生产厂家">
          </el-table-column>
          <el-table-column prop="xh" label="型号规格">
          </el-table-column>
          <el-table-column prop="zaihe" label="载荷kN或功率kW">
          </el-table-column>
          <el-table-column label="工作时间">
              <el-table-column prop="benjing" label="本井h">
              </el-table-column>
              <el-table-column prop="leiji" label="累计h">
              </el-table-column>
          </el-table-column>
          <el-table-column prop="zhuanyun" label="运转情况">
          </el-table-column>
          <el-table-column prop="mainbj" label="主要部件更换情况">
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
          type: '井架',
          name: '',
          produce:'',
          xh:'',
          zaihe:'',
          benjing:'',
          leiji:'',
          zhuanyun:'',
          mainbj:''
        }, {
          xuhao: '2',
          type: '天车',
          name: '',
          produce:'',
          xh:'',
          zaihe:'',
          benjing:'',
          leiji:'',
          zhuanyun:'',
          mainbj:''
        },{
          xuhao: '3',
          type: '游动滑车',
          name: '',
          produce:'',
          xh:'',
          zaihe:'',
          benjing:'',
          leiji:'',
          zhuanyun:'',
          mainbj:''
        },{
          xuhao: '4',
          type: '大钩',
          name: '',
          produce:'',
          xh:'',
          zaihe:'',
          benjing:'',
          leiji:'',
          zhuanyun:'',
          mainbj:''
        },{
          xuhao: '5',
          type: '水龙头',
          name: '',
          produce:'',
          xh:'',
          zaihe:'',
          benjing:'',
          leiji:'',
          zhuanyun:'',
          mainbj:''
        },{
          xuhao: '6',
          type: '顶部驱动',
          name: '',
          produce:'',
          xh:'',
          zaihe:'',
          benjing:'',
          leiji:'',
          zhuanyun:'',
          mainbj:''
        },{
          xuhao: '7',
          type: '转盘',
          name: '',
          produce:'',
          xh:'',
          zaihe:'',
          benjing:'',
          leiji:'',
          zhuanyun:'',
          mainbj:''
        },
        {
          xuhao: '8',
          type: '绞车',
          name: '',
          produce:'',
          xh:'',
          zaihe:'',
          benjing:'',
          leiji:'',
          zhuanyun:'',
          mainbj:''
        },{
          xuhao: '9',
          type: '联动机1#',
          name: '',
          produce:'',
          xh:'',
          zaihe:'',
          benjing:'',
          leiji:'',
          zhuanyun:'',
          mainbj:''
        },{
          xuhao: '10',
          type: '联动机2#',
          name: '',
          produce:'',
          xh:'',
          zaihe:'',
          benjing:'',
          leiji:'',
          zhuanyun:'',
          mainbj:''
        },{
          xuhao: '11',
          type: '联动机3#',
          name: '',
          produce:'',
          xh:'',
          zaihe:'',
          benjing:'',
          leiji:'',
          zhuanyun:'',
          mainbj:''
        },{
          xuhao: '12',
          type: '联动机4#',
          name: '',
          produce:'',
          xh:'',
          zaihe:'',
          benjing:'',
          leiji:'',
          zhuanyun:'',
          mainbj:''
        },{
          xuhao: '13',
          type: '钻井泵1#',
          name: '',
          produce:'',
          xh:'',
          zaihe:'',
          benjing:'',
          leiji:'',
          zhuanyun:'',
          mainbj:''
        },{
          xuhao: '14',
          type: '钻井泵2#',
          name: '',
          produce:'',
          xh:'',
          zaihe:'',
          benjing:'',
          leiji:'',
          zhuanyun:'',
          mainbj:''
        },{
          xuhao: '15',
          type: '钻井泵3#',
          name: '',
          produce:'',
          xh:'',
          zaihe:'',
          benjing:'',
          leiji:'',
          zhuanyun:'',
          mainbj:''
        },{
          xuhao: '16',
          type: '柴油机1#',
          name: '',
          produce:'',
          xh:'',
          zaihe:'',
          benjing:'',
          leiji:'',
          zhuanyun:'',
          mainbj:''
        },{
          xuhao: '17',
          type: '柴油机2#',
          name: '',
          produce:'',
          xh:'',
          zaihe:'',
          benjing:'',
          leiji:'',
          zhuanyun:'',
          mainbj:''
        },{
          xuhao: '18',
          type: '柴油机3#',
          name: '',
          produce:'',
          xh:'',
          zaihe:'',
          benjing:'',
          leiji:'',
          zhuanyun:'',
          mainbj:''
        },{
          xuhao: '19',
          type: '柴油机4#',
          name: '',
          produce:'',
          xh:'',
          zaihe:'',
          benjing:'',
          leiji:'',
          zhuanyun:'',
          mainbj:''
        },{
          xuhao: '20',
          type: '转盘电动机',
          name: '',
          produce:'',
          xh:'',
          zaihe:'',
          benjing:'',
          leiji:'',
          zhuanyun:'',
          mainbj:''
        },{
          xuhao: '21',
          type: '绞车电动机',
          name: '',
          produce:'',
          xh:'',
          zaihe:'',
          benjing:'',
          leiji:'',
          zhuanyun:'',
          mainbj:''
        },{
          xuhao: '22',
          type: '钻井泵电动机',
          name: '',
          produce:'',
          xh:'',
          zaihe:'',
          benjing:'',
          leiji:'',
          zhuanyun:'',
          mainbj:''
        },
      
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
