<template>
    <div >
        <div class="column is-12-mobile is-12-desktop is-4-tablet" v-for="contacto in contacts" :key="contacto.id" >
           
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
              </div>
            </div>
          </div>
          <hr>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        contacts:Array
    }
}
</script>