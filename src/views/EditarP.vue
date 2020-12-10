<template>
 <div>
      <h1>Editar Peliculas</h1>
   <b-form @submit.prevent="guardarPelicula">
    <Input
    v-model="Pelicula.Titulo"
    id="titulo"
    placeholder="Ingrese nombre del titulo"
    mensajeError="El titulo es obligatorio"
    :error="erroresValidacion && !validacionNombre"
    class="mb-2"
          />
          <Input
    v-model="Pelicula.Director"
    id="director"
    placeholder="Ingrese nombre del director"
    mensajeError="El director es obligatorio"
    :error="erroresValidacion && !validacionNombre"
    class="mb-2"
          />
          <Input
    v-model="Pelicula.Año"
    id="año"
    placeholder="Ingrese año"
    mensajeError="El año es obligatorio"
    :error="erroresValidacion && !validacionNombre"
    class="mb-2"
          />
          <Input
    v-model="Pelicula.Genero"
    id="Genero"
    placeholder="Ingrese Género"
    mensajeError="El Genero es obligatorio"
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
  name: 'EditarP',
  components: {
        Input
    },
    data() {
        return{
            Pelicula: {
                Titulo:'',
                Director: '',
                Año: '',
                Genero: '',
            },
            erroresValidacion: false
        }
    },
    computed: {
        validacionNombre(){
            return(
                this.Pelicula.Titulo !==undefined &&
                this.Pelicula.Titulo.trim() !==''
            )
        },
        validacionDirector(){
            return(
                this.Pelicula.Director !==undefined &&
                this.Pelicula.Director.trim() !==''
            )
        },
        validacionAño(){
            return(
               this.Pelicula.Año.length != 4
            )
        },
    },
    methods: {
        ...mapActions(['obtenerPelicula', 'editarPelicula']),
        guardarPelicula() {
            if(this.validacionNombre) {
                this.erroresValidacion = false
                console.log(this.Pelicula);
               //Editar persona
              this.editarPelicula({
                id: this.Pelicula.Id,
                params: this.Pelicula,
                onComplete: (response) => {
                  this.$router.push({
                    name: 'peliculas'
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
      this.obtenerPelicula({
        id: this.$route.params.id,
        onComplete: (response) => {
            console.log("info", response.data.data[0])
            Vue.set(this, 'Pelicula', response.data.data[0])
        }
      })
    }
}
</script>

<style>
</style>