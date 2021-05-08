import Vue from 'vue';
import Vuex from 'vuex';
import { rawListItem, rowList } from '@/models/data';

Vue.use(Vuex);

interface State {
  list: rawListItem[]
}

export default new Vuex.Store<State>({
  state: {
    list: []
  },
  mutations: {
    setList(state, list) {
      state.list = list as rawListItem[]
    }
  },
  actions: {
    fetchList({ commit }, params: { mail: string, password: string | number }): Promise<void> {
      return new Promise<void>((resolve) => {
        console.log(params)
        setTimeout(() => {
          commit('setList', rowList)
          resolve();
        }, 400)
      })
    }
  },
  modules: {
  },
});
