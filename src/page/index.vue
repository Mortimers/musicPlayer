<template>
    <div id="main">
        <div class="main-swiper">
            <swiper></swiper>
        </div>
        <div class="main-content">
            <h3>每日推荐</h3>
            <songlist :json='recommendJson'></songlist>
        </div>
        <div class="loadingText">
            <div v-if="loading === 'loading'">加载中...</div>
            <div v-else-if="loading === 'nothing'">没有数据啦 ~</div>
            <div v-else-if="loading === 'err'">出错啦T T~</div>
        </div>
    </div>
</template>
<script>
/** 2017/7/4 0004
 *作者:三思先生
 *功能:
 */
import swiper from '@/components/Swiper'
import songlist from '@/components/songList'
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
    data () {
        return {
            page: 1,
            loading: 'loading',
            lock: true,   //设置一个开关来避免重负请求数据
            recommendJson: []
        }
    },
    components: {
        swiper,
        songlist
    },
    computed: {
        ...mapState([
            'audio',
            'playedList'
        ])
    },
    methods: {
        ...mapMutations([
            'set_playedJson'
        ]),
        ...mapActions([
            'get_recommend_data'
        ]),
        // 获取推荐数据
        get_recommend () {
            this.get_recommend_data(this.page)
                .then(res => {
                    if (res.data) {
                        this.recommendJson = res.data
                        console.log(res.data)
                    }
                })
                .catch(err => {
                    console.log(err)
                })
        },
        // 获取更多数据
        get_recommend_more () {
            this.loading = 'loading'
            //进入方法时，关闭开关
            this.lock = false
            this.get_recommend_data(this.page)
                .then(res => {
                    if (res.data) {
                        this.recommendJson.push(...res.data)
                        console.log(this.recommentJson)
                        this.page = 3
                    } else {
                        this.loading = 'nothing'
                    }
                    console.log("请求成功")
                    this.lock = true
                })
                .catch(err => {
                    this.loading = 'err'
                    console.log("请求失败")
                })
        },

        // 滚动底部刷新
        onScroll () {

            let setTime
            // 再次滚动时，先清除定时任务
            if (setTime) {
                clearTimeout(setTime);
            }

            setTime = setTimeout(() => {
                let scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop,
                screenHeight = window.screen.height,
                scrollHeight = document.body.scrollHeight,
                distance = 0;
                console.log(scrollTop + ":" + screenHeight + ":" + scrollHeight)
                let is_bottom = scrollTop + screenHeight + distance >= scrollHeight;
                console.log(is_bottom)
                console.log("lock:" + this.lock)
                if (is_bottom && this.lock) {
                    this.get_recommend_more()
                }
            }, 200)
        }

    },
    mounted() {
        this.get_recommend();
        this.$nextTick(() => {
            window.addEventListener("scroll", this.onScroll)
        })

    }
}
</script>
<style lang="stylus">
    .main-content
        h3
            width 3.2rem
            height .7rem
            font-size 12px
            line-height .7rem
            margin 20px auto
            text-align center
            background-color #d6ffd6
            color #639e5e
            border-radius 20px
    .loadingText
        div
          font-size .4rem
          color #888
          margin 10px auto

</style>
