<template>
    <div class="played-list">
        <div v-for="(item, index) in playedList" :key="index">
            <playListBar :playItem="item"></playListBar>
        </div>
    </div>
</template>
<script>
/** 2018/6/27 0004
 *  作者:Mortimer
 *  功能:
 */
import { mapState, mapMutations } from 'vuex'
import playListBar from '@/components/playListBar'

export default {
    components: {
        playListBar
    },
    computed: {
        ...mapState([
            'playedList'
        ])
    }
}
</script>
<style lang="stylus">
  .played-list
    position absolute
    left 0
    bottom 1.5rem
    background-color #eee
    width 100%
    max-height 4rem
    overflow-y scroll
</style>
