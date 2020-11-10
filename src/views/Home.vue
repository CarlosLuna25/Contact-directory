<template>
<div class="container">
  <div class="title notification is-success">
   Contact Directory
  </div>
  <div v-for="contacto in contactos" :key="contacto.id">
    {{contacto.name}}
  </div>

</div>
  
</template>

<script>
// @ is an alias to /src

import axios from "axios";

export default {
 name: 'home',
data(){
  return {
    contactos: []
  }
},

 mounted(){
   this.GetContacts();
 },
 methods:{
   async GetContacts(){
     await axios.get(process.env.VUE_APP_server+'directory',{
      headers:{
              Authorization: process.env.VUE_APP_authorization
          }
    }).then((response) => {
        const data= response.data
        this.contactos= data.data

    }).catch((e) => {
                    console.log(e);
                });
    
    

   },

  
 }
 
};
</script>
