import Vue from 'vue'
import VueForm from 'vue-form'

var options = {
    validators: {
        'no-espacios': function(value){
            return value.indexOf(' ') < 0
        }
    }
}

 Vue.use(VueForm)

 export default options