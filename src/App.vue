<template>
  <div id="app">
    <router-view></router-view>
    <musicBar></musicBar>
    <Icon type="ios-arrow-up" class="back-top"></Icon>
  </div>
</template>

<script>
import musicBar from '@/components/musicBar'
export default {
  name: 'App',
  components: {
      musicBar
  }
}
</script>

<style lang="stylus">
#app
    position relative
    .back-top
        position absolute
        right 1rem
        top 10rem
        font-size 1rem
        z-index 10

</style>
