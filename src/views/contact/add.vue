<template>
    <div>
      
        <div class="card">
            <label for="nombre" > Nombre de contacto </label>
            <input type="text" v-model="name" name="nombre" id="name">
            <label for="nombre" > email de contacto </label>
            <input type="text" v-model="email" name="nombre" id="name">
            <br>
             <label for="nombre" > Telefono</label>
            <input type="text" v-model="phone" name="nombre" id="name">
             <label for="nombre" > Direccion </label>
            <input type="text" v-model="direction" name="direction" id="name">
            <br>

            <button v-if="isFull" class="button is-rounded is-success " @click="Agregar()">Agregar</button>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    
    data(){
        return {
            informacion:true  ,
            name:"",
            email:"",
            phone:"",
            direction:"",
        }
    }, 
    computed:{
           isFull(){
            if(this.name.length>=3){
                return true
            }else{
                return false
            }
        },
    },
    methods:{
     
       async Agregar(){
           await axios.post(
               process.env.VUE_APP_server + "add",{
                   name:this.name,
                   email:this.email,
                   phone:this.phone,
                   direction:this.direction
               },
               {
          headers: {
            Authorization: process.env.VUE_APP_authorization,
          }}
           ).then((response) => {
          const data = response;
          console.log(data)
          }).catch((e) => {
          console.log(e);
        })
        }
    }
}
</script>