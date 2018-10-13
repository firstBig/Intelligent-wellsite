<template>
  <div class="flex">
    <aside>
        <Sidebar :list="list" base='record'/>
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
                txt: '钻头',
                url: 'bit'
            },
            {
                txt: '动力钻具',
                url: 'powerdrill'
            },
            {
                txt: '扶正器',
                url: 'centralizer'
            },
            {
                txt: '钻具组合',
                url: 'assembly'
            },
            {
                txt: '钻具损坏记录',
                url: 'devicefailuredata'
            },
            {
                txt: '钻井液记录',
                url: 'drillingfluidrecording'
            },
            {
                txt: '低泵冲',
                url: 'lowpumpspeed'
            },
            {
                txt: '地破及承压试验',
                url: 'floorburstandpressuretest'
            },
            {
                txt: '油气层保护',
                url: 'reservoirprotection'
            },
            {
                txt: '钻井取心',
                url: 'drillingcoring'
            }
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
}
section {
    width: calc(100% - 260px);
}
</style>
