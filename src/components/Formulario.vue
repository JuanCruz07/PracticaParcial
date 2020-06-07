<template>
  <section class="src-components-formulario">
    <div class="jumbotron m-3">
      <h1>Alta de Usuario</h1>
      <hr />
      <vue-form :state="formState" @submit.prevent="enviar()">

        <validate tag="div">
          <label for="nombre" class="mt-3">Nombre</label>
          <input
            type="text"
            class="form-control"
            id="nombre"
            name="nombre"
            autocomplete="off"
            v-model.trim="formData.nombre"
            :maxlength="nombreChrMax"
            :minlength="nombreChrMin"
            required
          />

          <field-messages name="nombre" show="$dirty">
            <!-- <div class="alert alert-success my-1">Campo correcto</div> -->
            <div slot="required" class="alert alert-danger my-1">Campo nombre requerido</div>            
            <div slot="minlength" class="alert alert-danger my-1">Se deben ingresar como mínimo {{nombreChrMin}} caracteres</div>
            <div v-if="formData.nombre.length == nombreChrMax" class="alert alert-danger my-1">Máximo de caracteres alcanzados ({{nombreChrMax}})</div>
          </field-messages>
        </validate>

        <validate tag="div">
          <label for="apellido" class="mt-3">Apellido</label>
          <input
            type="text"
            class="form-control"
            id="apellido"
            name="apellido"
            autocomplete="off"
            v-model.trim="formData.apellido"
            required
          />

          <field-messages name="apellido" show="$dirty">      
            <div slot="required" class="alert alert-danger my-1">Campo apellido requerido</div>
          </field-messages>

        </validate>

        <validate tag="div">
          <label for="edad" class="mt-3">Edad</label>
          <input
            type="number"
            class="form-control"
            id="edad"
            name="edad"
            autocomplete="off"
            v-model.trim="formData.edad"
            :min="edadMin"
            :max="edadMax"
            required
          />

          <field-messages name="edad" show="$dirty">
            <div slot="required" class="alert alert-danger my-1">Campo edad requerido</div>
            <div slot="min" class="alert alert-danger my-1">La edad minima es de {{edadMin}} años</div>
            <div slot="max" class="alert alert-danger my-1">La edad máxima es de {{edadMax}} años</div>
          </field-messages>
        </validate>

        <validate tag="div">
          <label for="email" class="mt-3">Correo Electrónico</label>
          <input
            type="email"
            class="form-control"
            id="email"
            name="email"
            autocomplete="off"
            v-model="formData.email"            
            required
          />

          <field-messages name="email" show="$dirty">
            <div slot="required" class="alert alert-danger my-1">Campo Correo Electrónico requerido</div>
            <div slot="email" class="alert alert-danger my-1">Correo Electrónico no válido</div>
          </field-messages>
        </validate>

      <br>


        <button class="btn btn-success mt-3" type="submit" :disabled="formState.$invalid">Agregar Usuario</button>

      </vue-form>
    </div>
  </section>
</template>

<script lang="js">

  import { urlUsuarios } from '../urls'

  export default  {
    name: 'src-components-formulario',
    props: [],
    mounted () {

    },
    data () {
      return {
        formState: {},
        formData: this.getDatosIniciales(),
        nombreChrMin: 5,
        nombreChrMax: 15,
        edadMin: 18,
        edadMax: 120

      }
    },
    methods: {
      getDatosIniciales(){
        return {
          nombre: '',
          apellido: '',
          edad: '',
          email: ''
        }
      },

      enviar() {
        console.log(this.formData)
        this.axios.post(urlUsuarios, this.formData, {
          'content-type' : 'application/json'
        })
        .then( res => {
          console.log(res.data)
          this.formData = this.getDatosIniciales()
          this.formState._reset()
        })
        .catch(error => {
          console.log('ERROR POST', error)
        })
      }

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
.src-components-formulario {
}
</style>
