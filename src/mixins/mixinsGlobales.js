import Vue from 'vue'
import { urlUsuarios } from '../urls'

var miMixin = {
    methods: {
        mostrarConsoleLog() {
            console.log("Soy Mixin Global")
        },
        getUsuarios() {
            this.axios.get(urlUsuarios)
            .then( res => {
              console.log(res.data)
              this.$store.dispatch('getUsuarios', res.data)
              if(this.$store.state.usuarios != 0){
                this.hayUsuarios = 1  
              }else{
                this.hayUsuarios = 2
              }          
            })
            .catch(error => {
              console.log('ERROR GET HTTP', error)
    
            })
        }
    },
    computed: {
        mostrarCantUsuarios() {
            return this.$store.state.usuarios.length;
        }
    }
}

Vue.mixin(miMixin)