import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    videos: [
      {id: 1, name: "video1", description: "<p>11111</p>", thumbnail: "../../public/3799966_s.jpg", videoURL: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"},
      {id: 2, name: "video2", description: "<p>22222</p>", thumbnail: "../../public/3799966_s.jpg", videoURL: "https://nyti.ms/3jCUAe3"},
      {id: 3, name: "video3", description: "<p>33333</p>", thumbnail: "../../public/3799966_s.jpg", videoURL: ""},
      {id: 4, name: "video4", description: "<p>44444</p>", thumbnail: "../../public/3799966_s.jpg", videoURL: ""},
      {id: 5, name: "video5", description: "<p>55555</p>", thumbnail: "../../public/3799966_s.jpg", videoURL: ""},
      {id: 6, name: "video6", description: "<p>66666</p>", thumbnail: "../../public/3799966_s.jpg", videoURL: ""},
      {id: 7, name: "video7", description: "<p>77777</p>", thumbnail: "../../public/3799966_s.jpg", videoURL: ""},
      {id: 8, name: "video8", description: "<p>88888</p>", thumbnail: "../../public/3799966_s.jpg", videoURL: ""},
      {id: 9, name: "video9", description: "<p>99999</p>", thumbnail: "../../public/3799966_s.jpg", videoURL: ""},

    ],
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
