import Vue from 'vue';
import Vuex from 'vuex';
import dataTpl from '@/models/dataExample'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    list: []
  },
  mutations: {
    setList(state, list) {
      state.list = list
    }
  },
  actions: {
    fetchList({ commit }, params: { mail: string, password: string }): Promise<void> {
      return new Promise<void>((resolve) => {
        console.log(params)
        setTimeout(() => {
          commit('setList', dataTpl)
          resolve();
        }, 400)
      })
    }
  },
  modules: {
  },
});
