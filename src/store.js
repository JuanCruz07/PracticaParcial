import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        usuarios: []
    },
    actions: {
        getUsuarios({commit}, listaUsuarios){
            commit('getUsuariosMutacion', listaUsuarios)
        },
        borrarUsuarios({commit}, id){
            commit('borrarUsuariosMutacion', id)
        }
    },
    mutations: {
        getUsuariosMutacion(state, listaUsuariosMutacion){
            state.usuarios = listaUsuariosMutacion
        },
        borrarUsuariosMutacion(state, id){
            let offset = state.usuarios.findIndex(usuario => usuario.id == id)
            state.usuarios.splice(offset, 1)
        }
    }
})