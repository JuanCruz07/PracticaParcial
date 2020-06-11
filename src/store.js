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
        },
        actualizar({commit}){
            commit('actualizar')
        },
        postUsuario({commit}, usuario){
            commit('post', usuario)
        }
    },
    mutations: {
        getUsuariosMutacion(state, listaUsuariosMutacion){
            console.log("estoy haciendo get")
            state.usuarios = listaUsuariosMutacion

        },
        borrarUsuariosMutacion(state, id){
            let offset = state.usuarios.findIndex(usuario => usuario.id == id)
            state.usuarios.splice(offset, 1)

        },
        post(state, usuario){
            state.usuarios.push(usuario)
            console.log("estoy haciendo post")
        }
    }
})