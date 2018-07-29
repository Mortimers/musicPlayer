/**
 * Created by Administrator on 2018/6/29.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import { request } from '@/utils/request.js'

Vue.use(Vuex);

export default new Vuex.Store({
    state,
    mutations,
    actions
})