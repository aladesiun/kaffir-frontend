<template>
   <div class="limiter">
<div class="container-login100">
<div class="wrap-login100">
<div class="login100-pic js-tilt" data-tilt>
<img src="images/img-01.png" alt="IMG">
</div>
<form method="POST" novalidate="" @submit.prevent="login()" class="login100-form validate-form">
    <div class="bck">
        <router-link to="/"><i class="fa fa-long-arrow-left m-l-5" aria-hidden="true"></i> </router-link>
    </div>
<span class="login100-form-title">
Member Login
</span>
<div class="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
<input class="input100" type="email" name="email" placeholder="Email" v-model="user.email" autofocus>
<span class="focus-input100"></span>
<span class="symbol-input100">
<i class="fa fa-envelope" aria-hidden="true"></i>
</span>
</div>
<div class="wrap-input100 validate-input" data-validate="Password is required">
<input class="input100" type="password" name="pass" placeholder="Password" data-eye v-model="user.password">
<span class="focus-input100"></span>
<span class="symbol-input100">
<i class="fa fa-lock" aria-hidden="true"></i>
</span>
</div>
<div class="container-login100-form-btn">
<button class="sub-btn login100-form-btn">
Login
</button>
</div>
<div class="text-center p-t-12">
<span class="txt1">
Forgot
</span>
<a class="txt2" href="#">
<router-link to="/reset">username/password</router-link>
</a>
</div>
<div class="text-center p-t-60">
<a class="txt2" href="#">
Create your Account?<router-link to="/register">Create One</router-link>

<i class="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
</a>
</div>
</form>
</div>
</div>
</div>
</template>

<script>
export default {
    data(){
        return {
            user:{
                email: ' ',
                password: ' '
            },
            loading: false,
        }
    },
    methods:{
         
        login(){
            if(this.user.email.length == 0 || this.user.password.length == 0){
               this.$store.commit('setNotification',{type:2, message:'Email and Password fields are required'});
               return false;
            }

            this.loading = true;
    
            this.$store.dispatch('post', {
                endpoint: 'login',
                details: this.user
            }).then((data) =>{
                if(data.data.status){
                    var result = data.data.data;
                    localStorage.setItem('token', data.data.token);
                    result.token=data.data.token;
                    this.$store.commit('setUser', result);
                    window.location.href = "/profile";
                    
                }else{
                    var e_msg = data.data.message;
                    console.log(e_msg);
                    this.$store.commit('setNotification',{type:2, message: e_msg})
                }
                this.loading = false;
            }).catch((error) =>{
                if(error.request.status == 422){
                    var error_date = JSON.parse(error.request.response);
                    error_date = error_date.message;
                    this.error_message = error_date;
                    this.$store.commit('setNotification',{type:2, message: this.error_message})
                    this.loading = false;
                }
            });
        }
    }
}

</script>

<style scoped>
*{
    overflow: hidden;
}
</style>