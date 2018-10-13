<template>
  <div class="flex">
    <aside>
        <Sidebar :list="list" base="well"/>
    </aside>
    <section>
        <router-view/>
    </section>
  </div>
</template>

<script>
import Sidebar from '@/components/common/Sidebar';
export default {
  data () {
    return {
        list: [
            {
                txt: '井基础数据',
                url: 'base'
            },
            {
                txt: '岩性数据',
                url: 'lithology'
            },
            {
                txt: '地址分层及岩性描述',
                url: 'gsald'
            },
            {
                txt: '钻完并基础数据',
                url: 'drilled'
            },
            {
                txt: '钻机设备',
                url: 'equipment'
            },
            {
                txt: '井身结构',
                url: 'welldepth'
            },
            {
                txt: '井口装置',
                url: 'wellhead'
            },
            {
                txt: '定向井数据',
                url: 'welldata'
            },
            {
                txt: '设计轨道',
                url: 'designtrack'
            },
            {
                txt: '轨迹图展示',
                url: 'mapdisplay'
            },
             {
                txt: '施工进度',
                url: 'schedule'
            },
        ]
    }
  },

  components: {
      Sidebar
  },

  computed: {},

  mounted: function() {},

  methods: {}
}
</script>

<style lang='scss' scoped>
.flex {
    height: 100%;
}
aside {
    width: 260px;
    font-size: 14px;
    color: #999999;
}
section {
    width: calc(100% - 260px);
}
</style>
