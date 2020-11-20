
<template>
    <div>
    <div class="container mt-4 p-3">
      <div class="card p-5 ml-6">
        <div class="card-content">
          <div class="media">
            <div class="media-left">
                <figure class="image is-96x96 pointer" @click="image()" @mouseleave="overlay=false" 
                 >
                  <div class="is-overlay " v-if="overlay">
                    <span class="tag is-primary">Click para cambiar la imagen</span>
                  </div>
                <img
                  @mouseover="overlay=true"
                  
                  
                  :src="contact.photo_path!==null ? contact.photo_path : require('@/assets/images/logo.png') "
                  alt="Placeholder image"
                />
              </figure>
            </div>
            <div class="media-right ml-6">
        <div class="columns is-centered">
          <!-- input name -->
          <div class="column is-5">
            <div class="field">
              <label class="label">Nombre</label>
              <div class="control has-icons-left ">
                <input
                  class="input is-success"
                  type="text"
                  placeholder="nombre"
                  v-model="contact.name"
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-user"></i>
                </span>
              </div>
            </div>
          </div>
          <!-- input email -->
          <div class="column is-5">
            <div class="field">
              <label class="label">Email</label>
              <div class="control has-icons-left ">
                <input
                  class="input is-success"
                  type="email"
                  placeholder="email"
                  v-model="contact.email"

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
          <div class="column is-5">
            <div class="field">
              <label class="label">numero de telefono</label>
              <div class="control has-icons-left ">
                <input
                  class="input is-success"
                  type="text"
                  placeholder="Text input"
                  v-model="contact.phone"
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-user"></i>
                </span>
              </div>
            </div>
          </div>
          <!-- input email -->
          <div class="column is-5">
            <div class="field">
              <label class="label">Direccion</label>
              <div class="control">
                <textarea
                  v-model="contact.direction"
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
              @click="UpdateContact()"
            >
              Actualizar
            </button>
          </div>
        </div>
            </div>
          </div>

        </div>
       
      </div>
    </div>
   <!--  modal de editar imagen -->
   <b-modal v-model="modalImage">
          <imagen v-on:imageUp="closeImage()"  :contact="contact.id" />
    </b-modal>
    </div>
</template>

<script>
import axios from "axios";
import imagen from "@/components/contact/Image";
export default {
    props:{
        id:null
    },
    components:{
      imagen
    },
    data(){
        return{
            contact:[],
            isLoading:false,
            modalImage:false,
            overlay:false,
            
        }
    },
    methods:{
      closeImage(){
        this.getContacto();
        this.modalImage=false;
      },
      image(){
        this.modalImage=true;
      },
        success() {
                this.$buefy.toast.open({
                    message: 'Contacto Actualizado correctamente!',
                    type: 'is-success'
                })
            },
      danger() {
                this.$buefy.toast.open({
                    duration: 5000,
                    message: `algo ha ido mal <b>Contacto verifique correo y numero de telefono</b>`,
                  
                    type: 'is-danger'
                })
            },
       async getContacto(){
            await axios
        .get(process.env.VUE_APP_server + "directory/"+this.id, {
          headers: {
            Authorization: process.env.VUE_APP_authorization,
          },
        }).then((response) => {
          const data = response.data;
          this.contact = data.data;
          console.log(this.contact);
         
        }).catch((e)=>{
            console.log(e)
        })
        }, //fin de funcion

        async UpdateContact(){
            await axios.put(process.env.VUE_APP_server+'update',
                      {
            id: this.contact.id,
            name: this.contact.name,
            email: this.contact.email,
            phone: this.contact.phone,
            direction: this.contact.direction,
          },
          {
            headers: {
              Authorization: process.env.VUE_APP_authorization,
            },
          }
            ).then((response) => {
          const data = response;
          if (data.data.success==true) {
            this.success();
            setTimeout(4000);
            window.location.href = '/'
          }
          console.log(data);
        }).catch((e) => {
          this.danger();
          console.log(e);
          console.log(e.data)
        });
        },
    
    },
      computed: {
    isFull() {
      if (this.contact.name.length >= 3 && this.contact.email.length >= 6 && this.contact.phone.length >= 11 && this.contact.direction.length >= 6) {
        return true;
      } else {
        return false;
      }
    },
  },
    mounted(){
        this.getContacto()
    }
}
</script>
<style  scoped>
.pointer{
  cursor: pointer;
}
</style>
