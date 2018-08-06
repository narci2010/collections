import { makeConstCreator, assignStoreState } from '@/utils/tools'
import { testIndexedDBAbility } from '@/services/api';

const makeConst = makeConstCreator('base')

// getters
export const indexedDBAbility = makeConst('indexedDBAbility')
export const funs = makeConst('funs')
// mutations
export const TEST_ABILITY = makeConst('TEST_ABILITY')
// actions
export const init = makeConst('init')

export default {
  state: {
    indexedDBAbility: false,
    funs: [
      { title: 'Home', key: 'home', icon: 'icon-home', path: '/' },
      { title: 'TODO', key: 'todo', icon: 'icon-todo_list', path: '/todo' }
    ]
  },

  getters: {
    [indexedDBAbility]: (state: any) => state.indexedDBAbility,
    [funs]: (state: any) => state.funs,
  },

  mutations: {
    [TEST_ABILITY](state: any, payload: boolean) {
      assignStoreState(state, { indexedDBAbility: payload })
    }
  },

  actions: {
    [init]({ commit, state }: any) {
      const ability = testIndexedDBAbility();
      commit(TEST_ABILITY, ability);
    }
  }
}
