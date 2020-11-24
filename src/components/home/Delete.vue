<template>
  <div class="columns is-centered">
    <div class="column is-8">
      <div class="card">
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-96x96">
                <img
                
                  :src="contact.photo_path!==null ? contact.photo_path : require('@/assets/images/logo.png') "
                  alt="Placeholder image"
                />
              </figure>
            </div>
            <div class="media-right">
              <p class="title has-text-dark is-4">{{contact.name}}</p>
              <p class="subtitle has-text-dark is-6">{{contact.email}}</p>
              <p class="subtitle has-text-dark is-6">{{contact.phone}}</p>
            </div>
          </div>
          <div class="content">
               <div class="field is-grouped">
               
                <p class="control" style="margin-left: auto">
                    <button class=" mr-2 button is-medium is-success " @click="close()">
                    Cancelar
                  </button>
                  <button class="button is-medium is-danger " @click="Delete(contact.id)">
                    <b-icon size="is-small" icon="delete"  />
                  </button>
                </p>
              </div>
          </div>
        </div>

      </div>
      
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: {
    contact: Object,
  },
  methods: {
      close(){
         this.$emit('confirm'); 
      },
    success() {
      this.$buefy.toast.open({
        message: "Contacto Eliminado correctamente!",
        type: "is-success",
      });
    },
    danger() {
      this.$buefy.toast.open({
        duration: 5000,
        message: `algo ha ido mal <b>Contacto Existente verifique correo y numero de telefono</b>`,

        type: "is-danger",
      });
    },

    async Delete(id) {
      await axios
        .delete(process.env.VUE_APP_server + "delete/" + id, {
          headers: {
            Authorization: process.env.VUE_APP_authorization,
          },
        })
        .then((response) => {
          const data = response;
          if (data.data.success == true) {
            this.success();
            setTimeout(4000);
            
            window.location.href = "/";
          }
          console.log(data);
        })
        .catch((e) => {
          this.danger();
          console.log(e);
          console.log(e.data);
        });
    },
  },
};
</script>

