<template>
  <div>
    <div class="container mt-4 p-3">
      <div class="card p-5">
        <div class="columns is-centered">
          <!-- input name -->
          <div class="column is-4">
            <div class="field">
              <label class="label">Nombre</label>
              <div class="control has-icons-left ">
                <input
                  class="input is-success"
                  type="text"
                  placeholder="nombre"
                  v-model="name"
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-user"></i>
                </span>
              </div>
            </div>
          </div>
          <!-- input email -->
          <div class="column is-4">
            <div class="field">
              <label class="label">Email</label>
              <div class="control has-icons-left ">
                <input
                  class="input is-success"
                  type="email"
                  placeholder="email"
                  v-model="email"
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-user"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
        <!-- fin columns -->
        <div class="columns is-centered">
          <!-- input name -->
          <div class="column is-4">
            <div class="field">
              <label class="label">numero de telefono</label>
              <div class="control has-icons-left ">
                <input
                  class="input is-success"
                  type="text"
                  placeholder="Text input"
                  v-model="phone"
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-user"></i>
                </span>
              </div>
            </div>
          </div>
          <!-- input email -->
          <div class="column is-4">
            <div class="field">
              <label class="label">Direccion</label>
              <div class="control">
                <textarea
                  v-model="direction"
                  class="textarea"
                  placeholder="Direccion del contacto"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        <!-- fin columns -->
        <div class="columns is-centered">
          <div class="column is-3">
            <button
              v-if="isFull"
              class="button is-rounded is-success ml-4 "
              @click="Agregar()"
            >
              Agregar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      informacion: true,
      name: "",
      email: "",
      phone: "",
      direction: "",
    };
  },
  computed: {
    isFull() {
      if (this.name.length >= 3 && this.email.length >= 6 && this.phone.length >= 11 && this.direction.length >= 6) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
     success() {
                this.$buefy.toast.open({
                    message: 'Contacto añadido correctamente!',
                    type: 'is-success'
                })
            },
            danger() {
                this.$buefy.toast.open({
                    duration: 5000,
                    message: `algo ha ido mal <b>Contacto Existente verifique correo y numero de telefono</b>`,
                  
                    type: 'is-danger'
                })
            },
    async Agregar() {
      await axios
        .post(
          process.env.VUE_APP_server + "add",
          {
            name: this.name,
            email: this.email,
            phone: this.phone,
            direction: this.direction,
          },
          {
            headers: {
              Authorization: process.env.VUE_APP_authorization,
            },
          }
        )
        .then((response) => {
          const data = response;
          if (data.data.success==true) {
            this.success();
            setTimeout(4000);
            window.location.href = '/'
          }
          console.log(data);
        })
        .catch((e) => {
          this.danger();
          console.log(e);
          console.log(e.data)
        });
    },
  },
};
</script>
