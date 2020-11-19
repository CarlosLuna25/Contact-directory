<template>
   <div class="card-list">
      <div class="card mb-5" >
        <div class=" column is-12-mobile is-12-desktop is-4-tablet" v-for="contacto in contacts" :key="contacto.id" >
           
          <div class="card  card-color-dark mt-2 " >
            <div class="card-content is-centered">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img
                     :src="contacto.photo_path!==null ? contacto.photo_path : require('@/assets/images/logo.png') "
                      :alt="contacto.name"
                    />
                  </figure>
                </div>
                <div class="media-content is-centered ">
                  <p class="title is-4" >Nombre: {{contacto.name}}</p>
                  <p class="subtitle is-6">Telefono: {{contacto.phone}}</p>
                  <p class="subtitle is-6">Email: {{contacto.email}}</p>
                  
                  <p class="subtitle is-6">Direccion: {{contacto.direction}}</p>
                </div>
                <div class="field is-grouped">
                <p class="control">
                  <button class="button is-medium is-warning " @click="edit(contacto.id)">
                    <b-icon size="is-small" icon="account-edit" />
                  </button>
                </p>
                <p class="control" style="margin-left: auto">
                  <button class="button is-medium is-danger " @click="Delete(contacto)">
                    <b-icon size="is-small" icon="delete"  />
                  </button>
                </p>
              </div>
              </div>
            </div>
          </div>
          <hr>
        </div>
    </div>
    <div class="clearfix"></div>
    <b-modal v-model="modalEdit">
          <edit :id="editid" />
    </b-modal>
      <b-modal v-model="modalConfirm">
          <Delete v-on:confirm="Cerrar()" :contact="contactDelete" />
    </b-modal>
   </div>  
</template>
<script>
import edit from '../../views/contact/edit.vue';
import Delete from "@/components/home/Delete";

export default {
  components: { edit, Delete },
    props:{

        contacts:Array
    },

    data(){
      return{
        editid:null,
        modalEdit:false,
        contactDelete:[],
        modalConfirm:false,
      }
    },
    methods:{
      edit(id){
        this.editid=id,
        this.modalEdit=true
      },
      Delete(contact){
        this.contactDelete=contact;
        this.modalConfirm=true;
      },
      Cerrar(){
        this.modalConfirm=false
      }
    }

  
}
</script>

<style  scoped>
.clearfix{
  clear: both;
}


</style>