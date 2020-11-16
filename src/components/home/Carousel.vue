<template>
  <div>
    <b-carousel-list :data="contactos" :items-to-show="5">
      <template slot="item" slot-scope="list" class="">
        <div class="card">
          <div class="card-image">
            <figure class="image is-5by4">
              <a><img :src="list.photo_path"/></a>
            </figure>
          </div>
          <div class="card-content">
            <div class="content">
              <p class="title is-4">{{ list.name }}</p>
              <p class="subtitle is-small-text mt-1">
                Telefono: {{ list.phone }}
              </p>
              <p class="subtitle is-small-text mt-1">
                Correo: {{ list.email }}
              </p>
              <p class="subtitle is-small-text mt-1">
                Direccion: {{ list.direction }}
              </p>
              <div class="field is-grouped">
                <p class="control">
                  <button class="button is-medium is-warning ">
                    <b-icon size="is-small" icon="account-edit" />
                  </button>
                </p>
                <p class="control" style="margin-left: auto">
                  <button class="button is-medium is-danger ">
                    <b-icon size="is-small" icon="delete" />
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </template>
    </b-carousel-list>
  </div>
</template>

<script>
export default {
  name: "contacts",
  props: {
    contactos: Array,
  },
  methods: {
    MostrarOrden() {
      console.log(
        
      );
    },
  },
  mounted(){
      this.MostrarOrden();
  }
};
</script>
<style scoped>
.is-small-text {
  font-size: 15px;
}
</style>
