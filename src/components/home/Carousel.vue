<template>
  <div>
    <b-carousel-list :data="contactos" :items-to-show="4">
      <template slot="item" slot-scope="list" class="carousel">
        <div class="card  has-text-black">
          <div class="card-image">
            <figure class="image is-5by4">
              <a><img :src="list.photo_path!==null ? list.photo_path : require('@/assets/images/logo.png') "
                      :alt="list.name"/></a>
            </figure>
          </div>
          <div class="card-content">
            <div class="content">
              <p class="title is-6 has-text-centered has-text-black">{{ list.name }}</p>
              <p class="subtitle is-small-text mt-1 has-text-black">
                 {{ list.email }}
              </p>
              
              <div class="field is-grouped">
                <p class="control">
                  <button class="button is-medium is-warning " @click="edit(list.id) "  >
                    <b-icon size="is-small" icon="account-edit"  />
                  </button>
                </p>
                <p class="control" style="margin-left: auto">
                  <button class="button is-medium is-danger " @click="Delete(list)">
                    <b-icon size="is-small" icon="delete" />
                  </button>
                </p>
              </div>
            </div>
          </div>
       
        </div>
      </template>
    </b-carousel-list>
       <b-modal v-model="modalEdit">
          <edit :id="editid" />
         </b-modal>
         <b-modal v-model="modalConfirm">
          <Delete v-on:confirm="Cerrar()" :contact="contactDelete" />
    </b-modal>
  </div>
</template>

<script>
import edit from '../../views/contact/edit.vue'
import Delete from "@/components/home/Delete";
export default {
  
  props: {
    contactos: Array,
  },
  data(){
    return{
        editid:null,
        modalEdit:false,
        contactDelete:[],
        modalConfirm:false,
    }
  },
  components:{
    edit,Delete
  },
  methods: {
    edit(id){
        this.editid=id,
        this.modalEdit=true
      },
        Delete(contact){
        this.contactDelete=contact;
        this.modalConfirm=true;
      },
      Cerrar(){
        this.modalConfirm=false
      }
  },
 
};
</script>
<style scoped>
.is-small-text {
  font-size: 15px;
}
.carousel-slide {
  min-width: 500px !important;
  max-height: 100%!important;
  min-height: 100% !important;
}
</style>
