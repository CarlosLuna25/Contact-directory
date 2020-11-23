<template>
  <div class="about">
    <info/>
  </div>
</template>

<script>
import info from "@/components/about/info"

export default {
  components:{
    info
  
  }
}
</script>
<style scoped>
 .bg-img { 
        background-image: url('../assets/images/about.jpg') ;
        background-position: center center;
        background-repeat:  no-repeat;
        background-attachment: fixed;
        background-size:  cover;
        background-color: rgba(8, 8, 8, 0.863);
        width: 100%;
        height: 100%;
        

 }
</style>
