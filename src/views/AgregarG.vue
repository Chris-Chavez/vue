<template>
 <div>
      <h1>Agregar Generos</h1>
   <b-form @submit.prevent="guardarPersona">
       
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
import { mapActions } from 'vuex';
import Input from '../components/Input'

export default {
    name: 'Agregar',
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
        ...mapActions(['crearGenero']),
        guardarPersona() {
                    if(this.validacionNombre){
                        this.erroresValidacion =false
                    console.log(this.genero);
                    this.crearGenero({
                        params: this.genero,
                        onComplete: (response) => {
                            console.log(response)
                            this.$notify({
                            type: 'success',
                            title: response.data.mensaje,
                            });
                            this.$router.push({
                                name: 'Home'
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