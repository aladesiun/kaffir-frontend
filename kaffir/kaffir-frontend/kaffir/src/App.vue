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
  }, 
  mounted() {
        // Listen for the 'NewBlogPost' event in the 'team.1' private channel
        // this.$echo.private('chat').listen('ChatEvent', (payload) => {
        //     console.log(payload);
        // });
        window.Echo.channel('channel_new') 
        .listen('chat',(data)=>{
            window.console.log(data); 
        });

        console.log('subscribed');
    },

}
</script>

<style>

</style>
