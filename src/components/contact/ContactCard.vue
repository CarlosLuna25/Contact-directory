<template>
    <div class="card p-3 mb-3">
       <div class="box">
            <img :src="contact.photo_path!==null ? contact.photo_path : require('@/assets/images/logo.png') " alt="">

       </div>
       <div class="clearfix">           
       </div>
     <div class="info">
         <div class="title has-text-black"> <b-icon class="mt-2" type="is-info" icon="account-circle"
              size="is-medium"  ></b-icon> {{contact.name}}</div>
         <div class="subtitle has-text-black mt-2">
             <b-icon type="is-info" icon="email-multiple"></b-icon>
             {{contact.email}}
        </div>
        <div class="subtitle has-text-black mt-2">
             <b-icon type="is-info" icon="cellphone-android"></b-icon>
             {{contact.phone}}
        </div>
        <div class="subtitle-location  has-text-black mt-2">
             <b-icon type="is-info" icon="city"></b-icon>
             {{contact.direction}}
        </div>
     </div>
        
    </div>
</template>



<script>
export default {
    props:{
        contact:Object
    }
}
</script>

<style  scoped>

.info{

    float: left;
    width: 70%;
    
}
.info .title, .subtitle, .subtitle-location{
    font-size: 30px;
    margin-left: 15%;
}
.subtitle{
    font-size: 20px;
}
.subtitle-location{
    font-size: 15px
}
.box{
    min-height: 30%;
    min-width: 30%;
    max-width: 30%;
    max-height: 30%;
    height: 30%;
    width: 30%;
    float: left;
}
    .box img{
  width: 100%;
 height: auto;
}
@supports(object-fit: cover){
    .box img{
      height: 100%;
      object-fit: cover;
      object-position: center center;
    }
}


</style>