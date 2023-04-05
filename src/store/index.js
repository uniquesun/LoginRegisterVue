import Vue from 'vue'
import Vuex from 'vuex'
import localforage from 'localforage'
import { isEmpty } from 'lodash'

Vue.use(Vuex)

const userTokenStorageKey = 'APP_USER_TOKEN'
const userStorageKey = 'APP_USER'

const state = {
  token: '',
  user: {},
}

const getters = {
    isLogged () {
        return !isEmpty(state.token)
    }
}

const mutations = {
  UPDATE_TOKEN(state, token) {
    state.token = token
    localforage.setItem(userTokenStorageKey, token)
  },
  UPDATE_USER(state, user) {
    state.user = user
    localforage.setItem(userStorageKey,user)
  }
}

const actions = {
  update_token(context, token) {
    context.commit('UPDATE_TOKEN', token)
  },
  check_auth(context) {

    // set user
    localforage
    .getItem(userStorageKey)
    .then(user => {
      if (!isEmpty(user)) {
        context.commit('UPDATE_USER', user)
      }
    })

    // set token
    if (!isEmpty(state.token)) {
      return Promise.resolve(state.token)
    }
    return (
      localforage
        .getItem(userTokenStorageKey)
        .then(token => {
          if (isEmpty(token)) {
            return Promise.reject('NO_TOKEN')
          }
          return context.commit('UPDATE_TOKEN', token)
        })
    )
  },
  update_user(context, user) {
    context.commit('UPDATE_USER', user)
  }
}

const modules = {}


export default new Vuex.Store({
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions,
  modules: modules
})
