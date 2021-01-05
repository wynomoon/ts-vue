import { createStore } from 'vuex'

// define your typings for the store state
export interface State {
  count: number
}

// define injection key
export const store = createStore<State>({
  state: {
    count: 20
  },
  mutations: {},
  actions: {},
  modules: {}
})
