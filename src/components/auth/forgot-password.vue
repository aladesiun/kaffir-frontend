<template>
<div class="limiter">
    <div class="container-login100">
        <div class="wrap-login100">
            <div class="login100-pic js-tilt" data-tilt>
                <img src="images/img-01.png" alt="IMG" />
            </div>
                <form method="POST" novalidate="" @submit.prevent="forgotPassword()" class="login100-form validate-form">
            <div class="bck">
                <router-link to="/"><i class="fa fa-long-arrow-left m-l-5" aria-hidden="true"></i> </router-link>
            </div>
            <span class="login100-form-title">
                Get Back Online!!
            </span>
            <notification/>
            <div class="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                <input class="input100" type="email" name="email" placeholder="Email" v-model="user.email" autofocus />
                <span class="focus-input100"></span>
                <span class="symbol-input100">
                    <i class="fa fa-envelope" aria-hidden="true"></i>
                </span>
            </div>
            <div class="container-login100-form-btn">
                <button class="sub-btn login100-form-btn">
                    <span v-if="!loading">Continue</span>
                    <span v-else>Loading...</span>
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
            <div class="text-center p-t-60">
                <a class="txt2" href="#">
                    <router-link to="/login">login instead</router-link>

                    <i class="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
                </a>
            </div>
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
            user:{
                email: '',
            },
            loading: false,
        }
    },
    methods:{
        forgotPassword(){
            this.loading = true;
            this.$store.dispatch('post', {
                endpoint: 'forgot-password',
                details: this.user
            })
            .then((data) => {
                console.log(data);
                if(data.data.status){
                    this.$store.commit('setNotification',{type:1, message: data.data.message});
                }
                else{
                    this.$store.commit('setNotification',{type:2, message: data.data.message});
                }
            
                this.loading = false
            })
            .catch((error) => {
                console.log(error);
                this.$store.commit('setNotification',{type:1, message:error.error.message});
            })
        }
    }
}

</script>

<style scoped>
*{
    overflow: hidden;
}
</style>