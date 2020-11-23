<template>
  <div>
 

    <div class="container mt-5 ml-5 ">
      <div class="columns is-centered">

                <div class="column is-3 mr-3"><h1 class="title"> <span class="has-text-success ">Contactos ({{contactos.length}})   </span> <div v-if="local"> (Lista de Vuex)</div></h1></div>
                  <div class="column is-2 mt-1"><button @click="addModal=true" class="button is-mediun is-success">Añadir contacto</button></div>
                
      </div>
      <div class="columns is-centered"> 
                    <div class="column is-3"> 
                      <div class="card p-2">
                       <span class="mr-3">Buscar contacto </span>
                       <input type="text" v-model="buscar" class="form-control" placeholder="Ejemplo: pedro"/>    </div>
                         <div class="field">
                          <b-switch v-model="isLista">
                              Ver lista
                          </b-switch>
                         </div>
       
                      </div>

      </div>
      <div
        class="columns is-mobile is-desktop is-tablet is-multiline is-centered"

      >
                       
         <b-loading :is-full-page="false"  v-model="isLoading" ></b-loading>
        <div class="column is-12-mobile is-9-desktop is-4-tablet" v-if="!isLista" >
           
          <Contacts :contactos="items"/>
          
        </div>
        <div class="column is-12-mobile is-9-desktop is-4-tablet" v-else>
           
          <List :contacts="items"/>
          
        </div>
      </div>
    </div>
<!-- modales de editar y crear nuevo Contacto -->
<b-modal v-model="addModal">
          <add/>
</b-modal>



  </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from "vuex";
import axios from "axios";
import add from "@/views/contact/add";

import Contacts from '../components/home/Carousel.vue';
import List from "@/components/home/List";

export default {
  name: "home",
  data() {
    return {
      local:false,
      buscar:'',
      contactos: [],
      isLoading:false,
      addModal:false,
      isLista:false,
    
    };
  },
  components:{
    add, 
    Contacts, List
  },

  mounted() {
    this.GetContacts();
  },
  methods: {
      openLoading() {
                this.isLoading = true
               
            },
      closeLoading(){
        this.isLoading=false
      },
    async GetContacts() {
      this.openLoading();
      await axios
        .get(process.env.VUE_APP_server + "directory", {
          headers: {
            Authorization: process.env.VUE_APP_authorization,
          },
        })
        .then((response) => {
          const data = response.data;
          this.contactos = data.data;
          console.log(this.contactos);
          this.closeLoading()
        })
        .catch((e) => {
          console.log(e);
          this.contactos=this.contactosLocal;
          this.local=true
           this.closeLoading()
        });
    },
  },
  computed: {
    items() {
      return this.contactos.filter(item => {
        return item.name.toLowerCase().includes(this.buscar.toLowerCase()) || item.email.toLowerCase().includes(this.buscar.toLowerCase());
      });
    },
    ...mapState(['contactosLocal'])
    },
}
</script>
<style scoped>
.color {
  background-color: #a3d2c8;
}
.card{
 overflow: hidden!important;
}
</style>
