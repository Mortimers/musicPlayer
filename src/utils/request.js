/**
 * Created by Administrator on 2018/6/27.
 * 为什么要使用这个文件
 * 主要是重写请求
 */
import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'
// 这样写是将axios放在Vue构造函数的原型上，挂载在实例上的组件都可以直接使用this.$http 代替axios
// 目前我觉得可能这种替换的方法，只是想让语义上的更好理解
Vue.prototype.$http = axios
axios.defaults.baseURL = 'http://localhost:8088/'

export const request = async (type = 'POST', url = '', data = {}) => {
    let result
    type = type.toUpperCase()
    if (type === 'GET') {
        await axios.get(url, {params: data})
            .then(res => {
                result = res.data
            })
    } else if (type === 'POST') {
        await axios.post(url, qs.stringify(data))
            .then(res => {
                result = res.data
            })
    }

    return result
}