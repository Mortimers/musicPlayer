/**
 * Created by Administrator on 2018/6/29.
 */
import { request } from '@/utils/request.js'

export default {
    // 异步调用，获取recommend的数据
    async get_recommend_data (context, page = 1) {
        let params = {
            page
        }
        let res = await request('GET', 'recommend', params)
        context.dispatch('pushToList', res);
        return res
    },

    async get_banner_data ({dispatch}) {
        let res = await request('GET', 'banner')
        console.log(res)
        // 将异步获取的数据再次处理，这个过程可放在action或mutation中
        dispatch('pushToList',res);
        return res
    },
    async get_music_data ({ state, dispatch }, id) {
        // 如果没有获取到对应ID的数据，重新发一遍请求
        if (!state.listJson[id]) {
            await dispatch('get_recommend_data')
            await dispatch('get_banner_data')
        }
        console.log(state.listJson)
        let res = state.listJson[id].sound

        return res

    },
    // 将获取的sound的信息全部存放在listJson中，后续会用到
    pushToList ({state, commit}, res) {
        if (res.data) {
            let list = {};
            res.data.forEach(item => {
                list[item.sound.id] = item
            })
            list = { ...state.listJson, ...list }
            commit('set_listJson', list)
        }
    }
}
