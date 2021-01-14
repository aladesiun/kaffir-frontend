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
                                <form method="POST" class="my-login-validation" novalidate="">
                                    <div class="form-group">
                                        <label for="email">E-Mail Address</label>
                                        <input id="email" type="email" class="form-control" name="email" value="" required autofocus>
                                        <div class="invalid-feedback"> Email is invalid </div>
                                    </div>

                                    <div class="form-group">
                                        <label for="password">Password
                                            <a href="forgot.html" class="float-right"> Forgot Password? </a>
                                        </label>
                                        <input id="password" type="password" class="form-control" name="password" required data-eye>
                                        <div class="invalid-feedback"> Password is required </div>
                                    </div>

                                    <div class="form-group">
                                        <div class="custom-checkbox custom-control">
                                            <input type="checkbox" name="remember" id="remember" class="custom-control-input">
                                            <label for="remember" class="custom-control-label">Remember Me</label>
                                        </div>
                                    </div>

                                    <div class="form-group m-0">
                                        <a href="/realprofile.html" class="btn btn-primary btn-block">Login</a>
                                    </div>
                                    <div class="mt-4 text-center"> Don't have an account? 
                                        <a href="register.html">Create One</a>
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