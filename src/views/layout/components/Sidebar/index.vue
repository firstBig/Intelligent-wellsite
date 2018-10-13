<template>
  <el-scrollbar wrap-class="scrollbar-wrapper" view-class="view-box">
    <el-menu
      :show-timeout="200"
      :default-active="$route.path"
      :collapse="isCollapse"
      mode="vertical"
      background-color="#304156"
      text-color="#bfcbd9"
      active-text-color="#409EFF"
    >
      <sidebar-item v-for="route in routes" :key="route.name" :item="route" :base-path="route.path"/>
    </el-menu>
  </el-scrollbar>
</template>

<script>
/*
native boolean  true 不显示滚动条
wrapStyle 外层盒子样式
wrapClass 外层盒子类
viewClass 内层盒子类
viewStyle 内层盒子样式
noresize boolean 
tag: {
    type: String
    default: div
}
*/

import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'
export default {
  data () {
    return {
    }
  },

  components: {
    SidebarItem
  },

  computed: {
    ...mapGetters([
      'sidebar'
    ]),
    routes() {
      console.log(this.$router)
      return this.$router.options.routes
    },
    isCollapse() {
      return !this.sidebar.opened
    }
  },

  mounted: function() {},

  methods: {}
}
</script>

<style lang='scss' scoped>

</style>
