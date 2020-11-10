<template>
  <div>
    <div class="hero is-dark is-gradient is-bold ">
      <div class="hero-body">
        <h1 class="title">
          <span class="has-text-success">Contact</span>
          <span class="has-text-white"> Directory</span>
        </h1>
      </div>
    </div>

    <div class="container mt-5">
      <h1 class="title ml-5">
        <span class="has-text-success">Contactos</span>
      </h1>
      <div
        class="columns is-mobile is-desktop is-tablet is-multiline is-centered"
      >
        <div class="column is-12-mobile is-6-desktop is-4-tablet">
          <div class="card card-color-dark mt-2" v-for="contacto in contactos" :key="contacto.id">
            <div class="card-content is-centered">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img
                      src="https://bulma.io/images/placeholders/96x96.png"
                      alt="Placeholder image"
                    />
                  </figure>
                </div>
                <div class="media-content is-centered">
                  <p class="title is-4">{{contacto.name}}</p>
                  <p class="subtitle is-6">{{contacto.phone}}</p>
                  <p class="subtitle is-6">{{contacto.direction}}</p>
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
</style>
