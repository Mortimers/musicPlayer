/**
 * Created by Administrator on 2018/6/29.
 */
export default {
    set_audio_data (state, val) {
        state.audio.data = val
    },
    set_songList (state, val) {
        state.songList = val
    },
    set_listJson (state, val) {
        state.listJson = val
    },
    // 设置开关
    set_playBtn (state, val) {
        state.audio.play = val
    },
    // 播放列表
    set_playedJson (state, val) {
        var index = state.playedList.findIndex( n => n.sound.id === val.sound.id)
        if (index < 0) {
          return state.playedList.push(val)
        }
        return
    },
    set_playList (state, val) {
        state.playedList = val
    }
}
