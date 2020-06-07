import Vue from 'vue'

Vue.filter('pasarPrimerLetraMayus', function(value) {
    return value.charAt(0).toUpperCase() + value.substr(1)
})

Vue.filter('pasarMinuscula', function(value) {
    return value.toLowerCase()
})