<template>
  
    <b-navbar class="is-dark is-isbold is-gradient">
        
        <template slot="brand">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
           <h1 style="font-size:20px">  <span class="has-text-success">Contact</span>
          <span class="has-text-white"> Directory</span></h1>
        </b-navbar-item>
      </template>
       
    
      <template slot="start">
        <b-navbar-item tag="router-link" :to="{ path: '/about' }">
         <b-icon
                icon="view-dashboard"
                size="is-small">
            </b-icon> About
        </b-navbar-item>
      </template>
    </b-navbar>

</template>

<script>
export default {
  name: "nav",
};
</script>
