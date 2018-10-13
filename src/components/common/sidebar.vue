<template>
  <el-scrollbar wrap-class="scrollbar-wrapper" view-class="view-box">
    <el-menu
      :show-timeout="200"
      :default-active="$route.path"
      mode="vertical"
      background-color="#304156"
      text-color="#bfcbd9"
      active-text-color="#409EFF"
    >
     <el-menu-item :index="'/' + base + '/' + item.url" @click="link(item.url)" v-for="(item,i) in list" :key="i" >
           {{item.txt}}
      </el-menu-item>
      
    </el-menu>
  </el-scrollbar>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: []
    },
    base: {
      type: String
    }
  },
  data () {
    return {
    }
  },

  components: {},

  computed: {
    
  },

  mounted: function() {
    console.log(this.$route)
  },

  methods: {
    link(url) {
      let path = '/' + this.base + '/' + url;
      this.$router.push({ path })
    }
  }
}
</script>

<style lang='scss' scoped>


</style>
