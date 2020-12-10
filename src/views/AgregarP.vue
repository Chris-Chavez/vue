<template>
 <div>
      <h1>Agregar Peliculas</h1>
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
import { mapActions } from 'vuex';
import Input from '../components/Input'

export default {
    name: 'AgregarPelicula',
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
            }
        },
    
    methods: {
        ...mapActions(['crearPelicula']),
        guardarPelicula() {
                    if(this.validacionNombre){
                        this.erroresValidacion =false
                    console.log(this.Pelicula);
                    this.crearPelicula({
                        params: this.Pelicula,
                        onComplete: (response) => {
                            console.log(response)
                            this.$router.push({
                                name: 'peliculas'
                            })
                        },
                        onError: (error) =>{
                            this.$notify({
                            type: 'error',
                            title: error.response.data.mensaje,
                            });
                        }
                    })
                } else {
                this.erroresValidacion = true
            }
        }
    }

}
</script>

<style>

</style>