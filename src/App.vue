
<template>
  <div id="app" style="background-color:#f5f3f3;"> 
    <navbar/>
  
    
    <router-view />
 
  </div>
</template>
<script>
import navbar from "@/components/navbar/nav";
export default {
  name:'app',
  components:{
    navbar
    
  }
}
</script>

