<template>
    <div class="song-list">
        <ul>
            <li v-for="(item, index) in json" :key="index">
                <router-link :to='url(item)'>
                    <div class="pic_wrap" @click='set_playedJson(item)'>
                        <img :src="item.sound.pic_500 || item.sound.pic_200">
                        <span :class="hotClass(item.sound.is_hot)" ></span>
                    </div>
                    <h4>{{item.sound.name}}</h4>
                </router-link>
                <!--频道-->
                <div class="channel">
                    <span>{{item.sound.channel.name}}</span>
                    <span>频道</span>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
/** 2018/6/27 0004
 *  作者:Mortimer
 *  功能:
 */
import { mapState, mapMutations } from 'vuex'
export default {
    data() {
        return {
            src: ''
        }
    },
    props: ['json'],
    methods: {
        url (item) {
            return `/detail/${item.sound.id}`
        },
        // 热度
        hotClass(hot = 2) {
            switch (hot) {
                case 1: return 'fire-red'
                case 2: return 'fire-red'
                case 3: return 'fire-yellow'
                case 4: return 'fire-blue'
            }
        },
        ...mapMutations([
            'set_playedJson'
        ])
    }
}
</script>
<style lang="stylus">
    .song-list
        li
            display inline-block
            width 50%
            padding 0 10px 5px
            a
                .pic_wrap
                    width 100%
                    position relative
                    img
                        width 100%
                    span
                        position absolute
                        top 20px
                        right 20px
                        width 22px
                        height 22px
                        background-color rgba(0,0,0,.3)
                        background url(../assets/icon/echo_mobile_sprites@3_8.png) no-repeat
                        background-size 320px
                        &.fire-red
                            display block
                            background-position -162px -215px
                        &.fire-yellow
                            display block
                            background-position 0px -215px
                        &.fire-blue
                            display block
                            background-position -299px -215px
                h4
                    text-align left
                    font-size 14px
                    color #666
                    text-overflow ellipsis
                    overflow hidden
                    white-space nowrap
            .channel
                height 20px
                line-height 20px
                font-size 12px
                span:nth-of-type(1)
                    display inline-block
                    width 75%
                    text-align left
                    color #7dd97f
                    text-overflow ellipsis
                    overflow hidden
                    white-space nowrap
                span:nth-of-type(2)
                    float right
                    padding-right 5px
                    color #999
</style>
