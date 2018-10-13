<template>
  <div class="main">
      <el-table :data="tableData3" style="width: 100%">
          <el-table-column prop="jkzz" label="井口装置">
          </el-table-column>
          <el-table-column prop="ggxh" label="规格型号">
          </el-table-column>
          <el-table-column prop="yldj" label="压力等级MPa">
          </el-table-column>
          <el-table-column prop="sccj" label="生产厂家">
          </el-table-column>
          <el-table-column prop="ccday" label="出厂日期">
          </el-table-column>
          <el-table-column prop="number" label="编号">
          </el-table-column>
          <el-table-column label="试压结果">
              <el-table-column prop="jiezhi" label="介质">
              </el-table-column>
              <el-table-column prop="time" label="时间min">
              </el-table-column>
              <el-table-column prop="yali" label="压力MPa">
              </el-table-column>
              <el-table-column prop="yajiang" label="压降MPa">
              </el-table-column>
              <el-table-column prop="hege" label="是否合格">
              </el-table-column>
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
          jkzz: '环形防喷器',
          ggxh: '',
          yldj: '',
          sccj:'',
          ccday:'',
          number:'',
          jiezhi:'',
          time:'',
          yali:'',
          yajiang:'',
          hege:''
        }, {
          jkzz: '环形防喷器',
          ggxh: '',
          yldj: '',
          sccj:'',
          ccday:'',
          number:'',
          jiezhi:'',
          time:'',
          yali:'',
          yajiang:'',
          hege:''
        },{
          jkzz: '单闸板防喷器/下',
          ggxh: '',
          yldj: '',
          sccj:'',
          ccday:'',
          number:'',
          jiezhi:'',
          time:'',
          yali:'',
          yajiang:'',
          hege:''
        },{
          jkzz: '双闸板防喷器/上',
          ggxh: '',
          yldj: '',
          sccj:'',
          ccday:'',
          number:'',
          jiezhi:'',
          time:'',
          yali:'',
          yajiang:'',
          hege:''
        },{
          jkzz: '双闸板防喷器/下',
          ggxh: '',
          yldj: '',
          sccj:'',
          ccday:'',
          number:'',
          jiezhi:'',
          time:'',
          yali:'',
          yajiang:'',
          hege:''
        },{
          jkzz: '四通/上',
          ggxh: '',
          yldj: '',
          sccj:'',
          ccday:'',
          number:'',
          jiezhi:'',
          time:'',
          yali:'',
          yajiang:'',
          hege:''
        },{
          jkzz: '四通/下',
          ggxh: '',
          yldj: '',
          sccj:'',
          ccday:'',
          number:'',
          jiezhi:'',
          time:'',
          yali:'',
          yajiang:'',
          hege:''
        },{
          jkzz: '法兰',
          ggxh: '',
          yldj: '',
          sccj:'',
          ccday:'',
          number:'',
          jiezhi:'',
          time:'',
          yali:'',
          yajiang:'',
          hege:''
        },{
          jkzz: '升高短节',
          ggxh: '',
          yldj: '',
          sccj:'',
          ccday:'',
          number:'',
          jiezhi:'',
          time:'',
          yali:'',
          yajiang:'',
          hege:''
        },{
          jkzz: '控制系统',
          ggxh: '',
          yldj: '',
          sccj:'',
          ccday:'',
          number:'',
          jiezhi:'',
          time:'',
          yali:'',
          yajiang:'',
          hege:''
        },{
          jkzz: '节流管汇',
          ggxh: '',
          yldj: '',
          sccj:'',
          ccday:'',
          number:'',
          jiezhi:'',
          time:'',
          yali:'',
          yajiang:'',
          hege:''
        },{
          jkzz: '压井管汇',
          ggxh: '',
          yldj: '',
          sccj:'',
          ccday:'',
          number:'',
          jiezhi:'',
          time:'',
          yali:'',
          yajiang:'',
          hege:''
        },{
          jkzz: '放喷管线',
          ggxh: '',
          yldj: '',
          sccj:'',
          ccday:'',
          number:'',
          jiezhi:'',
          time:'',
          yali:'',
          yajiang:'',
          hege:''
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
