<template>
  <b-navbar class="is-dark is-bold" active="false">
    <template slot="brand">
      <b-navbar-item class="ml-5" tag="router-link" :to="{ path: '/' }">
        <h1 style="font-size:40px">
          <span class="has-text-success">Contact</span>
          <span class="has-text-white"> Directory</span>
        </h1>
      </b-navbar-item>
    </template>
    <template slot="end">
      
        <b-navbar-item tag="router-link" :to="{ path: '/about' }">
          About
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/add' } " class="mr-6">
          Add contact
        </b-navbar-item>
     
    </template>
  </b-navbar>
</template>

<script>
export default {
  name: "nav",
};
</script>
