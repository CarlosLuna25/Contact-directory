<template>
  <div>
 

    <div class="container mt-5 ml-5 ">
      <div class="columns is-centered">

                <div class="colum is-6 mr-3"><h1 class="title"> <span class="has-text-success ">Contactos</span></h1></div>
                  <div class="colum is-6 mt-1"><button class="button is-mediun is-success">Añadir contacto</button></div>

      </div>
      <div
        class="columns is-mobile is-desktop is-tablet is-multiline is-centered"

      >
        <div class="column is-12-mobile is-6-desktop is-4-tablet" v-for="contacto in contactos" :key="contacto.id">
          <div class="card  card-color-dark mt-2 "  >
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
              </div>
            </div>
          </div>
          <hr>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import axios from "axios";

export default {
  name: "home",
  data() {
    return {
      contactos: [],
    
    };
  },

  mounted() {
    this.GetContacts();
  },
  methods: {
    async GetContacts() {
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
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>
<style scoped>
.color {
  background-color: #a3d2c8;
}
.card{
 overflow: hidden!important;
}
</style>
