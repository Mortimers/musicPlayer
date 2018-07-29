<template>
    <div class="play-list-bar" @click.stop="set_audio_data(playItem.sound)">
        <Icon :type="(playItem.sound.id===audio.data.id) ? `ios-play` : `ios-pause`"></Icon>
        <p>{{playItem.sound.name}}</p>
        <Icon type="close" @click.stop="deleteItem(playItem)"></Icon>
    </div>
</template>
<script>
/** 2018/6/27 0004
 *  作者:Mortimer
 *  功能:
 */
import { mapState, mapMutations } from 'vuex'
export default {
    props: ['playItem'],
    data() {
        return {
            play: false
        }
    },
    computed: {
        ...mapState([
            'audio',
            'playedList'
        ])
    },
    methods: {
        ...mapMutations([
            'set_audio_data',
            'set_playList'
        ]),
        deleteItem(item) {
            var index = this.playedList.findIndex( n => n.sound.id === item.sound.id )
            this.playedList.splice(index, 1)
            this.set_playList(this.playedList)
            console.log(index)
        }
    }
}
</script>
<style lang="stylus">
.play-list-bar
    width 100%
    height 1rem
    display flex
    align-items center
    font-size 12px
    i
        text-align center
    i:nth-of-type(1)
        padding 0 .4rem
        flex-basis .8rem
    i:nth-of-type(2)
        padding 0 .4rem
        flex-basis .8rem
    p
        flex 1
</style>
