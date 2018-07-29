<template>
    <div id="detail">
        <div class="sound-user">
            <a class="user-img">
              <img :src="audio.data.pic_500">
              <img class='v-icon' src="https://ws-qn-echo-image-cdn.app-echo.com/Foz1CX1MdKHnTiDV26btgAmDJ3Y-?imageMogr2/auto-orient/quality/100%7CimageMogr2/thumbnail/!100x100r/gravity/Center/crop/100x100/dx/0/dy/0">
            </a>
            <a class="user-name">{{audio.data.name}}</a>
            <a class="user-fans">粉丝  <em>{{audio.data.like_count}}</em></a>
        </div>
        <div class="sound-cover">
            <img :src="audio.data.pic_500">
            <div class="controls">
                <div class="play-btn" :class="audio.play ? 'play' : 'pause'" @click.stop="set_playBtn(!audio.play)"></div>
                <div class="song-des">
                    <p class="song-name">{{audio.data.name}}</p>
                    <p>
                      <a><em>{{audio.data.user.name}}</em></a> 发布在
                      <a><em>{{audio.data.channel.name}}</em></a> 频道
                    </p>
                </div>
                <div class="barrage" :class="barrage ? 'off' : 'on'" @click.stop="barrage = !barrage"></div>
            </div>
        </div>
        <div class="sound-info">
            <div class="sound-info-bar">
                <div class="play-count">{{audio.data.view_count}}播放</div>
                <div class="like-count">{{audio.data.like_count}}喜欢</div>
                <div class="to_bell_btn">设为手机铃声</div>
            </div>
            <div class="lyric">
              <div v-if='audio.data.song_info'>
                <p v-if='audio.data.song_info.album_name'>{{audio.data.song_info.album_name.type}} : {{audio.data.song_info.album_name.name}}</p>
                <p v-if='audio.data.song_info.author'>{{audio.data.song_info.author.type}} : {{audio.data.song_info.author.name}}</p>
                <p v-if='audio.data.song_info.name'>{{audio.data.song_info.name.type}} : {{audio.data.song_info.name.name}}</p>
              </div>
              <div class="lyr">
                <p v-if='audio.data.lyrics'>{{audio.data.lyrics}}</p>
                <p v-else>
                  <i class="noLyric">没有相关的歌词T T~ </i>
                </p>
              </div>
            </div>
        </div>
        <div class="sound-more">

        </div>
    </div>
</template>
<script>
/** 2018/07/05 0004
 *  作者:Mortimer
 *  功能:
 */
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
    name: 'detail',
    data() {
        return {
            barrage: false
        }
    },
    computed: {
        ...mapState ([
            'audio'
        ])
    },
    methods: {
        ...mapMutations ([
            'set_audio_data',   // 映射this.set_audio_data() 到this.$store.commit('set_audio_data')
            'set_playBtn'      // 播放开关事件
        ]),
        ...mapActions ([
            'get_music_data'
        ]),
        //获取对应id的数据
        get_sound () {
            this.get_music_data(this.$route.params.id)
                .then(res => {
                    console.log(res)
                    this.set_audio_data(res)
                })
        }
    },
    mounted() {
        this.get_sound();
    }
}
</script>
<style lang="stylus">
img_height = 10rem

.sound-user
    width 100%
    height 1.47rem
    line-height 1.47rem
    text-align left
    a
        display inline-block
        font-size 14px
    .user-img
        width 1.47rem
        height 1.47rem
        position relative
        img:nth-of-type(1)
            width 100%
            padding .2rem
            border-radius 1rem
        .v-icon
          width 15px
          height 15px
          border-radius 50%
          position absolute
          bottom 10%
          right 10%
    .user-fans
        float right
        color #666
        padding-right 20px
        em
            color #00ae05
    .user-name
        width 150px
        text-align left
        white-space nowrap
        text-overflow ellipsis
        overflow hidden

.sound-cover
    width 100%
    height img_height
    position relative
    img
        width 100%
        height img_height
        vertical-align bottom
    .controls
        width 100%
        height 1.6rem
        line-height 1.6rem
        background-color rgba(0,0,0,.3)
        position absolute
        bottom 0
        left 0
        display flex
        .play-btn
            width 1rem
            height 1rem
            margin .3rem
            background-size cover
        .song-des
            flex 1
            min-width 0
            font-size 14px
            p
                height .8rem
                line-height .8rem
                text-align left
                color #fff
                overflow hidden
                text-overflow ellipsis
                white-space nowrap
                font-size .38rem
                em
                    color #6ed56c
        .barrage
            width 1.67rem
            height .67rem
            margin .5rem .3rem
            background-size cover
            border-radius 1.67rem
.sound-info
    .sound-info-bar
        display flex
        width 100%
        height 1.5rem
        line-height 1.5rem
        padding 0 .43rem
        border-bottom 1px solid #e8e8e8
        div
            font-size .32rem
            color #a9a9a9
        .play-count
            background url("../assets/img/play_num.png") no-repeat
            background-size .3rem .3rem
            background-position 0 48%
            padding-left .6rem
            margin-right .6rem
        .like-count
            background url("../assets/img/like_num.png") no-repeat
            background-size .3rem .3rem
            background-position 0 48%
            padding-left .6rem
            margin-right .6rem
        .to_bell_btn
            background url("../assets/img/bell.png") no-repeat
            background-size .4rem .4rem
            background-position 0 48%
            padding-left .6rem
            color #6ed56c
    .lyric
        width 100%
        height 10rem
        font-size .4rem
        text-align left
        padding 30px
        .lyr
            padding-top .5rem
</style>

<style scoped>
.play{
    background: url(../assets/img/play.png) no-repeat;
}
.pause{
    background: url(../assets/img/pause.png) no-repeat;
}
.on{
    background: url(../assets/img/danmu_on.png) no-repeat;
}
.off{
    background: url(../assets/img/danmu_off.png) no-repeat;
}
</style>
