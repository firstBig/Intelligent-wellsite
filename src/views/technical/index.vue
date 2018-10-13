<template>
  <div class="flex">
    <aside>
      <Sidebar :list="list" base='technical' />
    </aside>
    <section>
      <router-view />
    </section>
  </div>
</template>

<script>
  import Sidebar from '@/components/common/Sidebar';
  export default {
    data() {
      return {
        list: [{
            txt: '钻头选型',
            url: 'bitselection'
          },
          {
            txt: '钻井液密度曲线',
            url: 'densitycurve'
          },
          {
            txt: '实时钻井液性能与邻井对比',
            url: 'drillingfluid'
          },
          {
            txt: '实时轨迹监测与邻井防碰',
            url: 'trajectory'
          },
          {
            txt: '远程技术支持',
            url: 'remotesupport'
          },
          {
            txt: '远程诊断',
            url: 'remotediagnosis'
          },
          {
            txt: '新工艺新技术',
            url: 'newprocess'
          }
        ]
      }
    },

    components: {
      Sidebar
    },

    computed: {},

    mounted: function () {},

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
