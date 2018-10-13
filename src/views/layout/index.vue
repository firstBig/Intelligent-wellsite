<template>
  <div id="app">
    <sidebar class="sidebar-container"/>
    <div class="main-container">
      <navbar/>
    </div>
  </div>
</template>

<script>
import {  Sidebar , Navbar } from './components'
export default {
  data () {
    return {
    }
  },

  components: {
      Sidebar,
      Navbar
  },

  computed: {},

  mounted: function() {},

  methods: {}
}
</script>

<style lang='scss' scoped>

</style>
