<template>
  <div class="body" :style="{backgroundImage:bg}">
    <Head />
    <div class="route">
      <router-view/>
    </div>
    <Foot />
  </div>
</template>

<script>
import Head from '@/components/common/header';
import Foot from '@/components/common/footer';
export default {
  data () {
    return {
      bg: "url("+require('@/assets/bg.png')+")",
    }
  },

  components: {
    Head,
    Foot
  },

  computed: {},

  mounted: function() {
  },

  methods: {}
}
</script>

<style lang='scss' scoped>
.body{
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center; 
  min-width: 1200px;
}
.route {
  height: calc(100% - 140px);
}
</style>
