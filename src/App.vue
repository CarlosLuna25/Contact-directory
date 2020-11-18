
<template>
  <div id="app" style="background-color:#f5f3f3;"> 
    <navbar/>
  
    
    <router-view />
    <foot />
  </div>
</template>
<script>
import navbar from "@/components/navbar/nav";
import foot from "@/components/footer/footer";

export default {
  name:'app',
  components:{
    navbar, foot
    
  }
}
</script>

