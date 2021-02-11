<template>
    <div class="my-login-page">
        <section class="h-100">
            <div class="container h-100">
                <div class="row justify-content-md-center h-100">
                    <div class="card-wrapper">
                        <div class="brand">
                            <img src="img/logo 2.png" alt="logo">
                        </div>
                        <div class="card fat">
                            <div class="card-body">
                                <h4 class="card-title">Login</h4>
                                <notification/>
                                <form method="POST" class="my-login-validation" novalidate="" @submit.prevent="login()">
                                    <div class="form-group">
                                        <label for="email">E-Mail Address</label>
                                        <input id="email" type="email" v-model="user.email" class="form-control" name="email" value=""  autofocus>
                                        <div class="invalid-feedback"> Email is invalid </div>
                                    </div>

                                    <div class="form-group">
                                        <label for="password">Password
                                            <a href="forgot.html" class="float-right"> Forgot Password? </a>
                                        </label>
                                        <input id="password" type="password" v-model="user.password" class="form-control" name="password"  data-eye>
                                        <div class="invalid-feedback"> Password is required </div>
                                    </div>

                                    <div class="form-group">
                                        <div class="custom-checkbox custom-control">
                                            <input type="checkbox" name="remember" id="remember" class="custom-control-input">
                                            <label for="remember" class="custom-control-label">Remember Me</label>
                                        </div>
                                    </div>

                                    <div class="form-group m-0">
                                        <button type="submit" class="btn btn-primary btn-block">Login</button>
                                    </div>
                                    <div class="mt-4 text-center"> Don't have an account? 
                                        <router-link to="/register">Create One</router-link>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="footer"> Copyright &copy; 2021 &mdash; kaffir </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    data(){
        return {
            user:{
                email: 'aladesiunpelumi@gmail.com',
                password: 'aladesiun11'
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
                    window.location.href = "/";
                    
                }else{
                    var e_msg = data.data.message;
                    this.$store.commit('setNotification',{type:2, message: e_msg})
                }
                this.loading = false;
            }).catch((error) =>{
                console.log('error');
                console.log(error.request);
                if(error.request.status == 422){
                    var error_date = JSON.parse(error.request.response);
                    error_date = error_date.message;
                    this.error_message = error_date;
                    this.loading = false;
                }
            });
        }
    }
}
</script>

<style>
    html,body {
        height: 100%;
        overflow-x: hidden;
        scroll-behavior: smooth;
    }

    .my-login-page {
        background-image: -webkit-linear-gradient(45deg,#fff 0, #4F52FF 100%);
        border: none;
        font-size: 14px;
    }
    
    input:focus{
        border-color:lightgray!important ;
        box-shadow: none!important;
    }

    .my-login-page .brand {
        width: 90px;
        height: 90px;
        overflow: hidden;
        /* border-radius: 50%; */
        margin: 40px auto;
        /* box-shadow: 0 4px 8px rgba(0,0,0,.05); */
        position: relative;
        top: 30px;
        z-index: 1;
    }

    .my-login-page .brand img {
        width: 100%;
    }

    .my-login-page .card-wrapper {
        width: 400px;
    }

    .my-login-page .card {
        border-color: transparent;
        box-shadow: 0 4px 8px rgba(0,0,0,.05);
    }

    .my-login-page .card.fat {
        padding: 10px;
    }
    .btn-primary {
        transition:all .3s!important;
        color: #fff;
        border: none;
        background: #4F52FF;

        /* background-image: -webkit-linear-gradient(45deg,#f920ac 0,#be09f6 100%); */
    }
    .btn-primary:hover {
        color:#4F52FF;
        border: 2px solid #4F52FF!important;
        background-color: white!important;

    }

    .my-login-page .custom-control-input .custom-control-label{
        display: inline !important;
        margin-left: 5px;
    }

    .my-login-page .card .card-title {
        margin-bottom: 30px;
    }

    .my-login-page .form-group{
        margin-bottom: 1rem;
    }

    .my-login-page .form-control {
        border-width: 2.3px;
    }

    .my-login-page .form-group label {
        width: 100%;
    }

    .my-login-page .footer {
        margin: 40px 0;
        color: #888;
        text-align: center;
    }
    .my-login-page .btn.btn-block {
        padding: 12px 10px;
        /* background-image: -webkit-linear-gradient(45deg,#9b8e02 0,#be09f6 100%);
        */
        background: #4F52FF;
        border: none;
    }
    a{
        color: #4F52FF;
    }
    label{
        color: #000000;
    }
    @media screen and (max-width: 425px) {
        .my-login-page .card-wrapper {
            width: 90%;
            margin: 0 auto;
        }
    }

    @media screen and (max-width: 320px) {
        .my-login-page .card.fat {
            padding: 0;
        }

        .my-login-page .card.fat .card-body {
            padding: 15px;
        }
    }
</style>