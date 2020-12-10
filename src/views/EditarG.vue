<template>
 <div>
      <h1>Editar Generos</h1>
   <b-form @submit.prevent="guardarGenero">
       
    <Input
    v-model="genero.Genero"
    id="genero"
    placeholder="Ingrese nombre del Género"
    mensajeError="El nombre es obligatorio"
    :error="erroresValidacion && !validacionNombre"
    class="mb-2"
          />
    <b-button type="submit" variant="success" class="float-right mt-3">Guardar</b-button>
    </b-form>
 </div>
</template>

<script>
import Vue from 'vue'
import Input from '../components/Input'
import { mapActions } from 'vuex'
export default {
  name: 'EditarG',
  components: {
        Input
    },
    data() {
        return{
            genero: {
                Genero: '',
            },
            erroresValidacion: false
        }
    },
        computed: {
            validacionNombre(){
                return(
                    this.genero.Genero !==undefined &&
                    this.genero.Genero.trim() !==''
                )
            }
        },
    
    methods: {
        ...mapActions(['obtenerGenero', 'editarGenero']),
        guardarGenero() {
            if(this.validacionNombre) {
                this.erroresValidacion = false
                console.log(this.genero);
               //Editar persona
              this.editarGenero({
                id: this.genero.Id,
                params: this.genero,
                onComplete: (response) => {
                  this.$router.push({
                    name: 'Generos'
                  });
                },
                onError: (error) => {
                  console.log(error)
                  this.$notify({
                    type: 'error',
                    title: error.response.data.mensaje,
                  })
                }
              })
            } else {
                this.erroresValidacion = true
            }
        }
    },
    created(){
      this.obtenerGenero({
        id: this.$route.params.id,
        onComplete: (response) => {
            console.log("info", response.data.data[0])
            Vue.set(this, 'genero', response.data.data[0])
        }
      })
    }
}
</script>

<style>
</style>