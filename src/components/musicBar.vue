<template>
  <div class="played-main" v-if="!!playedList.length">
    <div class="play-bar">
      <router-link class="cover" :to="`/detail/${audio.data.id}`"><img :src="audio.data.pic_500"></router-link>
      <div class="play-des">
        <p>{{audio.data.name}}</p>
        <p>{{audio.data.user.name}}</p>
      </div>
      <div class="play-btn">
        <Icon type="navicon-round" @click.stop="isDisplayList = !isDisplayList"></Icon>
        <Icon :type="audio.play ? 'pause' : 'play'" @click.stop="set_playBtn(!audio.play)"></Icon>
        <Icon type="ios-skipforward"></Icon>
      </div>
      <playedlist v-if="isDisplayList"></playedlist>
    </div>
  </div>
</template>
<script>
/** 2018/6/27 0004
 *  作者:Mortimer
 *  功能:
 */
 import { mapState, mapMutations } from 'vuex'
 import playedlist from '@/page/playedList'
 export default {
    data() {
        return {
            isDisplayList: false
        }
    },
    components: {
        playedlist
    },
    computed: {
        ...mapState([
            'audio',
            'playedList'
        ])

    },
    methods: {
      ...mapMutations([
            'set_playBtn'      // 播放开关事件
        ])
    }
 }

</script>
<style lang="stylus">
  toRem(val) {
    return (ceil(val / 37.5 * 100) / 100)rem
  }

  .played-main
    width 100%
    height 1.5rem
    background-color #e5e5e5
    position fixed
    bottom 0
    left 0
    z-index 5
    .play-bar
      width 100%
      height 100%
      padding 0 .2rem
      display flex
      display -webkit-flex
      align-items center
      position relative
      .cover
        display inline-block
        flex-basis 1rem
        height 1rem
        overflow hidden
        img
          width 100%
      .play-des
        flex 1
        font-size 12px
        padding 0 .2rem
        min-width 0
        p
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
        p:nth-of-type(2)
          padding-left .4rem
      .play-btn
        flex-basis 3rem
        height 1rem
        display flex
        align-items center
        font-size .6rem
        i
          flex 1
          text-align center
</style>
