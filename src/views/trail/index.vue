<template>
  <div class="flex">
    <aside>
        <Sidebar :list="list" base="trail"/>
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
                txt: '轨迹剖面',
                url: 'profile'
            },
            {
                txt: '仪器迁移',
                url: 'migration'
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
