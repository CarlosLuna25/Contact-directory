<template>
   <div class="card p-5">
       <div class="card-header">
           Editar Imagen
       </div>
        <file-pond
        :server="{process}"
        label-idle="Arrastrar imagen aquí..."
        labelFileAdded = "Archivo Añadido"
        />

   </div>
</template>

<script>
import vueFilePond from 'vue-filepond';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.esm.js';
import 'filepond/dist/filepond.min.css';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';

// Create component
const FilePond = vueFilePond(FilePondPluginImagePreview);

import axios from "axios"
export default {
    props:{
        contact:Number
    },
    data(){
        
        return{

        }
    },
    
    components: {
        FilePond
    },

    methods:{
                success() {
                this.$buefy.toast.open({
                    message: 'Imagen  Actualizada! ',
                    type: 'is-success'
                })
            },
      danger() {
                this.$buefy.toast.open({
                    duration: 5000,
                    message: `algo ha ido mal `,
                  
                    type: 'is-danger'
                })
            },
         process(fieldName, file, metadata, load, error,abort) {
                let formdata = new FormData();
                formdata.append('photo',file);
                abort();
                
                axios.post(process.env.VUE_APP_server+'upload/'+this.contact,formdata, {
            headers: {
              Authorization: process.env.VUE_APP_authorization,
            },
          }).then((response) => {
                   let data=response;
                    this.success();
                    setTimeout(4000);
                    this.$emit('imageUp');
                    console.log(data)
                }).catch(e =>  {
                    console.log(e);
                   this.danger();
                }); 
            },
    }
    
}
</script>