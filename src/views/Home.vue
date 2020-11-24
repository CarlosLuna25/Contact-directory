<template>
  <div>
    <section class="hero is-primary is-large bg-img p-6">
      <!-- Hero head: will stick at the top -->
      <div class="columns">
        <div class="column is-5 is-offset-7">
          <span class="has-text-success title "
            >Contactos ({{ contactos.length }})
          </span>
          <br />
          <span class="mr-3 mt-2">Buscar contacto </span>
          <input
            type="text"
            v-model="buscar"
            class="form-control mt-2"
            placeholder="Ejemplo: pedro"
          />
        </div>
      </div>
      <div class="columns  is-centered">
        <div class="column is-5" v-if="mostrarContact">
           <ContactCard  :contact="contactView" />
           <button @click="addModal = true" class="button is-success">
            Agregar nuevo Contacto
          </button>
        </div>
        <div class="column is-2 " v-else>
         

          <img src="@/assets/images/contacts.svg" width="100%" alt="" />
          <br>
          <button @click="addModal = true" class="button is-success">
            Agregar nuevo Contacto
          </button>
        </div>
        <!-- Hero content: will be in the middle -->

        <div class="column is-6 has-text-centered">
          <div class="card-contacts">
            <Contacts @EnviarContacto="AsignarContacto" :contactos="items" />
            <b-loading
              :is-full-page="isFullPage"
              v-model="isLoading"
              :can-cancel="true"
            >
              <b-icon
                pack="fas"
                icon="sync-alt"
                size="is-large"
                custom-class="fa-spin"
              >
              </b-icon>
            </b-loading>
            <div class="card-title"></div>
          </div>
        </div>
      </div>

      <!-- Hero footer: will stick at the bottom -->
      <div class="columns ">
        <div class="column is-6 ">
          <div class="hero-foot has-text-centered">
            <nav class="tabs">
              <div class="container"></div>
            </nav>
          </div>
        </div>
      </div>
    </section>

    <!-- modales de editar y crear nuevo Contacto -->
    <b-modal v-model="addModal">
      <add />
    </b-modal>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from "vuex";
import axios from "axios";
import add from "@/views/contact/add";

import Contacts from "../components/home/Carousel.vue";
import ContactCard from "../components/contact/ContactCard.vue";
//import List from "@/components/home/List";

export default {
  name: "home",
  data() {
    return {
      local: false,
      buscar: "",
      mostrarContact: false,
      contactos: [],
      isLoading: false,
      addModal: false,
      isLista: false,
      isFullPage: false,
      contactView: [],
    };
  },
  components: {
    add,
    Contacts,
    ContactCard, //List
  },

  mounted() {
    this.GetContacts();
  },
  methods: {
    AsignarContacto(value) {
      this.mostrarContact=true;
      this.contactView = value;
    },
    openLoading() {
      this.isLoading = true;
    },
    closeLoading() {
      this.isLoading = false;
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
          this.closeLoading();
        })
        .catch((e) => {
          console.log(e);
          this.contactos = this.contactosLocal;
          this.local = true;
          this.closeLoading();
        });
    },
  },
  computed: {
    items() {
      return this.contactos.filter((item) => {
        return (
          item.name.toLowerCase().includes(this.buscar.toLowerCase()) ||
          item.email.toLowerCase().includes(this.buscar.toLowerCase())
        );
      });
    },
    ...mapState(["contactosLocal"]),
  },
};
</script>
<style scoped>
.color {
  background-color: #a3d2c8;
}
.card {
  overflow: hidden !important;
}
.bg-img {
  background-image: url("../assets/images/homeBG.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-color: rgba(8, 8, 8, 0.863);
  width: 100%;
  height: 100%;
}
.card-contacts {
  float: left;
  background-color: lavender;
  width: 105%;
  margin-right: 10%;

  height: 100%;
  border-radius: 5px;
  overflow: auto;
  max-height: 100%;
}
</style>
