<template>
       <div class="limiter">
<div class="container-login100">
<div class="wrap-login100">
<div class="dds text-center" data-tilt>
<!-- <img src="images/img-01.png" alt="IMG"> -->
<h5>YOUR TURN!!</h5>
<div class="smile">
    <i class="far fa-grin-wink"></i>
</div>
<span>Message your friends, family and loved ones your heart desires without them knowing it's you,we got you on this.</span>
  <span>register now to get Started</span>

</div>
<form method="POST" novalidate="" @submit.prevent="signup()" class="login100-form validate-form">
    <div class="bck">
        <router-link to="/"><i class="fa fa-long-arrow-left m-l-5" aria-hidden="true"></i> </router-link>
    </div>
<span class="login100-form-title shw">
Create Account
</span>
<notification/>
<div class="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
<input class="input100" type="text" name="name" placeholder="username" v-model="user.name" autofocus required>
<span class="focus-input100"></span>
<span class="symbol-input100">
<i class="fa fa-envelope" aria-hidden="true"></i>
</span>
</div>
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
    Register <i class="far fa-paper-plane"></i>
</button>
</div>
<div class="text-center p-t-12">
<span class="txt1">
Forgot
</span>
<a class="txt2" href="#">
Username / Password?
</a>
</div>
<div class="text-center p-t-60">
<a class="txt2" href="#">
Already Have Account?<router-link to="/login">Login</router-link>

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
                name: '',
                email: '',
                password: '',
            },
            loading: false,
        }
    },
    created:{
    },

    methods:{
        
        signup(){
            if(this.user.name.length == 0 || this.user.email.length == 0 || this.user.password.length == 0 ){
                setTimeout(function () {
                    this.$store.commit('setNotification',{type:2, message:'Email and Password fields are required'});
                }, 3000
                );
                return false;
            }

            this.loading = true;

            this.$store.dispatch('post', {
                endpoint: 'signup',
                details: this.user
            })
            .then((data) => {
                if(data.data.status){
                    var user = data.data.data;
                    this.$store.commit('setUser', user);
                    this.$store.commit('setNotification',{type:1, message:'Registration Successful'});
                    window.location.href = '/profile';
                }
                this.loading = false;
            })
            .catch((error) => {
                console.log(error)
            })
        }
    }
}
</script>
<style >
form{
    margin: auto;
}
.smile i{
    font-size: 13rem;
    color: #4f52ff;

}
.bck{
    position: absolute;
    top: 4%;
    left: 2%;
}
.bck i{
    font-size: 20px;
    padding: 20px;


}
.dds{
    margin: auto;
    /* padding-bottom: 10px; */
}
.dds h5{
    font-size: 25px;
}
.dds{
    width: 325px;
        
}
.dds span{
    font-size: 15px;
}
@media screen and (max-width:700px){
    .bck{
        top: 7%;
    }
    .shw{
        display: none;
    }
    .dds{
    margin: auto;
    padding-bottom: 17px;
    }
    .smile i {
        font-size: 9rem!important;
    }
}
</style>