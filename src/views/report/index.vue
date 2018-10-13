<template>
  <div class="flex">
    <aside>
        <Sidebar :list="list" base="report"/>
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
                txt: '钻井日报',
                url: 'drilling'
            },
            {
                txt: '钻井液日报',
                url: 'drillingfluid'
            },
            {
                txt: '综合报表',
                url: 'iufo'
            },
            {
                txt: '月报',
                url: 'monthly'
            },
            {
                txt: '年报',
                url: 'annual'
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
    font-size: 14px;
    color: #999999;
}
section {
    width: calc(100% - 260px);
}
</style>
