<template>
<div class="limiter">
    <div class="container-login100">
        <div class="wrap-login100">
            <div class="login100-pic js-tilt" data-tilt>
                <img src="images/img-01.png" alt="IMG" />
            </div>
            <form method="POST" novalidate="" @submit.prevent="login()" class="login100-form validate-form">
                <div class="bck">
                    <router-link to="/"><i class="fa fa-long-arrow-left m-l-5" aria-hidden="true"></i> </router-link>
                </div>
                <span class="login100-form-title">
                    Get Back Online!!
                </span>
                <div class="wrap-input100 validate-input" data-validate="Password is required">
                    <input class="input100" type="password" name="pass" placeholder="Password" data-eye v-model="user.password">
                    <span class="focus-input100"></span>
                    <span class="symbol-input100">
                        <i class="fa fa-lock" aria-hidden="true"></i>
                    </span>
                </div>
                <div class="wrap-input100 validate-input" data-validate="Password is required">
                    <input class="input100" type="password" name="pass" placeholder="Confirm Password" data-eye v-model="user.confirm_password">
                    <span class="focus-input100"></span>
                    <span class="symbol-input100">
                        <i class="fa fa-lock" aria-hidden="true"></i>
                    </span>
                </div>
                <div class="container-login100-form-btn">
                    <button class="sub-btn login100-form-btn">
                        Reset Password
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
export default {
    data(){
        return {
            details:{
                password: '',
                confirm_password: ''
            },
            loading: false,
        }
    },
    methods:{
      
    }
}

</script>

<style scoped>
*{
    overflow: hidden;
}
</style>