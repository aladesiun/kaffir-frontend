<template>
<div class="limiter">
    <div class="container-login100">
        <div class="wrap-login100">
            <div class="login100-pic js-tilt" data-tilt>
                <img src="images/img-01.png" alt="IMG" />
            </div>
            <form method="POST" novalidate="" @submit.prevent="reset()" class="login100-form validate-form">
                <div class="bck">
                    <router-link to="/"><i class="fa fa-long-arrow-left m-l-5" aria-hidden="true"></i> </router-link>
                </div>
                <span class="login100-form-title">
                    Get Back Online!!
                </span>
                <notification/>
                <div class="wrap-input100 validate-input" data-validate="Password is required">
                    <input class="input100" type="password" name="pass" placeholder="Password" data-eye v-model="psw.password">
                    <span class="focus-input100"></span>
                    <span class="symbol-input100">
                        <i class="fa fa-lock" aria-hidden="true"></i>
                    </span>
                </div>
                <div class="wrap-input100 validate-input" data-validate="Password is required">
                    <input class="input100" type="password" name="pass" placeholder="Confirm Password" data-eye v-model="psw.password_confirmation">
                    <span class="focus-input100"></span>
                    <span class="symbol-input100">
                        <i class="fa fa-lock" aria-hidden="true"></i>
                    </span>
                </div>
                <div class="container-login100-form-btn">
                    <button class="sub-btn login100-form-btn">
                        <span v-if="!loading">Reset Password</span>
                        <span v-else>Loading</span>
                    </button>
                </div>
                <!-- <div class="text-center p-t-12">
                    <span class="txt1">
                        Forgot
                    </span>
                    <a class="txt2" href="#">
                        please confirm your email
                    </a>
                </div> -->
        
            </form>
        </div>
    </div>
</div>


</template>

<script>
import notification from '../layouts/notification.vue';
export default {
  components: { notification },
    data(){
        return {
            psw:{
                token:'',
                password:'',
                password_confirmation:'',
            },
            loading: false,
        }
    },
    methods:{
        verifyAccount(){ 
            this.loading=true;
            // this.$store.commit('setNotification',{type:0,msg:''});
            this.$store.dispatch('get','verify-reset-token?code='+this.$route.params.token)
            .then((data)=>{
                this.loading=false;
                if(data.data.status){
                    console.log(data.data)
                    this.verified=true;
                    this.psw.token=this.$route.params.token;
                }else{
                    this.$store.commit('setNotification',{type:2, msg:'Expired or Invalid reset link. <br> Please try resetting your password again.'});  
                }
            })
            .catch((error)=>{
                console.log(error.request);
                if(error.request != null){
                    this.$store.dispatch("handleError",error); 
                }
                this.loading=false;
            });
        },
        reset(){
            if(this.psw.password_confirmation.length == 0 || this.psw.password.length == 0){
                this.$store.commit('setNotification',{type:2, msg:'Password and Confirm password fields are required'});
                return false;
            }


            if(this.psw.password_confirmation != this.psw.password){
                this.$store.commit('setNotification',{type:2, msg:"password doesn't match"});
                return false;
            }

            if(this.loading){
                return false;
            } 

            this.loading=true;
            this.psw.token = this.$route.params.token;
            this.$store.dispatch('post',{
                details:this.psw,
                endpoint:'reset-password'
            })
            .then((data)=>{
                console.log(data);
                if(data.data.status){
                    this.$store.commit('setNotification',{type:1, msg:'Your password reset was successful.'});
                    window.location.href='/login';
                }else{
                    this.$store.commit('setNotification',{type:2, msg:data.data.message});
                }

                this.loading=false; 
            })
            .catch((error)=>{
                console.log(error.request);
                if(error.request != null){
                    this.$store.dispatch("handleError",error); 
                }

                this.loading=false;
            });
        }
    },
    created(){
        this.verifyAccount();
    }
}

</script>

<style scoped>
*{
    overflow: hidden;
}
</style>