<template>
    <div class="swiper-box">
        <swiper class="swiper" :options="swiperOption">
            <swiper-slide v-for="(item, index) in json" :key="index">
                <router-link to="/index">
                    <img :src="item.sound.pic_640">
                </router-link>
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
        <!--以下看需要添加-->
        <div class="swiper-pagination"></div>
    </div>
</template>
<script>
/** 2017/7/4 0004
 *作者:三思先生
 *功能:
 */
import { swiper,  swiperSlide } from 'vue-awesome-swiper'
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
    data() {
        return {
            json: [],
            swiperOption: {
                loop: true,
                notNextTick: true,
                pagination: {
                    el: '.swiper-pagination'
                },
                paginationClickable: true,
                autoplay: 3000,
                autoplayDisableOnInteraction: true
            }
        }
    },
    components: {
        swiper,
        swiperSlide
    },
    methods: {
        ...mapActions([
            'get_banner_data'
        ])
    },
    created() {
        this.get_banner_data()
            .then(res => {
                this.json = res.data
                console.log(res.data)
            })
    }
}
</script>
<style lang="stylus">
.swiper-box
    width 100%
    padding 8px
    background-color #eee
    .swiper
        100%
        100%
        .swiper-slide
            img
                width 100%
                height auto
</style>
