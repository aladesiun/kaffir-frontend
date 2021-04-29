<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  
  components: {
    
  },
  created(){

    var token = localStorage.getItem('token');
    var userr=localStorage.getItem('user');

    if(token && userr){
        this.$store.state.token = token;
        var user = decodeURIComponent(userr);
        this.$store.state.user = JSON.parse(user);
    }

    if(this.$route.meta.AuthRequired || this.$route.matched.find((d)=>d.meta.AuthRequired)){
        if(!userr){ this.$router.push('/login'); return false; }     
    }
  }
}
</script>

<style>
#app{
 
}
</style>
